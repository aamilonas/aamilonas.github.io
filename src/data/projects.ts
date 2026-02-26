export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  githubUrl: string
  projectUrl?: string
  imageUrl?: string
  gifUrl?: string
  metrics?: string[]
}

export const softwareProjects: Project[] = [
  {
    id: 'ai-market-oracle',
    title: 'AI Market Oracle',
    description: 'Automated platform that pits five AI models against each other in daily stock market predictions. Each model researches live market conditions and makes falsifiable predictions before market open, scored against real closing data. Features a public leaderboard tracking which AI is the best forecaster over time.',
    techStack: ['React', 'Python', 'GitHub Actions', 'Recharts', 'Vite'],
    githubUrl: 'https://github.com/aamilonas/ai-market-oracle',
    projectUrl: 'https://aamilonas.github.io/ai-market-oracle/',
    imageUrl: '/ai-market-oracle.png',
    metrics: ['5 AI models competing', 'Automated daily predictions', 'Real market scoring']
  },
  {
    id: 'distributed-task-scheduler',
    title: 'Distributed Task Scheduler',
    description: 'High-throughput job processing system handling 10K+ requests/sec with sub-100ms latency. Built with event-driven microservices architecture, featuring automatic failover, priority queuing, and real-time monitoring dashboards. Achieved 99.9% uptime in production environments.',
    techStack: ['Go', 'Redis', 'PostgreSQL', 'Kubernetes', 'gRPC'],
    githubUrl: '#',
    metrics: ['10K+ req/sec throughput', '99.9% uptime', '<100ms p99 latency']
  },
  {
    id: 'realtime-analytics-engine',
    title: 'Real-Time Analytics Engine',
    description: 'Stream processing pipeline for real-time data analytics with sub-millisecond latency. Processes 1M+ events/day with statistical anomaly detection and automated alerting. Enables low-latency insights for time-sensitive decision making.',
    techStack: ['Python', 'Apache Kafka', 'Apache Flink', 'ClickHouse', 'Grafana'],
    githubUrl: '#',
    metrics: ['1M+ events/day', 'Sub-ms processing', 'Real-time anomaly detection']
  },
  {
    id: 'api-gateway',
    title: 'API Gateway with Rate Limiting',
    description: 'Production-grade API gateway implementing intelligent rate limiting, circuit breakers, and request routing. Supports JWT authentication, request/response transformation, and comprehensive audit logging. Reduced API abuse by 95% while maintaining developer experience.',
    techStack: ['Node.js', 'TypeScript', 'Redis', 'Docker', 'OpenAPI'],
    githubUrl: '#',
    metrics: ['95% abuse reduction', 'Zero-downtime deployments', '<5ms routing overhead']
  }
]

