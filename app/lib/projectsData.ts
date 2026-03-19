export interface Project {
  slug: string
  title: string
  description: string
  detailedDescription: string
  approach: string
  achievements: string[]
  challenges: string[]
  tech: string[]
  link: string
  demoLink?: string
}

export const projectsData: Project[] = [
  {
    slug: 'email-insights-agent',
    title: 'Email Insights Agent',
    description: 'AI-powered email management system with two modes: batch analysis (categorization, action items, VIP detection) and real-time conversational interface. Text WhatsApp or SMS to manage your inbox via Claude with tool-use reasoning. Features Gmail OAuth with send/reply capabilities, Twilio integration, conversation history, and daily cron daemon.',
    detailedDescription: `An intelligent email analysis system leveraging Claude AI to process Gmail inbox data and generate actionable insights. This project demonstrates enterprise-grade integration of multiple APIs (Gmail, Anthropic) with local data persistence and real-time conversational capabilities.

The system operates in multiple modes: initial analysis of the last 100 emails to establish a baseline, manual force-run for recent emails, daily automated cron scheduling, and on-demand report retrieval. Users can interact with their inbox via WhatsApp or SMS, receiving insights and managing emails through natural conversation with Claude.`,
    approach: `Built with a CLI interface using Click framework and Python. The architecture follows a modular design with separate components for Gmail OAuth 2.0 authentication, Claude API integration, schedule-based task automation, and JSON-based local storage. Email processing uses a batch strategy (50-email chunks) with Claude's adaptive thinking for complex inference tasks.

Key components include:
- Gmail OAuth 2.0 with automatic token refresh
- Claude API integration with tool-use reasoning
- Twilio for WhatsApp/SMS integration
- APScheduler for automated cron execution
- Rich terminal formatting for data display`,
    achievements: [
      'Automated inbox analysis with categorization (IMPORTANT, ACTION_REQUIRED, NEWSLETTER, SPAM)',
      'VIP sender identification and priority ranking system',
      'Inbox health scoring on a 0-10 scale with trend analysis',
      'Real-time conversational interface via WhatsApp/SMS',
      'Daily automated report generation with configurable scheduling',
      'Sentiment analysis and action item extraction from email content',
    ],
    challenges: [
      'Managing Gmail API rate limits through intelligent batching strategies',
      'Implementing reliable OAuth 2.0 token refresh without user intervention',
      'Structuring Claude prompts to ensure reliable JSON parsing across diverse email formats',
      'Maintaining conversation history while optimizing API costs for real-time interactions',
      'Balancing automated analysis with user-driven conversational queries',
    ],
    tech: ['Python', 'Claude API', 'Gmail API', 'Flask', 'Twilio', 'Rich CLI', 'APScheduler'],
    link: 'https://github.com/Trissaan/email-insights-agent',
  },
  {
    slug: 'ai-job-application-automation',
    title: 'AI Job Application Automation Agent',
    description: 'End-to-end AI-powered platform that scrapes job listings, generates tailored resumes and cover letters using LLM APIs.',
    detailedDescription: `A comprehensive job application automation platform designed to streamline the job search process. The system intelligently scrapes job listings from multiple job boards, analyzes position requirements, and automatically generates customized resumes and cover letters using LLM APIs.

This full-stack application features JWT-based authentication with AWS Cognito, MongoDB data persistence for storing jobs and applications, background job scheduling for continuous monitoring, and a modern dashboard for tracking application progress and statistics.`,
    approach: `Developed using a modern tech stack with FastAPI backend (Python) and Next.js frontend (TypeScript). The system architecture separates concerns across authentication (AWS Cognito), data persistence (MongoDB), and task automation (APScheduler).

Job scraping leverages Playwright for web automation across supported job platforms. Resume and cover letter customization uses OpenAI APIs to tailor documents based on specific job requirements. Background job scheduling enables continuous monitoring of new listings matching user criteria.`,
    achievements: [
      'Automated scraping and processing of job listings from Seek (Australian jobs board)',
      'Dynamic resume and cover letter generation using GPT customization',
      'JWT-based authentication system with AWS Cognito integration',
      'MongoDB database with complete application history and statistics',
      'Real-time dashboard for tracking application progress and metrics',
      'Scheduled background job processing for continuous job monitoring',
      'Support for user preference configuration (location, salary, skills)',
    ],
    challenges: [
      'Handling dynamic website structures and frequent changes to job board layouts',
      'Maintaining consistent quality in AI-generated customized documents',
      'Optimizing API costs while maintaining personalization across applications',
      'Managing authentication across multiple job platforms with different OAuth implementations',
      'Building reliable scheduling for background jobs with proper error handling',
      'Scaling web scraping without being rate-limited by job boards',
    ],
    tech: ['Python', 'FastAPI', 'Playwright', 'OpenAI API', 'Next.js', 'TypeScript', 'MongoDB', 'AWS Cognito'],
    link: 'https://github.com/trissaan/Job_Apply_Agent',
  },
  {
    slug: 'enterprise-operations-data-platform',
    title: 'Enterprise Operations Data Platform',
    description: 'Relational data platform with normalised schema for enterprise operations, featuring ETL pipelines and analytics-ready datasets.',
    detailedDescription: `A production-ready PostgreSQL-based data platform that processes operational business data into analytics-ready datasets. This project exemplifies enterprise-grade data engineering practices through a modular Python ETL implementation following industry best practices.

The platform manages 10 operational tables capturing comprehensive transactional business activity including customers, orders, inventory, payments, shipments, and returns. It demonstrates a complete data warehouse architecture suitable for business intelligence and reporting, with data quality validation at each stage.`,
    approach: `Implemented using a layered architecture with three distinct stages: Extract (from source systems), Transform (using Python/Pandas), and Load (into analytics tables). The platform uses DAG-based orchestration mimicking production frameworks like Apache Airflow.

The technical implementation includes:
- Modular Python ETL components for each data domain
- PostgreSQL for both transactional and analytical storage
- Data validation checks including NULL detection and completeness validation
- Pandas-based transformation logic for complex business rules
- Analytics-ready output tables optimized for BI tools (Power BI/Tableau)`,
    achievements: [
      'Designed and implemented 10 normalized operational tables handling thousands of transactional records',
      'Created modular ETL pipeline processing 9,000+ order items and 1,000+ customer records',
      '3 analytics tables generated ready for business intelligence and reporting',
      'Implemented data quality validation checks preventing bad data from downstream use',
      'Demonstrated complete data warehouse architecture from source to analytics',
      'Optimized schema design for analytical query performance',
    ],
    challenges: [
      'Designing normalized schemas that balance transactional integrity with analytical performance',
      'Implementing robust data validation to detect and handle missing or corrupt data',
      'Managing incremental data loads without reprocessing historical data',
      'Optimizing SQL queries for complex analytical requirements',
      'Handling diverse data types and business rules across multiple domains',
      'Documentation and maintainability of complex ETL logic',
    ],
    tech: ['PostgreSQL', 'Python', 'Pandas', 'SQL', 'DAG Orchestration', 'DBeaver'],
    link: 'https://github.com/trissaan/enterprise-operations-data-platform',
  },
  {
    slug: 'speech-emotion-recognition',
    title: 'Speech Emotion Recognition using CNN',
    description: 'Machine learning model that detects human emotions and affective states from speech using convolutional neural networks.',
    detailedDescription: `A deep learning project focused on detecting human emotions and affective states from speech patterns. The system leverages the principle that tone and pitch of voice frequently reflect underlying emotion. This research demonstrates practical applications across multiple industries including call center analytics, driver safety monitoring, and customer satisfaction assessment.

The project combines four publicly available emotional speech datasets (CREMA-D, RAVDESS, SAVEE, TESS) to train a CNN-based classifier capable of recognizing diverse emotional expressions.`,
    approach: `Developed using TensorFlow for building and training the CNN architecture. The implementation includes two Jupyter notebooks: one for comprehensive model training and hyperparameter tuning, another for testing on custom audio inputs.

The pipeline involves:
- Audio feature extraction (spectrograms, MFCCs)
- CNN architecture optimized for audio signal processing
- Multi-dataset training for robust emotion classification
- Python audio recording module for real-world testing
- Integration with custom speech samples`,
    achievements: [
      'Trained CNN model on combined dataset of 4 major emotional speech databases',
      'Successfully classifies multiple emotion types from speech patterns',
      'Implemented custom audio recording module for real-time testing',
      'Demonstrated practical applications in call center and vehicle safety scenarios',
      'Created reproducible training and testing notebooks',
    ],
    challenges: [
      'Managing class imbalance across different datasets with varying emotion distributions',
      'Handling diverse audio qualities and recording conditions across datasets',
      'Feature extraction optimization for CNN architecture on audio data',
      'Model generalization across different speaker accents and languages',
      'Processing computational requirements for large audio datasets',
      'Validating emotion detection accuracy across diverse speaker populations',
    ],
    tech: ['Python', 'TensorFlow', 'CNN', 'Audio Processing', 'Jupyter Notebooks'],
    link: 'https://github.com/trissaan/Speech-Emotion-Recognition-Using-CNN',
  },
  {
    slug: 'autonomous-warehouse-robot',
    title: 'Autonomous Warehouse Robot',
    description: 'Prototype of an automated robot using computer vision for warehouse operations with minimal supervision.',
    detailedDescription: `A robotics project demonstrating an autonomous warehouse robot prototype designed to reduce manual labor and improve operational efficiency in packaging and logistics. The system uses computer vision for object detection and obstacle avoidance, operating continuously without human intervention or fatigue.

This prototype addresses key warehouse challenges by automating the packaging workflow, reducing labor costs, minimizing delivery errors, and improving throughput capabilities. The ball-follower robot design enables flexible path-following and object tracking.`,
    approach: `Built on a Raspberry Pi platform running Raspbian OS with Python 2 programming. The system integrates multiple hardware components:
- Computer vision processing using OpenCV 3.10 for blob detection
- Image processing filters (dilation/erosion) for robust object detection
- Three ultrasonic sensors for real-time obstacle avoidance
- Motor drivers (LM298 or L293D) controlling movement
- PiCamera module for visual input

The software stack uses Python with OpenCV for vision processing and GPIO control via Raspberry Pi.`,
    achievements: [
      'Implemented ball-follower robot with computer vision-based object tracking',
      'Integrated ultrasonic sensor array for autonomous obstacle detection and avoidance',
      'Developed real-time image processing pipeline using OpenCV',
      'Created autonomous operation system requiring minimal human supervision',
      'Designed flexible architecture for various warehouse tasks',
      'Demonstrated practical robotics application in logistics',
    ],
    challenges: [
      'Real-time performance constraints on Raspberry Pi hardware',
      'Reliable blob detection in varying warehouse lighting conditions',
      'Coordinating multiple sensors (vision + ultrasonic) for decision-making',
      'Motor control precision for smooth autonomous movement',
      'Power management for extended autonomous operations',
      'Handling edge cases and unexpected obstacles in dynamic environments',
    ],
    tech: ['Python', 'Computer Vision', 'OpenCV', 'Robotics', 'Raspberry Pi', 'Ultrasonic Sensors'],
    link: 'https://github.com/trissaan/Autonomous-Warehouse-Robot-using-Computer-Vision',
  },
  {
    slug: 'heart-disease-prediction',
    title: 'Heart Disease Prediction Model',
    description: 'Machine learning classification model for predicting heart disease risk using health indicators.',
    detailedDescription: `A machine learning application addressing cardiovascular disease as a leading global cause of death. The project implements a two-phase approach: comprehensive data analysis followed by a user-friendly web application for risk assessment.

The system processes 918 patient samples with 11 clinical attributes to predict disease occurrence at early stages. It provides accessible risk categorization for multiple users including doctors, lab technicians, and the general public.`,
    approach: `Developed using a complete ML pipeline with scikit-learn for model development. The architecture includes:
- Data preprocessing with outlier handling and cleaning
- Exploratory Data Analysis (EDA) for pattern identification
- Random Forest Classifier for robust disease prediction
- Hyperparameter optimization improving accuracy from 85% to 87%
- Flask-based web application for easy access
- Pickled model integration for production deployment

The web interface accepts patient clinical features and returns risk assessment results with zone-based recommendations.`,
    achievements: [
      'Trained Random Forest model with 87% prediction accuracy on test data',
      'Achieved 2% accuracy improvement through hyperparameter tuning',
      'Created user-friendly web interface for non-technical users',
      'Implemented risk zone categorization system for actionable recommendations',
      'Integrated trained model with production web application',
      'Made predictive healthcare accessible to multiple user types',
      'Demonstrated data-driven approach to preventive medicine',
    ],
    challenges: [
      'Handling sensitive healthcare data with appropriate privacy measures',
      'Preventing overfitting on limited medical dataset (918 samples)',
      'Balancing model accuracy with interpretability for medical professionals',
      'Feature selection from clinical attributes for model performance',
      'Ensuring robust predictions across diverse patient demographics',
      'Providing appropriate caveats about medical prediction accuracy',
    ],
    tech: ['Python', 'Scikit-learn', 'Random Forest', 'Data Analysis', 'Flask', 'HTML/CSS'],
    link: 'https://github.com/trissaan/Heart_Disease_Prediction_Application_using_Random_Forest_Model',
  },
  {
    slug: 'parkinsons-disease-prediction',
    title: "Parkinson's Disease Prediction",
    description: "Applied ML classification models to biomedical gait sensor data for predicting Parkinson's disease progression.",
    detailedDescription: `A machine learning application leveraging biomedical sensor data to predict Parkinson's disease progression. This project applies classification models to gait analysis data, demonstrating the intersection of healthcare diagnostics and machine learning.`,
    approach: `Uses scikit-learn algorithms including PCA (Principal Component Analysis) for dimensionality reduction and SVM (Support Vector Machines) for classification. The pipeline processes gait sensor data to extract meaningful patterns for disease prediction.`,
    achievements: [
      'Developed ML models for early Parkinson\'s disease detection from gait data',
      'Applied PCA for feature dimensionality reduction',
      'Implemented SVM classifier for disease prediction',
    ],
    challenges: [
      'Handling high-dimensional sensor data with PCA dimensionality reduction',
      'Achieving reliable predictions from limited biomedical datasets',
      'Selecting optimal SVM parameters for gait pattern classification',
    ],
    tech: ['Python', 'Scikit-learn', 'PCA', 'SVM'],
    link: 'https://github.com/trissaan/Parkinsons-Disease-prediction',
  },
  {
    slug: 'road-sign-classification',
    title: 'Road Sign Classification',
    description: 'Deep learning model using convolutional neural networks for traffic sign recognition and classification.',
    detailedDescription: `A computer vision project implementing deep learning for traffic sign recognition and classification. This project demonstrates CNN-based image classification for real-world traffic safety applications.

The unique aspect of this project is the custom dataset: traffic sign images were manually collected from real-world environments rather than using existing online datasets. The collected images were then augmented to increase dataset diversity and robustness, followed by training a deep neural network to classify the signs into relevant categories for autonomous driving and traffic monitoring systems.`,
    approach: `Built using TensorFlow for deep neural network development and training. The project pipeline includes:
- Manual image collection from real-world traffic environments
- Data augmentation techniques (rotation, brightness, contrast adjustments) to create a robust training set
- Deep CNN architecture design optimized for traffic sign classification
- Training and validation on the augmented custom dataset
- Model evaluation on real-world traffic sign scenarios

The custom dataset approach ensures the model handles real-world variations in lighting, angles, weather conditions, and sign conditions that generic online datasets may not fully capture.`,
    achievements: [
      'Collected and curated custom dataset of real-world traffic sign images',
      'Implemented data augmentation pipeline to increase training data diversity',
      'Trained deep CNN model for accurate traffic sign classification',
      'Achieved robust performance on real-world traffic sign variations',
      'Implemented image processing pipeline for sign recognition',
      'Created model suitable for real-time autonomous driving applications',
    ],
    challenges: [
      'Collecting diverse traffic sign images across different environments and lighting conditions',
      'Balancing dataset composition to avoid bias toward common sign types',
      'Designing appropriate augmentation strategies without losing sign characteristics',
      'Building CNN architecture that generalizes well to unseen traffic sign conditions',
      'Handling real-world variations (weather, dirt, fading) on actual road signs',
      'Optimizing inference speed for real-time traffic applications',
    ],
    tech: ['Python', 'TensorFlow', 'Deep CNN', 'Image Processing', 'Data Augmentation'],
    link: 'https://github.com/trissaan',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find(project => project.slug === slug)
}

export function getAllProjects(): Project[] {
  return projectsData
}
