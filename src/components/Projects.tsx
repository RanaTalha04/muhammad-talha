import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BarChart3, Brain, Languages, GraduationCap, HeartPulse} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Heart Disease Prediction using Machine Learning",
      url: "https://github.com/RanaTalha04/Heart_Disease_Prediction",
      platform: "Machine Learning",
      role: "ML Engineer",
      tools: ["Python", "Scikit-learn", "Pandas" , "Data Cleaning", "Streamlit"],
      description:
        "Developed a predictive model to assess heart disease risk using health parameters. Compared multiple models (Logistic Regression, SVM, KNN) and deployed a user-friendly Streamlit app for real-time prediction.",
      icon: HeartPulse,
      color: "data-ml",
      gradient: "from-data-ml/20 to-data-ml/5",
    },
    {
      title: "Sales Dashboard",
      url: "https://github.com/RanaTalha04/Sales-Dashboard",
      platform: "Tableau",
      role: "Designer & Developer",
      tools: ["Tableau", "Python", "Data Cleaning", "Data Visualization"],
      description: "Built an interactive sales dashboard to analyze revenue, sales trends, and product performance. Designed bar charts, line charts, and KPI visuals to provide actionable insights for data-driven decision-making.",
      icon: BarChart3,
      color: "data-primary",
      gradient: "from-data-primary/20 to-data-primary/5"
    },
    {
      title: "Sentiment Analysis on Pakistani Drama Subtitles",
      platform: "NLP",
      role: "Data Scientist",
      tools: ["DistilBERT", "M2M100", "Python", "Pytorch", "Google Colab"],
      description: "Processed 160K+ subtitles and labeled 73K+ sentences in English and Urdu. Developed sentiment models achieving 81% accuracy (English) and 80% (Urdu).",
      icon: Brain,
      color: "data-secondary",
      gradient: "from-data-secondary/20 to-data-secondary/5"
    },
    {
      title: "Urdu-to-English Machine Translation",
      url: "https://github.com/RanaTalha04/Urdu-English-NLP-Translation",
      platform: "NLP",
      role: "NLP Engineer", 
      tools: ["M2M100", "Python", "Pytorch", "Google Colab"],
      description: "Implemented a translation pipeline using Facebook's M2M100. Trained on 160K+ subtitles, achieving a BLEU score of 57, ensuring high-quality translations.",
      icon: Languages,
      color: "data-tertiary",
      gradient: "from-data-tertiary/20 to-data-tertiary/5"
    },
    {
      title: "AI-based Educational Analysis",
      url: "https://github.com/RanaTalha04/Artificial-Intelligence-K-Means-Naive-Base-",
      platform: "K-Means & Naive Bayes",
      role: "ML Researcher",
      tools: ["Python", "Scikit-learn"],
      description: "Applied clustering and classification to student datasets. Segmented students using K-Means and built a Naive Bayes model with 60% accuracy, uncovering insights into socioeconomic and academic factors.",
      icon: GraduationCap,
      color: "data-accent",
      gradient: "from-data-accent/20 to-data-accent/5"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing data-driven solutions that transform insights into impact
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
                        <div className={`w-14 h-14 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent size={28} className={`text-${project.color}`} />
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
                        <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="text-sm text-muted-foreground">{project.role}</span>
                          <span className="text-muted-foreground">•</span>
                          <span className={`text-sm font-medium text-${project.color}`}>{project.platform}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                      {/* Tools */} <div className="flex flex-wrap gap-2"> {project.tools.map((tool, toolIndex) => ( <span key={toolIndex} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full border border-border" > {tool} </span> ))} </div> </div>


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
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
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