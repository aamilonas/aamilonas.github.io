import { useState } from 'react'
import { PlusIcon, XMarkIcon, ClipboardDocumentIcon } from '@heroicons/react/24/outline'

type Category = 'mobile' | 'software' | 'data'

interface ProjectForm {
  title: string
  description: string
  gifUrl: string
  techStack: string
  metrics: string
  githubUrl: string
  category: Category
}

function parseReadme(content: string, repoUrl: string, branch: string): Partial<ProjectForm> {
  const repoMatch = repoUrl.match(/github\.com\/([^/\s]+)\/([^/\s]+)/)
  const owner = repoMatch?.[1] ?? ''
  const repo = repoMatch?.[2]?.replace(/\/$/, '') ?? ''

  // Title: first H1
  const titleMatch = content.match(/^#\s+(.+)/m)
  const title = titleMatch ? titleMatch[1].trim() : repo

  // GIF URLs — resolve relative paths to raw GitHub absolute URLs
  const gifMatches = [...content.matchAll(/!\[.*?\]\(([^)]*?\.(?:gif|GIF))\)/gi)]
  let gifUrl = ''
  if (gifMatches.length > 0) {
    const raw = gifMatches[0][1]
    gifUrl = raw.startsWith('http')
      ? raw
      : `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${raw}`
  }

  // Description: first substantive paragraphs (non-heading, non-image lines)
  const descLines: string[] = []
  for (const line of content.split('\n')) {
    const t = line.trim()
    if (!t || t.startsWith('#') || t.startsWith('!') || t.startsWith('<') || t.startsWith('|')) continue
    if (t.length > 15) descLines.push(t)
    if (descLines.length >= 6) break
  }
  const description = descLines.join(' ').slice(0, 600)

  // Tech stack: scan for known keywords
  const keywords = [
    'Swift', 'SwiftUI', 'UIKit', 'Firebase', 'Firestore', 'EventKit', 'HealthKit',
    'Core Data', 'URLSession', 'Combine', 'AVFoundation', 'UserNotifications',
    'React', 'React Native', 'Flutter', 'Dart', 'Kotlin', 'Java',
    'Python', 'TypeScript', 'JavaScript', 'Node.js', 'Go', 'Rust',
    'PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Docker', 'Kubernetes',
    'AWS', 'GCP', 'Alamofire', 'ParseSwift', 'AlamofireImage',
    'MVVM', 'GraphQL', 'REST', 'WebSocket', 'Codable',
  ]
  const found = keywords.filter(k => new RegExp(`\\b${k}\\b`, 'i').test(content))
  const techStack = found.slice(0, 7).join(', ')

  return { title, description, gifUrl, techStack, githubUrl: repoUrl }
}

const EMPTY_FORM: ProjectForm = {
  title: '',
  description: '',
  gifUrl: '',
  techStack: '',
  metrics: '',
  githubUrl: '',
  category: 'mobile',
}

