import { Code, Database, Wrench, Brain, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Data",
      icon: Code,
      color: "data-primary",
      skills: ["Python", "SQL (MySQL, PostgreSQL)", "C/C++", "HTML", "CSS"]
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      color: "data-ml",
      skills: ["Scikit-learn", "NLTK", "Feature Engineering", "Model Evaluation"]
    },
    {
      title: "Data Processing & Visualization",
      icon: Database,
      color: "data-secondary", 
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Tableau", "Excel", "Web Scraping"]
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      color: "data-tertiary",
      skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab", "Kaggle", "SQL Server"]
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for data science, machine learning, and software development
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={index}
                  className="group bg-gradient-card p-8 rounded-2xl shadow-card border border-border hover:shadow-glow hover:scale-105 transition-all duration-500 relative"
                >
                  {/* Category Header */}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br from-${category.color}/20 to-${category.color}/5 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={32} className={`text-${category.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="flex items-center space-x-3 group/skill"
                      >
                        <div
                          style={{ backgroundColor: `hsl(var(--${category.color}))` }}
                          className="w-1.5 h-1.5 rounded-full group-hover/skill:scale-125 transition-transform duration-200"
                        ></div>
                        <span className="text-sm text-muted-foreground group-hover/skill:text-foreground transition-colors duration-200">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${category.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none`}></div>
                </div>
              );
            })}
          </div>

          {/* Skills Stats */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-card p-6 rounded-xl border border-border">
              <div className="text-3xl font-bold text-data-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Programming Languages</div>
            </div>
            <div className="text-center bg-gradient-card p-6 rounded-xl border border-border">
              <div className="text-3xl font-bold text-data-ml mb-2">8+</div>
              <div className="text-sm text-muted-foreground">ML & AI Tools</div>
            </div>
            <div className="text-center bg-gradient-card p-6 rounded-xl border border-border">
              <div className="text-3xl font-bold text-data-accent mb-2">4</div>
              <div className="text-sm text-muted-foreground">Major Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
