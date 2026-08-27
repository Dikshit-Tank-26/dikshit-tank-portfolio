export const personalInfo = {
  name: "Dikshit Tank",
  role: "Full-Stack & AI/ML Developer",
  tagline: "Building practical & production-ready AI, ML & Full-Stack solutions",
  phone: "+91 9723922927",
  email: "tankdikshit@gmail.com",
  location: "Surat / Bardoli, Gujarat, India",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  portfolio: "https://dikshit-tank.vercel.app",
  status: "Open to AI/ML & Full-Stack Opportunities",
  description:
    "Full-Stack and AI/ML Developer with hands-on experience in Python, Machine Learning, C#, JavaScript, and modern application development. Experienced in building practical projects including a Sleep Quality Predictor using Machine Learning, a Disease RAG Assistant powered by Ollama, ChromaDB, and FastAPI, an ASP.NET Student Management System with XML-based data storage, and a JavaScript-based fashion application.",
  stats: [
    { label: "B.Tech CGPA", value: "8.59 / 10" },
    { label: "Education", value: "B.Tech AI & ML" },
    { label: "Core Focus", value: "RAG & ML" },
    { label: "Certification", value: "AWS AI/ML" },
  ],
  techStackTicker: [
    "Python",
    "Machine Learning",
    "Scikit-Learn",
    "FastAPI",
    "Streamlit",
    "RAG",
    "ChromaDB",
    "Ollama",
    "Pandas",
    "NumPy",
    "TensorFlow",
    "JavaScript",
    "C#",
    "MySQL",
    "SQL Server",
    "Git & GitHub",
  ],
};

export const skillsCategories = {
  languages: [
    { name: "Python", level: 95, icon: "🐍", highlight: "Primary Language for AI/ML & APIs" },
    { name: "JavaScript", level: 85, icon: "⚡", highlight: "Interactive Frontend & Web Apps" },
    { name: "HTML & CSS", level: 90, icon: "🌐", highlight: "Semantic, Responsive UI Styling" },
    { name: "SQL", level: 85, icon: "🗄️", highlight: "Relational Queries & Data Schema" },
    { name: "C#", level: 80, icon: "🔷", highlight: "Object-Oriented Enterprise Systems" },
  ],
  frameworksLibraries: [
    { name: "Scikit-Learn", level: 92, icon: "🤖", highlight: "Model Training, Evaluation & Tuning" },
    { name: "FastAPI", level: 90, icon: "⚡", highlight: "Async REST APIs & Swagger UI" },
    { name: "Streamlit", level: 92, icon: "📊", highlight: "Interactive ML Web Dashboards" },
    { name: "Pandas & NumPy", level: 95, icon: "📈", highlight: "Data Manipulation, Wrangling & Arrays" },
    { name: "Matplotlib & Seaborn", level: 88, icon: "📉", highlight: "EDA, Visualizations & Metrics" },
    { name: "TensorFlow", level: 80, icon: "🧠", highlight: "Deep Learning Foundations" },
    { name: "ChromaDB (Vector Store)", level: 88, icon: "📚", highlight: "RAG Embeddings & Vector Search" },
    { name: "Ollama (Local LLMs)", level: 88, icon: "🦙", highlight: "Privacy-first Contextual Inference" },
    { name: "ASP.NET Web Forms", level: 80, icon: "🏢", highlight: "Enterprise Workflow Architectures" },
  ],
  databases: [
    { name: "MySQL", level: 85, icon: "🐬", highlight: "Relational DB & Query Optimization" },
    { name: "SQL Server", level: 82, icon: "💾", highlight: "Enterprise Relational Storage" },
    { name: "ChromaDB", level: 88, icon: "🔍", highlight: "Semantic Vector Collections" },
    { name: "XML Data Storage", level: 85, icon: "📄", highlight: "Hierarchical XML Parsing & CRUD" },
  ],
  toolsPlatforms: [
    { name: "Git & GitHub", level: 92, icon: "🐙", highlight: "Version Control & Collaboration" },
    { name: "VS Code", level: 95, icon: "💻", highlight: "Primary Development IDE" },
    { name: "PyCharm", level: 90, icon: "🐍", highlight: "Python Engineering & Debugging" },
    { name: "Excel & PowerPoint", level: 88, icon: "📊", highlight: "Data Analysis & Technical Reporting" },
  ],
  softSkills: [
    "Problem Solving",
    "Analytical Thinking",
    "Team Collaboration",
    "Technical Communication",
    "Continuous Learning",
  ],
};