export const mobileProjects: Project[] = [
  {
    id: 'focusflow',
    title: 'FocusFlow',
    description: 'A comprehensive student productivity app built natively for iOS 17 using SwiftUI and Firebase. FocusFlow consolidates seven core tools — assignment tracking, note-taking, class scheduling, a Pomodoro study timer, calendar integration, motivational quotes, and student utilities — into one cohesive interface. Firebase Authentication provides secure sign-in while Cloud Firestore enables real-time data persistence across sessions. The Pomodoro module enforces structured focus intervals with customizable break periods. EventKit integration bridges in-app schedules directly with the device\'s native iPhone calendar. The workspace feature organizes notes by class for accessible study materials, and assignment management supports due-date tracking and status updates. Designed with a clean, distraction-free UI, FocusFlow demonstrates deep integration of Apple\'s native frameworks alongside Google\'s Firebase backend in a real-world academic productivity context.',
    techStack: ['Swift', 'SwiftUI', 'Firebase Auth', 'Cloud Firestore', 'EventKit'],
    githubUrl: 'https://github.com/aamilonas/FocusFlow',
    imageUrl: '/mobile/focusflow.png',
    metrics: ['7 integrated modules', 'Real-time sync', 'Pomodoro timer']
  },
  {
    id: 'notifications-app',
    title: 'Social Notifications App',
    description: 'My first app published on the App Store — originally built for myself to appear popular while on dates. The app simulates incoming social media notifications to create the appearance of an active, engaged social life. Users can adjust notification frequency (every 5–15 minutes), select the apparent sender gender, and choose the notification sound from popular platforms including iMessage, Tinder, Snapchat, and Instagram. Notifications are scheduled via iOS\'s local notification system and run in the background, requiring no active app interaction once configured. The app is lightweight and focused on a single, clearly defined use case. This project demonstrates practical use of iOS background task scheduling, the UserNotifications framework, and settings-driven UI configuration in a real-world, user-facing application.',
    techStack: ['Swift', 'iOS', 'UserNotifications', 'AVFoundation'],
    githubUrl: 'https://github.com/aamilonas/NotificationsApp',
    imageUrl: '/mobile/notifai.jpeg',
    metrics: ['Published on App Store', 'Multi-platform sounds', 'Background scheduling']
  },
  {
    id: 'translateme',
    title: 'TranslateMe',
    description: 'A multi-language translation app for iOS built with SwiftUI and powered by the MyMemory REST API. TranslateMe supports translation across 15 languages with intuitive language selection dropdowns and a one-tap swap button to instantly reverse source and target languages. Network requests are handled via URLSession with Swift\'s async/await concurrency model, with responses decoded through Codable and JSONDecoder for type-safe parsing. Completed translations are automatically persisted to Firebase Firestore, populating a persistent history screen where users can review, selectively delete, or bulk-clear past entries. History remains cloud-synced across sessions. Built following an MVVM-inspired architecture with @Observable and @Published properties, TranslateMe cleanly separates presentation from business logic, demonstrating proficient use of REST APIs, real-time database integration, and Swift\'s modern concurrency features in a practical, user-facing product.',
    techStack: ['Swift', 'SwiftUI', 'Firebase Firestore', 'MyMemory API', 'URLSession', 'MVVM'],
    githubUrl: 'https://github.com/aamilonas/Language-Translation-app',
    imageUrl: '/mobile/translateme.png',
    metrics: ['15 languages', 'Persistent history', 'Cloud-synced']
  },
  {
    id: 'firebase-chat-app',
    title: 'Firebase Chat App',
    description: 'A real-time messaging application for iOS built with SwiftUI, Firebase Authentication, and Cloud Firestore. Users create an account or log in, then join a global chat feed where messages appear instantly across all connected devices. Incoming and outgoing messages are displayed in an iMessage-inspired bubble interface with color-coded alignment — sent messages on the right, received on the left — providing a familiar messaging experience. Firestore real-time listeners power live message delivery without manual refresh. The app follows an MVVM-inspired architecture, leveraging @Observable and @Published properties to reactively update the UI as new data arrives. Firebase Authentication handles the full sign-up and login flow with email/password credentials. This project demonstrates practical real-time data synchronization, reactive state management, and native UI design patterns in a fully functional iOS messaging context.',
    techStack: ['Swift', 'SwiftUI', 'Firebase Auth', 'Cloud Firestore', 'MVVM'],
    githubUrl: 'https://github.com/aamilonas/FireChat',
    imageUrl: '/mobile/firebase-chat.png',
    metrics: ['Real-time messaging', 'Cross-device sync', 'iMessage-style UI']
  },
  {
    id: 'instaparse',
    title: 'Instaparse',
    description: 'A social photo-sharing iOS app built with UIKit and the ParseSwift SDK, hosted on Back4App. Instaparse implements a privacy-first feed gating mechanism: users cannot view unblurred photos from others until they have posted their own, encouraging active participation over passive browsing. Posts are filtered to display only the 10 most recent items from the past 24 hours; content older than one day is automatically blurred, keeping the feed fresh and time-sensitive. Photo capture is handled via UIImagePickerController and the PhotosUI framework, allowing users to take photos directly with the device camera. AlamofireImage manages efficient asynchronous image loading and caching. The app uses Auto Layout for responsive UI design. This project demonstrates REST-based backend integration, privacy-driven UX patterns, and native camera hardware access on iOS.',
    techStack: ['Swift', 'UIKit', 'ParseSwift', 'Back4App', 'AlamofireImage', 'PhotosUI'],
    githubUrl: 'https://github.com/aamilonas/instagraparse-clone',
    imageUrl: '/mobile/instaparse.png',
    metrics: ['Privacy-gating feed', '24h content window', 'Camera integration']
  },
  {
    id: 'trivia-quiz-app',
    title: 'Trivia Quiz App',
    description: 'A fully customizable quiz application for iOS powered by the Open Trivia Database API. Before each game, users configure their session by selecting the number of questions, subject category, difficulty level (easy, medium, or hard), and question format (multiple choice or true/false). Network requests are handled via URLSession with async/await, with JSON responses decoded through Codable for type-safe parsing. Questions are presented sequentially with answer validation and real-time feedback, and a final score screen summarizes performance. A configurable full-quiz timer lets users set a countdown from 30 seconds to one hour, adding a time-pressure challenge mode. The app follows MVVM architecture with clean separation of data-fetching, game state, and UI. This project demonstrates REST API integration, Swift concurrency, stateful game logic, and the Timer framework in a polished iOS application.',
    techStack: ['Swift', 'SwiftUI', 'URLSession', 'Open Trivia DB API', 'MVVM', 'Codable'],
    githubUrl: 'https://github.com/aamilonas/Trivia-app',
    imageUrl: '/mobile/trivia-quiz.png',
    metrics: ['Multiple categories', 'Configurable timer', '3 difficulty levels']
  },
  {
    id: 'memory-card-game',
    title: 'Memory Card Game',
    description: 'A SwiftUI card-matching puzzle for iOS with selectable difficulty levels from 2 to 8 pairs. Players flip cards to find matching symbols, with the goal of clearing the board efficiently. LazyVGrid dynamically adjusts column count based on the selected difficulty, keeping the layout visually balanced. Card-flip and match animations use SwiftUI\'s built-in animation system, delivering smooth visual feedback on every interaction. Flip logic leverages DispatchQueue to briefly delay unmatched card resets, giving players time to register mismatches before cards return face-down. Game state is managed with @State, @Published, and @StateObject for reactive, real-time UI updates. A win screen appears on board completion, with a full reset option always accessible. This project demonstrates SwiftUI animation techniques, dynamic grid layout, and clean state-driven game logic in a polished iOS game.',
    techStack: ['Swift', 'SwiftUI', 'LazyVGrid', 'DispatchQueue', 'StateObject'],
    githubUrl: 'https://github.com/aamilonas/Memory-Card-Game',
    imageUrl: '/mobile/memory-card.png',
    metrics: ['8 difficulty levels', 'Animated flip logic', 'Dynamic grid layout']
  }
]

