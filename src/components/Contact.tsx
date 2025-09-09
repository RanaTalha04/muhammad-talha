import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ArrowRight, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "muhammadtalhashahid2005@gmail.com",
      action: "mailto:muhammadtalhashahid2005@gmail.com",
      color: "data-primary"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect professionally",
      action: "https://www.linkedin.com/in/muhammadtaalhaa/",
      color: "data-secondary"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "View my repositories",
      action: "https://github.com/RanaTalha04",
      color: "data-tertiary"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm open to internships, freelance projects, and data-focused job opportunities. 
              Whether you're looking for collaboration, problem-solving, or creative insights from data — 
              I'd love to connect and contribute.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6"></div>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div 
                  key={index}
                  className="group bg-gradient-card p-8 rounded-2xl shadow-card border border-border hover:shadow-glow hover:scale-105 transition-all duration-500 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br from-${method.color}/20 to-${method.color}/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={32} className={`text-${method.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{method.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-border hover:border-primary transition-smooth group-hover:bg-primary group-hover:text-primary-foreground"
                    onClick={() => window.open(method.action, '_blank')}
                  >
                    Connect
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              );
            })}
          </div>

          {/* Quick Info */}
          <div className="bg-gradient-card p-8 rounded-2xl shadow-card border border-border">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-data-secondary/20 to-data-secondary/5 rounded-xl flex items-center justify-center">
                  <MapPin size={24} className="text-data-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-sm text-muted-foreground">Pakistan (Remote Available)</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-data-accent/20 to-data-accent/5 rounded-xl flex items-center justify-center">
                  <Clock size={24} className="text-data-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Availability</h4>
                  <p className="text-sm text-muted-foreground">Open to new opportunities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-12 py-6"
              onClick={() => window.open('mailto:muhammadtalhashahid2005@gmail.com', '_blank')}
            >
              Start a Conversation
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;