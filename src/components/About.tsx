import { Brain, LineChart, BarChart3, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Design and train models to solve real-world problems using Python and ML algorithms."
    },
    {
      icon: LineChart,
      title: "Data Analysis",
      description: "Clean, visualize, and interpret datasets to uncover insights and trends that drive decisions."
    },
    {
      icon: BarChart3,
      title: "Model Deployment",
      description: "Deploy interactive ML apps using Streamlit and integrate with real-world datasets."
    },
    {
      icon: Rocket,
      title: "Continuous Learning",
      description: "Always exploring new techniques — from machine learning to deep learning and AI applications."
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I’m <span className="text-primary font-semibold">Muhammad Talha</span> — a Machine Learning & Data Analysis enthusiast passionate about transforming raw data into smart, data-driven solutions.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I love building <span className="text-accent font-semibold">end-to-end ML projects</span> — from data preprocessing and feature engineering to training, tuning, and deployment.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My focus is on creating models and applications that are not only <span className="text-primary font-semibold">accurate</span> but also <span className="text-accent font-semibold">impactful</span> and practical for real-world use.
              </p>

              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-data-primary rounded-full"></div>
                  <span className="text-sm">Computer Science Student</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-data-secondary rounded-full"></div>
                  <span className="text-sm">Machine Learning Developer</span>
                </div>
              </div>
            </div>

            {/* Right Side Stats */}
            <div className="relative">
              <div className="bg-gradient-card p-8 rounded-2xl shadow-card border border-border">
                <div className="text-center space-y-4">
                  <div className="text-3xl font-bold text-primary">92%</div>
                  <div className="text-sm text-muted-foreground">Model Accuracy Achieved</div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-border">
                  <div className="text-center">
                    <div className="text-xl font-bold text-data-secondary">2+</div>
                    <div className="text-xs text-muted-foreground">ML Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-data-accent">1</div>
                    <div className="text-xs text-muted-foreground">Models Deployed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-card p-6 rounded-xl shadow-card border border-border hover:shadow-glow hover:scale-105 transition-all duration-300 group"
                >
                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={24} className="text-background" />
                    </div>
                    <h3 className="font-semibold text-foreground">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
