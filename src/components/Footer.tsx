import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>© 2024 Muhammad Talha</span>
            <span>•</span>
            <span>Data Analyst & Computer Science Student</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart size={14} className="text-red-500 fill-current" />
            <span>and modern web technologies</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Transforming data into insights • Passionate about analytics • Always learning
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;