import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Rocket } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-secondary px-4 py-2 rounded-full text-sm">
                <Brain size={16} className="text-primary" />
                <span>Machine Learning Engineer | Data Scientist</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Muhammad <span className="bg-gradient-primary bg-clip-text text-transparent">Talha</span>
              </h1>

              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Building <span className="text-accent font-semibold">AI-powered</span> solutions that turn ideas into intelligent systems.
              </p>

              <p className="text-lg text-muted-foreground">
                Passionate about <span className="text-primary font-semibold">machine learning, model deployment,</span> 
                and transforming data.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
              >
                Get in Touch
                <ArrowRight className="ml-2" size={20} />
              </Button>
              
              <Button 
                variant="outline" 
                className="border-border hover:border-primary transition-smooth text-lg px-8 py-6"
                onClick={() => {
                  const element = document.getElementById('projects');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View Projects
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-data-secondary rounded-full animate-pulse"></div>
                <span>Available for AI/ML opportunities</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-data-accent rounded-full"></div>
                <span>Based in Pakistan</span>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-primary rounded-full opacity-15 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <img 
                  src={profilePhoto}
                  alt="Muhammad Talha - Machine Learning Developer"
                  className="w-full h-full object-[center_20%] object-cover rounded-full border-4 border-border shadow-card hover:shadow-glow transition-all duration-500"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              </div>

              {/* Floating Data Elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-card p-3 rounded-lg shadow-card animate-pulse">
                <Brain className="text-data-primary" size={24} />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gradient-card p-3 rounded-lg shadow-card animate-pulse delay-1000">
                <Rocket className="text-data-secondary" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
