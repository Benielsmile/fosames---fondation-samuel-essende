import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { name: "La Fondation", path: "/fondation" },
    { name: "Nos Actions", path: "/actions" },
    { name: "Statuts", path: "/statuts" },
    { name: "Transparence", path: "/transparence" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] border-b border-ink/5 bg-paper/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsMenuOpen(false)}>
          <img src={logo} alt="FOSAMES" className="h-10 w-auto" />
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-tight text-primary leading-none">FOSAMES</span>
            <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-ink/40 mt-1">Fondation Samuel Essende</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink/50 hover:text-primary transition-colors py-2 relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
          <Link to="/impliquer" id="cta-donate-nav" className="bg-primary text-paper px-6 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20">
            S'Impliquer
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          id="menu-toggle"
          className="lg:hidden p-2 bg-ink/5 rounded-xl text-ink"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-20 left-0 w-full bg-paper border-b border-ink/10 overflow-hidden lg:hidden"
          >
            <div className="p-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className="text-lg font-serif text-ink border-b border-ink/5 pb-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                to="/impliquer" 
                className="w-full bg-primary text-paper py-5 rounded-2xl text-sm font-bold uppercase tracking-widest text-center shadow-xl shadow-primary/20"
                onClick={() => setIsMenuOpen(false)}
              >
                S'Impliquer
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
