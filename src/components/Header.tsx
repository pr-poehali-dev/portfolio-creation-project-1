import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-background border-b w-full py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
          Динар
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground/80 hover:text-primary transition-colors">
            Главная
          </Link>
          <Link to="/projects" className="text-foreground/80 hover:text-primary transition-colors">
            Проекты
          </Link>
          <Link to="/skills" className="text-foreground/80 hover:text-primary transition-colors">
            Навыки
          </Link>
          <Link to="/contact" className="text-foreground/80 hover:text-primary transition-colors">
            Контакты
          </Link>
          <Button variant="default" className="bg-accent hover:bg-accent/90">
            Резюме
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-foreground" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b shadow-lg p-4 md:hidden flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Главная
            </Link>
            <Link 
              to="/projects" 
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Проекты
            </Link>
            <Link 
              to="/skills" 
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Навыки
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Контакты
            </Link>
            <Button variant="default" className="bg-accent hover:bg-accent/90 w-full">
              Резюме
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;