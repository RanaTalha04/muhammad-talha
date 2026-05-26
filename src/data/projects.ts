import {
  BarChart3,
  Brain,
  Languages,
  HeartPulse,
  Trophy,
  Clipboard,
  type LucideIcon,
} from "lucide-react";

export type ProjectStatus = "completed" | "working";

export interface Project {
  slug: string;
  title: string;
  url?: string;
  platform: string;
  role: string;
  tools: string[];
  description: string;
  longDescription?: string;
  highlights?: string[];
  status: ProjectStatus;
  featured?: boolean;
  icon: LucideIcon;
  color: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    slug: "clinical-risk-classification",
    title: "Clinical Risk Classification System",
    url: "https://github.com/RanaTalha04/Heart_Disease_Prediction",
    platform: "Machine Learning",
    role: "ML Engineer",
    tools: ["Python", "Scikit-learn", "Pandas", "NumPy", "Seaborn"],
    description:
      "Developed a supervised learning pipeline to classify cardiovascular risk using clinical features such as age, cholesterol, and blood pressure.",
    longDescription:
      "Developed a supervised learning pipeline to classify cardiovascular risk using clinical features such as age, cholesterol, and blood pressure. Implemented data preprocessing, feature scaling, and model evaluation using Logistic Regression, Random Forest, and SVM, with ensemble methods showing the strongest overall performance through cross-validation.",
    highlights: [
      "Data preprocessing and feature scaling pipeline",
      "Compared Logistic Regression, Random Forest, and SVM",
      "Ensemble methods delivered strongest cross-validated performance",
    ],
    status: "completed",
    featured: true,
    icon: HeartPulse,
    color: "data-ml",
    gradient: "from-data-ml/20 to-data-ml/5",
  },
    {
    slug: "cricket-performance-analysis",
    title: "Cricketer Performance Analysis",
    url: "https://github.com/RanaTalha04/Cricketer-Performance-Analysis",
    platform: "Machine Learning",
    role: "ML Engineer",
    tools: ["Python", "Scikit-learn", "Pandas", "NumPy", "Seaborn"],
    description:
      "An end-to-end machine learning project that predicts a batsman’s expected runs in the next match using Cricsheet ball-by-ball data.",
    longDescription:
     "An end-to-end machine learning project that predicts a batsman’s expected runs in the next match using Cricsheet ball-by-ball data. Includes a full ETL pipeline, feature engineering, model training, and a Streamlit app for real-time predictions. Built with Python, Pandas, Scikit-Learn, and love for cricket." ,

    highlights: [
      "Data preprocessing and feature scaling pipeline",
      "Compared Logistic Regression, Random Forest, and SVM",
    ],
    status: "completed",
    featured: false,
    icon: Trophy,
    color: "data-ml",
    gradient: "from-data-ml/20 to-data-ml/5",
  },
  {
    slug: "insurance-premium-predictor",
    title: "Insurance Premium Category Predictor",
    url: "https://github.com/RanaTalha04/Insurance_premium_category_predictor",
    platform: "FastAPI & ML",
    role: "ML Engineer",
    tools: ["Python", "Scikit-learn", "FastAPI", "Docker", "Pydantic"],
    description:
      "End-to-end ML inference service deployed with FastAPI and Docker.",
    longDescription:
      "Designed an end-to-end ML inference pipeline to predict insurance premium categories. Deployed the trained Random Forest model using FastAPI, containerized the service with Docker, and published the image to Docker Hub.",
    highlights: [
      "Random Forest model served via FastAPI",
      "Containerized with Docker, published to Docker Hub",
      "Validated request/response schemas with Pydantic",
    ],
    status: "completed",
    featured: true,
    icon: Brain,
    color: "data-secondary",
    gradient: "from-data-secondary/20 to-data-secondary/5",
  },
  {
    slug: "sentiment-analysis-pakistani-dramas",
    title: "Sentiment Analysis on Pakistani Drama Subtitles",
    url: "https://github.com/RanaTalha04/Bilingual-Sentiment-Analysis-Urdu-English",
    platform: "NLP",
    role: "Data Scientist",
    tools: [
      "Python",
      "NLP",
      "Transformers",
      "DistilBERT",
      "M2M100",
      "Pandas",
      "NumPy",
    ],
    description:
      "Multilingual sentiment analysis on 160K+ Pakistani drama subtitles.",
    longDescription:
      "Built multilingual sentiment analysis models on 160K+ Pakistani drama subtitles. Labeled 73K+ English and Urdu sentences using DistilBERT and M2M100, achieving 81% accuracy for English and 80% for Urdu.",
    highlights: [
      "160K+ subtitles processed",
      "81% accuracy (English), 80% (Urdu)",
      "Pipeline combining DistilBERT + M2M100",
    ],
    status: "completed",
    featured: true,
    icon: Brain,
    color: "data-tertiary",
    gradient: "from-data-tertiary/20 to-data-tertiary/5",
    
  },
  {
    slug: "urdu-english-translation",
    title: "Urdu-to-English Machine Translation",
    url: "https://github.com/RanaTalha04/Urdu-English-NLP-Translation",
    platform: "NLP",
    role: "NLP Engineer",
    tools: ["M2M100", "Python", "Pytorch", "Google Colab"],
    description:
      "Translation pipeline using Facebook's M2M100 on 160K+ subtitles.",
    longDescription:
      "Implemented a translation pipeline using Facebook's M2M100 on 160K+ subtitles, achieving a BLEU score of 57 for high-quality translations.",
    highlights: [
      "BLEU score of 57",
      "Fine-tuned M2M100 on subtitle corpus",
      "Trained on Google Colab GPU runtime",
    ],
    status: "completed",
    featured: true,
    icon: Languages,
    color: "data-tertiary",
    gradient: "from-data-tertiary/20 to-data-tertiary/5",
  },
  {
    slug: "task-management-application",
    title: "Task Management Application",
    url: "https://github.com/RanaTalha04/Task-Management-Application",
    platform: "Backend",
    role: "Backend Engineer",
    tools: ["FastAPI", "Python", "JWT tokens", "PostgreSQL"],
    description:
      "A backend-only task management application built with FastAPI and Python.",
    longDescription:
      "This application provides a RESTful API for managing tasks. Users can create, read, update, and delete tasks. It includes features like user authentication.",
    highlights: [
      "User registration and authentication",
      "User login using tokens",
      "Create, read, update, and delete tasks",
      "API documentation with Swagger UI",
    ],
    status: "completed",
    featured: false,
    icon: Clipboard,
    color: "data-secondary",
    gradient: "from-data-secondary/20 to-data-secondary/5",
  },
  {
    slug: "next-gen-ai-desktop-assistant",
    title: "Next-Gen AI Desktop Assistant",
    url: "https://github.com/RanaTalha04/GemServe",
    platform: "AI & Desktop",
    role: "UI & Task Management",
    tools: [
      "Python",
      "PySide6",
      "Vosk",
      "Pyttsx3",
      "NLTK",
      "psutil",
      "PyAudio",
      "schedule",
    ],
    description:
      "A fully offline, privacy-first desktop assistant that accepts voice and text commands to perform file management, application control, task scheduling, and web search.",
    longDescription:
      "Designed and built a modular AI desktop assistant that replaces manual keyboard and mouse input with natural language commands. The system uses Vosk for offline speech recognition, NLTK for rule-based command parsing, and PySide6 for a responsive GUI with light/dark theme support. Core features include file operations, wake-word activation, a custom file tagging system, time-based reminders, application control via psutil, and text-to-speech feedback through Pyttsx3. All processing runs locally with no data sent to external servers.",
    highlights: [
      "Fully offline — no audio or user data leaves the machine",
      "Wake-word activation with low-CPU background keyword spotting",
      "File tagging system for retrieval by keyword rather than filename",
      "Dual input mode: voice via Vosk and text via PySide6 GUI",
      "Modular three-layer architecture: UI, Core Processing, Output",
    ],
    status: "working",
    featured: true,
    icon: BarChart3,
    color: "data-ml",
    gradient: "from-data-ml/20 to-data-ml/5",
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
