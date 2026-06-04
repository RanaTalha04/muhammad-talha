import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { getProjectBySlug } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <Button asChild>
            <Link to="/projects">Back to All Projects</Link>
          </Button>
        </div>
      </div>
    );
  }

  const IconComponent = project.icon;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="ghost" className="mb-8">
            <Link to="/projects">
              <ArrowLeft className="mr-2" size={16} />
              All Projects
            </Link>
          </Button>

          <Card className="bg-gradient-card border-border">
            <CardContent className="p-8 lg:p-12">
              <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center`}
                >
                  <IconComponent size={32} className={`text-${project.color}`} />
                </div>
                <span
                  className={`px-4 py-2 text-sm rounded-full border border-border ${
                    project.status === "working"
                      ? "bg-data-accent/10 text-data-accent"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {project.status === "working" ? "In Progress" : "Completed"}
                </span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                {project.title}
              </h1>

              <div className="flex items-center flex-wrap gap-2 mb-8 text-sm">
                <span className="text-muted-foreground">{project.role}</span>
                <span className="text-muted-foreground">•</span>
                <span className={`font-medium text-${project.color}`}>
                  {project.platform}
                </span>
              </div>

              {project.screenshots && project.screenshots.length > 0 && (
                <div className="mb-8 space-y-4">
                  <img
                    src={project.screenshots[0]}
                    alt={`${project.title} screenshot`}
                    className="w-full h-[320px] rounded-3xl object-cover border border-border"
                    loading="lazy"
                  />
                  {project.screenshots.length > 1 && (
                    <div className="grid grid-cols-2 gap-4">
                      {project.screenshots.slice(1).map((screenshot) => (
                        <img
                          key={screenshot}
                          src={screenshot}
                          alt={`${project.title} screenshot`}
                          className="w-full h-40 rounded-2xl object-cover border border-border"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.longDescription || project.description}
                </p>
              </div>

              {project.highlights && project.highlights.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Key Highlights</h2>
                  <ul className="space-y-3">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <CheckCircle2
                          size={20}
                          className="text-primary mt-0.5 shrink-0"
                        />
                        <span className="text-muted-foreground">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Tools & Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-full border border-border"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {project.url && (
                <Button
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  onClick={() => window.open(project.url, "_blank")}
                >
                  View on GitHub
                  <ExternalLink className="ml-2" size={16} />
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
