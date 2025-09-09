import { TrendingUp, Users, Target, Lightbulb } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: TrendingUp,
      title: "Data-Driven Insights",
      description: "Transform complex data into clear, actionable insights"
    },
    {
      icon: Users,
      title: "Decision Support",
      description: "Empower teams with intuitive dashboards and reports"
    },
    {
      icon: Target,
      title: "Business Focus",
      description: "Deliver solutions that drive real business value"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Apply cutting-edge analytics to solve problems"
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
                I am <span className="text-primary font-semibold">Muhammad Talha</span> — a Data Analyst passionate about transforming raw data into meaningful insights. I specialize in building intuitive dashboards and reports that simplify complex information and empower smarter decision-making.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond coding, I focus on delivering solutions that are <span className="text-accent font-semibold">clear, impactful, and purposeful</span>. My approach combines technical expertise with business understanding to create analytics that truly drive value.
              </p>

              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-data-primary rounded-full"></div>
                  <span className="text-sm">Computer Science Student</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-data-secondary rounded-full"></div>
                  <span className="text-sm">Data Enthusiast</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-card p-8 rounded-2xl shadow-card border border-border">
                <div className="text-center space-y-4">
                  <div className="text-3xl font-bold text-primary">160K+</div>
                  <div className="text-sm text-muted-foreground">Subtitles Processed</div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-border">
                  <div className="text-center">
                    <div className="text-xl font-bold text-data-secondary">81%</div>
                    <div className="text-xs text-muted-foreground">ML Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-data-accent">57</div>
                    <div className="text-xs text-muted-foreground">BLEU Score</div>
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