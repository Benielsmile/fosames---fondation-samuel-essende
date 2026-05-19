import { Calendar, Shield } from "lucide-react";

export default function Transparence() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary mb-8 block">GOUVERNANCE</span>
          <h1 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">Intégrité et Rigueur.</h1>
          <p className="text-ink/50 font-light max-w-2xl mx-auto italic">"La confiance de nos partenaires repose sur une transparence absolue de nos opérations."</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-32">
          <div className="bg-primary p-12 rounded-[50px] text-paper relative overflow-hidden">
            <Shield className="absolute -bottom-10 -right-10 w-48 h-48 opacity-10" />
            <h3 className="text-3xl font-serif mb-8">Commission de Contrôle</h3>
            <p className="text-paper/70 font-light leading-relaxed mb-8">
              Un organe indépendant au sein de la fondation chargé de vérifier la bonne gestion des ressources matérielles et financières.
            </p>
            <ul className="space-y-4">
              {["Audit trimestriel interne", "Rapport annuel de contrôle", "Identification des risques"].map(item => (
                <li key={item} className="flex gap-3 items-center text-sm">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-paper border border-ink/10 p-12 rounded-[50px]">
            <h3 className="text-3xl font-serif mb-8 text-ink">Origine des Ressources</h3>
            <div className="space-y-6">
              {[
                { label: "Cotisations des membres", value: "Régularité" },
                { label: "Dons et Libéralités", value: "Indépendance" },
                { label: "Appui des Partenaires", value: "Impact" },
                { label: "Mise Initiale des Fondateurs", value: "Socle" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-4 border-b border-ink/5">
                  <span className="font-serif text-ink">{item.label}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center p-16 bg-paper border border-ink/10 rounded-[60px]">
          <Calendar className="w-12 h-12 text-primary mx-auto mb-8" />
          <h3 className="text-3xl font-serif mb-4">Exercice Comptable</h3>
          <p className="text-ink/60 font-light max-w-xl mx-auto leading-relaxed">
            Notre exercice commence le 1er janvier et se termine le 31 décembre. Les rapports sont présentés à l'Assemblée Générale au premier trimestre de l'exercice suivant pour validation.
          </p>
        </div>
      </div>
    </div>
  );
}
