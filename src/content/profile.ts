// Single source of truth for all portfolio copy. Edit text here, not in components.
export const profile = {
  name: "Kirti Vishwakarma",
  role: "AI Engineer · Generative AI Engineer",
  tagline:
    "I build retrieval-augmented and machine-learning systems that turn ideas into working, measurable applications.",
  location: "Varanasi, Uttar Pradesh, India",
  availability: "Open to entry-level AI / GenAI Engineer roles in India · Open to relocation",
  email: "kirtivishwakarma426@gmail.com",
  phone: "9236644899",
  github: "https://github.com/kirtivish974",
  linkedin: "https://www.linkedin.com/in/kirti-vishwakarma1/",
  about: [
    "I'm an aspiring AI Engineer and Generative AI Engineer with a B.Sc. (Hons.) in Mathematics, Statistics & Physics, and hands-on experience building machine-learning and LLM-powered applications.",
    "My focus is Python, machine learning, Retrieval-Augmented Generation (RAG), LLMs, embeddings, vector databases and model deployment. I enjoy understanding how AI systems really work, and turning concepts into practical tools.",
  ],
  stats: [
    { value: "95%", label: "fraud recall on a 0.1% imbalanced dataset" },
    { value: "Top-20 → 5", label: "retrieve-then-rerank RAG pipeline" },
    { value: "30+", label: "public ML & data repositories" },
  ],
} as const;

export type Project = {
  title: string;
  category: "GenAI" | "Machine Learning" | "Data Analysis";
  summary: string;
  highlights: string[];
  stack: string[];
  github: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Employee RAG Assistant",
    category: "GenAI",
    summary:
      "A deployed document question-answering app that answers employee-policy questions with context grounded in the company handbook.",
    highlights: [
      "Semantic embeddings with all-mpnet-base-v2 and Pinecone vector search",
      "Retrieves the top 20 chunks, then reranks to the best 5 for the LLM",
      "LangChain workflow with a Streamlit interface, live on the web",
    ],
    stack: ["LangChain", "Pinecone", "Sentence Transformers", "Streamlit", "Python"],
    github: "https://github.com/kirtivish974/employee-rag-assistant",
    live: "https://employee-rag-assistant.streamlit.app/",
    featured: true,
  },
  {
    title: "Fraud Detection — End-to-End ML Pipeline",
    category: "Machine Learning",
    summary:
      "An end-to-end system that flags fraudulent payment transactions in a highly imbalanced dataset (~0.1% fraud).",
    highlights: [
      "SMOTE resampling and engineered balance-inconsistency features",
      "Leak-free train/validation split; ~95% recall and 57% precision on fraud",
      "Gradient-boosted XGBoost model, persisted with Joblib",
    ],
    stack: ["XGBoost", "Scikit-learn", "SMOTE", "Pandas", "Python"],
    github: "https://github.com/kirtivish974/Fraud_Detection_End_to_End_Project",
    featured: true,
  },
  {
    title: "Cryptocurrency Volatility Prediction",
    category: "Machine Learning",
    summary:
      "Forecasts crypto market volatility from historical market data and engineered features.",
    highlights: ["Time-based feature engineering", "Regression modelling and evaluation"],
    stack: ["Python", "Scikit-learn", "Pandas"],
    github: "https://github.com/kirtivish974/Cryptocurrency-Volatility-Prediction-Project",
  },
  {
    title: "Restaurant Rating Prediction",
    category: "Machine Learning",
    summary:
      "Predicts a restaurant's aggregate rating from price range, votes, cuisine, location and services.",
    highlights: ["End-to-end regression workflow", "Feature encoding and model comparison"],
    stack: ["Python", "Scikit-learn", "Pandas"],
    github: "https://github.com/kirtivish974/Restaurant_Rating_Prediction",
  },
  {
    title: "Brain MRI Segmentation",
    category: "Machine Learning",
    summary:
      "Uses unsupervised K-Means clustering to segment a brain MRI scan into meaningful regions by pixel intensity.",
    highlights: ["Unsupervised image segmentation", "Cluster visualisation"],
    stack: ["Python", "K-Means", "NumPy", "Matplotlib"],
    github: "https://github.com/kirtivish974/Brain_Scanning",
  },
  {
    title: "Coca-Cola Sales Analysis",
    category: "Data Analysis",
    summary:
      "Exploratory analysis of multi-brand beverage sales: revenue, brand profitability, regional distribution and pricing.",
    highlights: ["EDA and statistical analysis", "Business-focused visual insights"],
    stack: ["Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/kirtivish974/Coca_Cola_sales",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Generative AI & Retrieval",
    items: ["RAG", "LLMs", "LangChain", "Pinecone", "Vector Embeddings", "Sentence Transformers", "Semantic Search", "Reranking"],
  },
  {
    group: "Machine Learning",
    items: ["Classification", "Regression", "XGBoost", "Random Forest", "Feature Engineering", "SMOTE", "Model Evaluation", "Data Leakage Prevention"],
  },
  {
    group: "Programming & Data",
    items: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Statistics", "EDA"],
  },
  {
    group: "Tools & Deployment",
    items: ["Streamlit", "Git & GitHub", "Jupyter", "Google Colab", "VS Code", "Joblib"],
  },
];

export const experience = [
  {
    role: "Machine Learning Engineer Intern",
    company: "Syntecxhub",
    period: "Mar 2026 – Sep 2026",
    mode: "Remote",
    points: [
      "Cleaned and prepared datasets — missing values, duplicates — with Pandas and NumPy.",
      "Ran exploratory data analysis and built visualisations with Matplotlib and Seaborn.",
      "Delivered an end-to-end fraud-detection pipeline reaching ~95% recall on the fraud class.",
      "Wrote analysis reports and documentation to communicate findings.",
    ],
  },
];

export const education = {
  degree: "B.Sc. (Hons.) — Mathematics, Statistics & Physics",
  school: "Harish Chandra Post Graduate College, Varanasi",
  year: "2025",
};

export const certifications = [
  { name: "Data Science with Generative AI Professional Program", issuer: "PW Skills" },
  { name: "Explore Emerging Tech", issuer: "IBM SkillsBuild" },
];

export const languages = ["Hindi (Native)", "English (Professional working proficiency)"];
