import {
  BarChart3,
  Brain,
  Languages,
  HeartPulse,
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
    color: "data-secondary",
    gradient: "from-data-secondary/20 to-data-secondary/5",
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
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