export const projectsData = [
  {
    id: "disease-rag",
    title: "Disease-RAG-Assistant",
    category: "AI / RAG",
    tagline: "Production-grade Retrieval-Augmented Generation (RAG) System for Medical Information",
    summary:
      "A production-grade Retrieval-Augmented Generation (RAG) system for medical disease information, powered by Ollama (local LLMs) + ChromaDB (vector store) + FastAPI. Designed a modular document ingestion pipeline and a REST API with query, streaming, and ingestion endpoints, documented via auto-generated Swagger UI.",
    longDescription:
      "The Disease-RAG-Assistant is an end-to-end clinical knowledge retrieval and question-answering architecture. It features a robust document ingestion pipeline that splits, embeds, and indexes medical literature into a ChromaDB vector store. Queries trigger fast semantic similarity search to pull relevant context into local Ollama LLMs, served through an asynchronous FastAPI REST backend featuring streaming token responses and comprehensive Swagger documentation.",
    tags: ["Python", "Ollama", "ChromaDB", "FastAPI", "RAG", "Swagger UI"],
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    accentColor: "#06b6d4",
    features: [
      "Production-grade RAG pipeline using ChromaDB vector database",
      "Local LLM inference via Ollama ensuring complete medical data privacy",
      "Modular document ingestion, chunking, and dense embedding pipeline",
      "FastAPI REST backend with query, streaming, and ingestion endpoints",
      "Interactive API testing with auto-generated Swagger UI & OpenAPI schema",
    ],
    architecture: [
      "1. Document Ingestion & Recursive Chunking",
      "2. Dense Vector Embeddings Generation",
      "3. ChromaDB Vector Store Indexing & Semantic Search",
      "4. Context-Grounded Prompt Assembly",
      "5. Local Ollama LLM Inference with FastAPI Streaming",
    ],
    github: "https://github.com",
    demo: "#",
    featured: true,
  },
  {
    id: "sleep-quality",
    title: "Sleep Quality Prediction System",
    category: "Machine Learning",
    tagline: "ML-Powered Health Analytics & Prediction Dashboard with Streamlit",
    summary:
      "Developed a Sleep Quality Prediction System using Python, Streamlit, and Random Forest Classifier to predict sleep quality based on lifestyle factors such as sleep duration, exercise, stress, caffeine intake, and screen time. Designed an interactive web dashboard with real-time predictions and feature importance visualization using Pandas, NumPy, Scikit-learn, and Matplotlib.",
    longDescription:
      "An end-to-end Machine Learning system that models multi-factor lifestyle data to forecast sleep quality scores and identify key risk drivers. Built with Scikit-learn, Pandas, and NumPy, the project incorporates extensive exploratory data analysis, correlation metrics, and model evaluation (Random Forest Classifier). The trained pipeline is deployed via an interactive Streamlit web dashboard providing real-time predictions, dynamic risk indicators, and feature importance visualizations.",
    tags: ["Python", "Machine Learning", "Streamlit", "Random Forest", "Scikit-Learn", "Pandas", "Matplotlib"],
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    accentColor: "#8b5cf6",
    features: [
      "Random Forest Classifier trained on multidimensional lifestyle parameters",
      "Evaluates sleep duration, exercise habits, stress levels, caffeine, and screen time",
      "Interactive Streamlit web dashboard for instant real-time predictions",
      "Feature importance visualizations using Matplotlib & Seaborn",
      "Data preprocessing, outlier handling, and pipeline serialization with Pandas & NumPy",
    ],
    architecture: [
      "1. Data Collection & Preprocessing (Pandas & NumPy)",
      "2. Feature Engineering & Correlation Analysis",
      "3. Random Forest Model Training & Validation (Scikit-Learn)",
      "4. Interactive Web UI with Real-time Scoring (Streamlit)",
      "5. Feature Importance & Metric Visualizations (Matplotlib)",
    ],
    github: "https://github.com",
    demo: "#",
    featured: true,
  },
  {
    id: "student-mgmt",
    title: "Student Management System",
    category: "Full Stack & Backend",
    tagline: "Academic Records & Administration System with XML Data Persistence",
    summary:
      "An ASP.NET Student Management System with XML-based data storage and full CRUD lifecycle management for student registrations, course tracking, grade evaluation, and record keeping.",
    longDescription:
      "Engineered in C# and ASP.NET Web Forms to handle educational workflows. The application provides full CRUD capabilities for student records, enrollment lists, and course management using structured XML files for data persistence and parsing without relational database overhead.",
    tags: ["C#", "ASP.NET Web Forms", "XML Storage", "CRUD", "SQL Server"],
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    accentColor: "#10b981",
    features: [
      "Full CRUD operations for student admission, profiles, and courses",
      "Hierarchical XML-based data storage and query manipulation",
      "Structured form validation and server-side exception handling",
      "Clean UI with ASP.NET controls and responsive styling",
    ],
    architecture: [
      "1. ASP.NET Web Forms UI Presentation Layer",
      "2. C# Business Logic & Validation Engine",
      "3. XML Document Data Access Layer (DAL)",
    ],
    github: "https://github.com",
    demo: "#",
    featured: true,
  },
  {
    id: "voila-fashion",
    title: "Voila-Fashion",
    category: "Web Development",
    tagline: "Interactive & Responsive Fashion Storefront Application",
    summary:
      "A JavaScript-based fashion web application featuring responsive design, dynamic catalogue filtering, modern interactive UI components, and intuitive shopping cart functionality.",
    longDescription:
      "A sleek front-end web application built using JavaScript, HTML, and CSS. It delivers an engaging fashion shopping experience with dynamic product filtering by category and style, responsive layout adaptability across all device viewports, and smooth client-side cart interactions.",
    tags: ["JavaScript", "HTML", "CSS", "Web Development", "UI/UX"],
    gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
    accentColor: "#ec4899",
    features: [
      "Interactive fashion catalog with real-time category filtering",
      "Client-side shopping cart management with instant total calculations",
      "Mobile-first responsive styling with modern CSS Flexbox and Grid",
      "Lightweight, performant vanilla JavaScript architecture",
    ],
    architecture: [
      "1. Responsive HTML5 & CSS3 Layout Engine",
      "2. JavaScript Event-Driven State & Filter Controller",
      "3. Interactive DOM Manipulation & Cart Mechanics",
    ],
    github: "https://github.com",
    demo: "#",
    featured: true,
  },
];

