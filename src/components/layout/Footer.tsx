import { Link } from "react-router-dom";
import { Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper py-20 px-6 border-t border-paper/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-8 h-8 bg-paper/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-all">
                <Globe className="text-paper w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight">FOSAMES</span>
            </Link>
            <p className="text-paper/40 font-light max-w-sm leading-relaxed mb-10">
              « Justice, Égalité, Espoir » — Bâtir ensemble une société congolaise où chaque femme est autonome et chaque enfant protégé.
            </p>
            <div className="flex gap-4">
              {["FB", "IG", "LI", "TW"].map(icon => (
                <div key={icon} className="w-10 h-10 rounded-full border border-paper/10 flex items-center justify-center hover:bg-paper hover:text-ink transition-all cursor-pointer">
                  <span className="text-[10px] font-bold font-serif uppercase">{icon}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-paper/20 mb-8">EXPLORER</h4>
            <ul className="space-y-4">
              {[
                { name: "La Fondation", path: "/fondation" },
                { name: "Nos Actions", path: "/actions" },
                { name: "Statuts", path: "/statuts" },
                { name: "Transparence", path: "/transparence" }
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.path} className="text-sm font-light text-paper/60 hover:text-accent transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-paper/20 mb-8">PLUS</h4>
            <ul className="space-y-4">
              {["Impact 2023", "Presse", "FAQ", "S'Impliquer"].map(item => (
                <li key={item}>
                  <Link to={item === "S'Impliquer" ? "/impliquer" : "#"} className="text-sm font-light text-paper/60 hover:text-accent transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-paper/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-widest text-paper/20">
            © 2026 FONDATION SAMUEL ESSENDE. TOUS DROITS RÉSERVÉS.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[9px] uppercase tracking-widest text-paper/10 font-bold">Réalisé par</span>
            <span className="font-serif italic text-accent tracking-tighter text-lg">Beniel M & ZORANE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
