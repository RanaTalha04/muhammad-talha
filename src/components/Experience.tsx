import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Machine Learning Intern / Data Science Trainee",
      company: "ML1 (Machine Learning 1)",
      duration: "1 Month",
      description: [
        "Worked on real-world machine learning projects.",
        "Performed data preprocessing, feature engineering, and exploratory data analysis.",
        "Built and evaluated machine learning models using Scikit-learn.",
        "Collaborated using Git and GitHub for version control.",
        "Improved understanding of the complete ML workflow from data preparation to model evaluation.",
      ],
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Git", "GitHub"],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A journey through hands-on machine learning and data science practice
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-data-secondary to-transparent"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-12 mb-12">
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-1/2 md:-translate-x-1/2 top-6 w-5 h-5 rounded-full bg-gradient-primary shadow-glow border-4 border-background z-10"></div>

                <div className={`${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}>
                  <div className="group bg-gradient-card p-8 rounded-2xl shadow-card border border-border hover:shadow-glow hover:scale-[1.02] transition-all duration-500">
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Briefcase size={24} className="text-background" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                    <p className="text-primary font-semibold mb-2">{exp.company}</p>

                    <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Calendar size={14} />
                      <span>{exp.duration}</span>
                    </div>

                    <ul className="space-y-2 mb-6 text-left">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 size={16} className="text-data-accent shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