export const educationData = [
  {
    degree: "B.Tech in Artificial Intelligence and Machine Learning",
    status: "In Progress",
    institution: "Uka Tarsadia University",
    location: "Bardoli, Gujarat",
    score: "CGPA : 8.59 / 10",
    period: "2023 – 2027",
    details: [
      "Specialized in Artificial Intelligence, Machine Learning algorithms, Data Structures, and Deep Learning.",
      "Maintained strong academic excellence with a current CGPA of 8.59/10.",
      "Built production-ready projects in RAG, Machine Learning, and Full-Stack development.",
    ],
  },
  {
    degree: "Higher Secondary (12th)",
    status: "Completed",
    institution: "SHRI K. C. KOTHARI SEC. & HIGHER SECONDARY SCHOOL",
    location: "Surat, Gujarat",
    period: "2021 – 2023",
    details: [
      "Completed Higher Secondary Certificate with focus on Science, Mathematics, and Computer Science foundation.",
    ],
  },
  {
    degree: "Secondary (10th)",
    status: "Completed",
    institution: "Vashishtha Vidhyalay",
    location: "Surat, Gujarat",
    period: "2020 – 2021",
    details: [
      "Completed Secondary School Certificate with distinction in Mathematics and Science.",
    ],
  },
];

export const coursesCertifications = [
  {
    title: "Fundamentals of Machine Learning and Artificial Intelligence",
    issuer: "Amazon Web Services (AWS Training & Certification)",
    director: "Michelle Vaz, Director, AWS Training & Certification",
    completedDate: "June 25, 2026",
    badge: "☁️",
    skills: "Machine Learning, Artificial Intelligence, AWS Cloud AI Concepts, Model Lifecycle",
    verified: true,
    certificateType: "AWS Completion Certificate",
  },
];
