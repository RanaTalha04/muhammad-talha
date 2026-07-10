import { Button } from "@/components/ui/button";
import { FileText, Download, Eye, Brain, Database, Sparkles, Code2 } from "lucide-react";

const RESUME_URL = "#"; // Replace with your PDF link when ready

const Resume = () => {
  const highlights = [
    { icon: Brain, label: "Machine Learning Engineer" },
    { icon: Database, label: "Data Science" },
    { icon: Sparkles, label: "AI & ML Projects" },
    { icon: Code2, label: "Python Developer" },
  ];

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Resume
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Download my latest resume to learn more about my education, technical skills, experience, and projects.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6"></div>
          </div>

          {/* Resume Card */}
          <div className="group bg-gradient-card p-10 md:p-12 rounded-2xl shadow-card border border-border hover:shadow-glow transition-all duration-500 text-center">
            <div className="w-24 h-24 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
              <FileText size={48} className="text-background" />
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-3">Muhammad Talha — Resume</h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              A complete overview of my journey as a Machine Learning Engineer and Data Science practitioner.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button
                asChild
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-base px-8 py-6"
              >
                <a href={RESUME_URL} download>
                  <Download className="mr-2" size={18} />
                  Download Resume
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-border hover:border-primary transition-smooth text-base px-8 py-6"
              >
                <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                  <Eye className="mr-2" size={18} />
                  View Resume
                </a>
              </Button>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-border">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary/30 border border-border hover:border-primary hover:scale-105 transition-all duration-300"
                  >
                    <Icon size={22} className="text-primary" />
                    <span className="text-xs md:text-sm text-muted-foreground text-center">{h.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
