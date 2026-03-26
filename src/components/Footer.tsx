import { Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-border/40 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          
          <div className="flex flex-col space-y-2">
            <span className="font-display font-bold text-2xl tracking-tight text-primary">
              TechByJaver.
            </span>
            <span className="text-sm text-muted-foreground">
              Building digital products that dominate.
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-8 text-sm font-medium text-foreground">
            <a href="mailto:javiertanaxcruz@gmail.com" className="flex items-center hover:text-accent transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              javiertanaxcruz@gmail.com
            </a>
            <a href="tel:3175048877" className="flex items-center hover:text-accent transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              317-504-8877
            </a>
          </div>

          <div className="flex items-center">
            <a
              href="https://linktr.ee/Javer.texh"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-secondary text-foreground text-sm font-semibold hover:bg-primary hover:text-white transition-all"
            >
              Linktree
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 text-center flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2026 TechByJaver. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