export default function AddProjectDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const [repoUrl, setRepoUrl] = useState('')
  const [isFetching, setIsFetching] = useState(false)
  const [fetchError, setFetchError] = useState('')
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState<ProjectForm>(EMPTY_FORM)

  function update(field: keyof ProjectForm, value: string) {
    setForm(f => ({ ...f, [field]: value }))
  }

  async function fetchReadme() {
    setFetchError('')
    setIsFetching(true)
    try {
      const match = repoUrl.match(/github\.com\/([^/\s]+)\/([^/\s]+)/)
      if (!match) throw new Error('Invalid GitHub URL — expected https://github.com/owner/repo')
      const [, owner, repo] = match
      const cleanRepo = repo.replace(/\/$/, '')

      let content = ''
      let usedBranch = 'main'
      for (const branch of ['main', 'master']) {
        const res = await fetch(
          `https://raw.githubusercontent.com/${owner}/${cleanRepo}/${branch}/README.md`
        )
        if (res.ok) {
          content = await res.text()
          usedBranch = branch
          break
        }
      }
      if (!content) throw new Error('README not found on main or master branch')

      const parsed = parseReadme(content, repoUrl, usedBranch)
      setForm(f => ({ ...f, ...parsed, githubUrl: repoUrl }))
    } catch (e) {
      setFetchError((e as Error).message)
    } finally {
      setIsFetching(false)
    }
  }

  function generateEntry(): string {
    const id = form.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    const techArr = form.techStack.split(',').map(t => t.trim()).filter(Boolean)
    const metricsArr = form.metrics.split(',').map(m => m.trim()).filter(Boolean)
    const desc = form.description.replace(/\\/g, '\\\\').replace(/'/g, "\\'")

    const lines = [
      `  {`,
      `    id: '${id}',`,
      `    title: '${form.title}',`,
      `    description: '${desc}',`,
      `    techStack: ${JSON.stringify(techArr)},`,
      `    githubUrl: '${form.githubUrl}',`,
    ]
    if (form.gifUrl) lines.push(`    gifUrl: '${form.gifUrl}',`)
    if (metricsArr.length) lines.push(`    metrics: ${JSON.stringify(metricsArr)},`)
    lines.push(`  },`)

    const categoryLabel: Record<Category, string> = {
      mobile: 'mobileProjects',
      software: 'softwareProjects',
      data: 'dataProjects',
    }

    return `// Paste into the ${categoryLabel[form.category]} array in src/data/projects.ts\n` +
      lines.join('\n')
  }

  async function copyEntry() {
    await navigator.clipboard.writeText(generateEntry())
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  function openFresh() {
    setForm(EMPTY_FORM)
    setRepoUrl('')
    setFetchError('')
    setCopied(false)
    setIsOpen(true)
  }

  if (!isOpen) {
    return (
      <button
        onClick={openFresh}
        className="fixed bottom-6 right-6 btn btn-primary btn-circle shadow-xl z-50"
        title="Add Project"
        aria-label="Add project"
      >
        <PlusIcon className="h-6 w-6" />
      </button>
    )
  }

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      onClick={e => { if (e.target === e.currentTarget) setIsOpen(false) }}
    >
      <div className="bg-base-100 border border-base-300 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-base-300">
          <h2 className="font-serif text-h3 text-base-content">Add Project</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="btn btn-ghost btn-circle btn-sm"
            aria-label="Close"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="px-6 py-5 space-y-4">
          {/* GitHub URL + Fetch */}
          <div>
            <label className="label pb-1">
              <span className="text-sm font-medium text-base-content">GitHub Repo URL</span>
            </label>
            <div className="flex gap-2">
              <input
                type="url"
                placeholder="https://github.com/username/repo"
                value={repoUrl}
                onChange={e => setRepoUrl(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && repoUrl && !isFetching && fetchReadme()}
                className="input input-bordered flex-1 text-sm"
              />
              <button
                onClick={fetchReadme}
                disabled={isFetching || !repoUrl}
                className="btn btn-primary btn-sm whitespace-nowrap"
              >
                {isFetching
                  ? <span className="loading loading-spinner loading-xs" />
                  : 'Fetch README'}
              </button>
            </div>
            {fetchError && (
              <p className="text-error text-sm mt-1">{fetchError}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="label pb-1">
              <span className="text-sm font-medium text-base-content">Page / Category</span>
            </label>
            <select
              value={form.category}
              onChange={e => update('category', e.target.value)}
              className="select select-bordered w-full text-sm"
            >
              <option value="mobile">Mobile Apps</option>
              <option value="software">Software</option>
              <option value="data">Data Analytics</option>
            </select>
          </div>

          {/* Title */}
          <div>
            <label className="label pb-1">
              <span className="text-sm font-medium text-base-content">Title</span>
            </label>
            <input
              type="text"
              value={form.title}
              onChange={e => update('title', e.target.value)}
              className="input input-bordered w-full text-sm"
              placeholder="My Project"
            />
          </div>

          {/* Description */}
          <div>
            <label className="label pb-1">
              <span className="text-sm font-medium text-base-content">
                Description
                <span className="text-ink-400 font-normal ml-1">(100–200 words)</span>
              </span>
            </label>
            <textarea
              value={form.description}
              onChange={e => update('description', e.target.value)}
              rows={6}
              className="textarea textarea-bordered w-full text-sm resize-y"
              placeholder="Professional summary of the project..."
            />
          </div>

          {/* GIF URL */}
          <div>
            <label className="label pb-1">
              <span className="text-sm font-medium text-base-content">
                GIF Preview URL
                <span className="text-ink-400 font-normal ml-1">(shown on card hover)</span>
              </span>
            </label>
            <input
              type="url"
              value={form.gifUrl}
              onChange={e => update('gifUrl', e.target.value)}
              className="input input-bordered w-full text-sm"
              placeholder="https://raw.githubusercontent.com/..."
            />
          </div>

          {/* Tech Stack */}
          <div>
            <label className="label pb-1">
              <span className="text-sm font-medium text-base-content">
                Tech Stack
                <span className="text-ink-400 font-normal ml-1">(comma-separated)</span>
              </span>
            </label>
            <input
              type="text"
              value={form.techStack}
              onChange={e => update('techStack', e.target.value)}
              className="input input-bordered w-full text-sm"
              placeholder="Swift, SwiftUI, Firebase"
            />
          </div>

          {/* Metrics */}
          <div>
            <label className="label pb-1">
              <span className="text-sm font-medium text-base-content">
                Feature / Metric Tags
                <span className="text-ink-400 font-normal ml-1">(comma-separated, 2–3 items)</span>
              </span>
            </label>
            <input
              type="text"
              value={form.metrics}
              onChange={e => update('metrics', e.target.value)}
              className="input input-bordered w-full text-sm"
              placeholder="Real-time sync, 15 languages, Offline-first"
            />
          </div>

          {/* Copy entry */}
          <div className="pt-3 border-t border-base-300">
            <p className="text-body-sm text-ink-400 mb-3">
              Click below to copy the TypeScript entry, then paste it into the correct array in{' '}
              <code className="text-primary text-xs">src/data/projects.ts</code>.
            </p>
            <button
              onClick={copyEntry}
              disabled={!form.title}
              className="btn btn-primary w-full gap-2"
            >
              <ClipboardDocumentIcon className="h-4 w-4" />
              {copied ? 'Copied to clipboard!' : 'Copy TypeScript Entry'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
