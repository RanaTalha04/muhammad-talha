import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Github, Linkedin, ArrowRight, MapPin, Clock, Send } from "lucide-react";
import emailjs from '@emailjs/browser';
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_35l4zvu',
        'template_4bbdqll',
        {
          name: formData.name,
          from_email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString()
        },
        '2WyX8kGZveLJGiwx_'
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Send Email",
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

          {/* Contact Form */}
          <div className="bg-gradient-card p-8 rounded-2xl shadow-card border border-border mb-16">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">Send me a message</h3>
                <p className="text-muted-foreground">I'll get back to you as soon as possible</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                
                <div className="text-center">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-3"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2" size={18} />
                  </Button>
                </div>
              </form>
            </div>
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
          
        </div>
      </div>
    </section>
  );
};

export default Contact;