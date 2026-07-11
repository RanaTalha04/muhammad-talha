import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects, type ProjectStatus } from "@/data/projects";

type Filter = "all" | ProjectStatus;

const AllProjects = () => {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = projects.filter((p) => filter === "all" || p.status === filter);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>All Projects - Muhammad Talha</title>
        <meta
          name="description"
          content="Complete list of Muhammad Talha's completed and in-progress machine learning, NLP, and data science projects."
        />
        <link rel="canonical" href="https://muhammad-talha.lovable.app/projects" />
        <meta property="og:title" content="All Projects — Muhammad Talha" />
        <meta property="og:description" content="Machine learning, NLP, and data science projects by Muhammad Talha." />
        <meta property="og:url" content="https://muhammad-talha.lovable.app/projects" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "All Projects — Muhammad Talha",
          "url": "https://muhammad-talha.lovable.app/projects",
        })}</script>
      </Helmet>
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <Button asChild variant="ghost" className="mb-8">
            <Link to="/#projects">
              <ArrowLeft className="mr-2" size={16} />
              Back to Home
            </Link>
          </Button>

          <div className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              All{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A complete list of completed and in-progress work.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {(["all", "completed", "working"] as Filter[]).map((f) => (
              <Button
                key={f}
                variant={filter === f ? "default" : "outline"}
                onClick={() => setFilter(f)}
                className={filter === f ? "bg-gradient-primary" : ""}
              >
                {f === "all"
                  ? `All (${projects.length})`
                  : f === "working"
                  ? `In Progress (${projects.filter((p) => p.status === "working").length})`
                  : `Completed (${projects.filter((p) => p.status === "completed").length})`}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((project) => {
              const IconComponent = project.icon;
              return (
                <Link to={`/projects/${project.slug}`} key={project.slug}>
                  <Card className="group h-full bg-gradient-card border-border hover:shadow-glow hover:scale-[1.02] transition-all duration-500 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center`}
                        >
                          <IconComponent size={24} className={`text-${project.color}`} />
                        </div>
                        <span
                          className={`px-3 py-1 text-xs rounded-full border border-border ${
                            project.status === "working"
                              ? "bg-data-accent/10 text-data-accent"
                              : "bg-secondary text-secondary-foreground"
                          }`}
                        >
                          {project.status === "working" ? "In Progress" : "Completed"}
                        </span>
                      </div>
                      <h2 className="text-lg font-bold mb-2">{project.title}</h2>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex items-center text-sm text-primary font-medium">
                        View details
                        <ArrowRight
                          size={14}
                          className="ml-1 group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              No projects in this category yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
