export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  githubUrl: string
  imageUrl?: string
  metrics?: string[]
}

export const softwareProjects: Project[] = [
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
    id: 'portfolio-tracker',
    title: 'Portfolio Tracker',
    description: 'Real-time portfolio management app with live market data synchronization across multiple exchanges. Features include position tracking, P&L calculations with tax-lot optimization, and custom alert rules. Syncs positions across devices in under 500ms.',
    techStack: ['React Native', 'TypeScript', 'WebSocket', 'SQLite', 'Redux'],
    githubUrl: '#',
    metrics: ['<500ms sync latency', 'Multi-exchange support', 'Offline-first architecture']
  },
  {
    id: 'expense-analytics',
    title: 'Expense Analytics',
    description: 'ML-powered expense tracking with automatic categorization achieving 94% accuracy. Provides spending pattern analysis, budget forecasting, and anomaly detection for unusual transactions. Reduced manual categorization time by 80% for users.',
    techStack: ['Flutter', 'Dart', 'TensorFlow Lite', 'Firebase', 'Plaid API'],
    githubUrl: '#',
    metrics: ['94% categorization accuracy', '80% time savings', 'Predictive budgeting']
  },
  {
    id: 'fitness-dashboard',
    title: 'Fitness Metrics Dashboard',
    description: 'Health data visualization platform aggregating metrics from multiple wearables. Features include trend analysis, goal tracking, and personalized insights using statistical modeling. Integrates with Apple Health, Google Fit, and Garmin APIs.',
    techStack: ['Swift', 'SwiftUI', 'HealthKit', 'Core Data', 'Charts'],
    githubUrl: '#',
    metrics: ['Multi-device sync', 'Real-time heart rate', 'Statistical trend analysis']
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
