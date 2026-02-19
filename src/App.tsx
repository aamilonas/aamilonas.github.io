import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Software from './pages/Software'
import MobileApps from './pages/MobileApps'
import DataAnalytics from './pages/DataAnalytics'
import AddProjectDialog from './components/ui/AddProjectDialog'

function App() {
  return (
    <Router>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/software" element={<Software />} />
            <Route path="/mobile-apps" element={<MobileApps />} />
            <Route path="/data-analytics" element={<DataAnalytics />} />
          </Routes>
        </AnimatePresence>
      </Layout>
      <AddProjectDialog />
    </Router>
  )
}

export default App
