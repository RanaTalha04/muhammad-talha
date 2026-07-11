import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";

const Projects = () => {
  const navigate = useNavigate();
  const featured = projects.filter((p) => p.featured);

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
              Show-casing data-driven solutions that transform insights into impact. 
            </p>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Click on any project to see the detail.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {featured.map((project) => {
              const IconComponent = project.icon;
              return (
                <Card
                  key={project.slug}
                  onClick={() => navigate(`/projects/${project.slug}`)}
                  className="group bg-gradient-card border-border hover:shadow-glow hover:scale-[1.02] transition-all duration-500 overflow-hidden cursor-pointer"
                >
                  <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent size={28} className={`text-${project.color}`} />
                      </div>
                      <span
                        className={`px-3 py-1 text-xs rounded-full border border-border capitalize ${
                          project.status === "working"
                            ? "bg-data-accent/10 text-data-accent"
                            : "bg-secondary text-secondary-foreground"
                        }`}
                      >
                        {project.status === "working" ? "In Progress" : "Completed"}
                      </span>
                    </div>

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
                          <span className={`text-sm font-medium text-${project.color}`}>
                            {project.platform}
                          </span>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full border border-border"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Show All Projects */}
          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              <Link to="/projects">
                Show All Projects
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Interested in collaboration?
            </p>
            <Button
              variant="outline"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Get In Touch
              <ExternalLink className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