export const dataProjects: Project[] = [
  {
    id: 'predictive-model-pipeline',
    title: 'Predictive Model Pipeline',
    description: 'End-to-end ML pipeline with automated feature engineering, model training, and production deployment. Implements A/B testing framework for model comparison and drift detection. Reduced model deployment time from weeks to hours.',
    techStack: ['Python', 'scikit-learn', 'MLflow', 'Airflow', 'AWS SageMaker'],
    githubUrl: '#',
    metrics: ['90% faster deployment', 'Automated drift detection', 'CI/CD for ML']
  },
  {
    id: 'market-sentiment-analyzer',
    title: 'Market Sentiment Analyzer',
    description: 'NLP system analyzing financial news, earnings calls, and social media for market sentiment. Backtested strategy showed 12% alpha over benchmark. Features entity recognition, sentiment scoring, and correlation with price movements.',
    techStack: ['Python', 'BERT', 'spaCy', 'PostgreSQL', 'FastAPI'],
    githubUrl: '#',
    metrics: ['12% alpha (backtested)', '85% sentiment accuracy', 'Real-time processing']
  },
  {
    id: 'customer-churn-predictor',
    title: 'Customer Churn Predictor',
    description: 'Churn prediction model with interpretable feature importance and actionable retention insights. Achieved 87% precision in identifying at-risk customers, enabling targeted intervention campaigns that reduced churn by 23%.',
    techStack: ['Python', 'XGBoost', 'SHAP', 'Pandas', 'Tableau'],
    githubUrl: '#',
    metrics: ['87% precision', '23% churn reduction', 'Interpretable insights']
  }
]

export const allProjects = {
  software: softwareProjects,
  mobile: mobileProjects,
  data: dataProjects
}
