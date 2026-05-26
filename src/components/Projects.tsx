import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  BarChart3,
  Brain,
  Languages,
  GraduationCap,
  HeartPulse,
} from "lucide-react";


const Projects = () => {
  const projects = [
    {
      title: "Clinical Risk Classification System",
      url: "https://github.com/RanaTalha04/Heart_Disease_Prediction",
      platform: "Machine Learning",
      role: "ML Engineer",
      tools: ["Python", "Scikit-learn", "Pandas", "NumPy", "Seaborn"],
      description:
        "Developed a supervised learning pipeline to classify cardiovascular risk using clinical features such as age, cholesterol, and blood pressure. Implemented data preprocessing, feature scaling, and model evaluation using Logistic Regression, Random Forest, and SVM, with ensemble methods showing the strongest overall performance through cross-validation.",
      icon: HeartPulse,
      color: "data-ml",
      gradient: "from-data-ml/20 to-data-ml/5",
    },
    {
      title: "Cricketer Performance Prediction",
      platform: "Machine Learning",
      role: "ML Engineer",
      tools: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      description:
        "Built an end-to-end ML pipeline using ball-by-ball cricket data to predict player performance. Performed data cleaning and feature engineering, trained regression models (Decision Tree, Random Forest, Gradient Boosting), achieving best RMSE of 1.74, and explored a classification task for next-ball wicket prediction.",
      icon: BarChart3,
      color: "data-primary",
      gradient: "from-data-primary/20 to-data-primary/5",
    },
    {
      title: "Insurance Premium Category Predictor",
      url: "https://github.com/RanaTalha04/Insurance_premium_category_predictor",
      platform: "FastAPI & ML",
      role: "ML Engineer",
      tools: ["Python", "Scikit-learn", "FastAPI", "Docker", "Pydantic"],
      description:
        "Designed an end-to-end ML inference pipeline to predict insurance premium categories. Deployed the trained Random Forest model using FastAPI, containerized the service with Docker, and published the image to Docker Hub.",
      icon: Brain,
      color: "data-secondary",
      gradient: "from-data-secondary/20 to-data-secondary/5",
    },
    {
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
        "Built multilingual sentiment analysis models on 160K+ Pakistani drama subtitles. Labeled 73K+ English and Urdu sentences using DistilBERT and M2M100, achieving 81% accuracy for English and 80% for Urdu.",
      icon: Brain,
      color: "data-secondary",
      gradient: "from-data-secondary/20 to-data-secondary/5",
    },
    {
      title: "Urdu-to-English Machine Translation",
      url: "https://github.com/RanaTalha04/Urdu-English-NLP-Translation",
      platform: "NLP",
      role: "NLP Engineer",
      tools: ["M2M100", "Python", "Pytorch", "Google Colab"],
      description:
        "Implemented a translation pipeline using Facebook's M2M100 on 160K+ subtitles, achieving a BLEU score of 57 for high-quality translations.",
      icon: Languages,
      color: "data-tertiary",
      gradient: "from-data-tertiary/20 to-data-tertiary/5",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Featured{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing data-driven solutions that transform insights into
              impact
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card
                  key={index}
                  className="group bg-gradient-card border-border hover:shadow-glow hover:scale-[1.02] transition-all duration-500 overflow-hidden"
                >
                  <CardContent className="p-8">
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent
                          size={28}
                          className={`text-${project.color}`}
                        />
                      </div>
                      {project.url && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          onClick={() => window.open(project.url, "_blank")}
                        >
                          <ExternalLink size={18} />
                        </Button>
                      )}
                    </div>

                    {/* Project Info */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="text-sm text-muted-foreground">
                            {project.role}
                          </span>
                          <span className="text-muted-foreground">•</span>
                          <span
                            className={`text-sm font-medium text-${project.color}`}
                          >
                            {project.platform}
                          </span>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      {/* Tools */}{" "}
                      <div className="flex flex-wrap gap-2">
                        {" "}
                        {project.tools.map((tool, toolIndex) => (
                          <span
                            key={toolIndex}
                            className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full border border-border"
                          >
                            {" "}
                            {tool}{" "}
                          </span>
                        ))}{" "}
                      </div>{" "}
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Interested in seeing more projects or discussing collaboration?
            </p>
            <Button
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Let's Connect
              <ExternalLink className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
