import { Globe, Heart, Users } from "lucide-react";

export default function Impliquer() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-8 block">ACTION COLLECTIVE</span>
          <h1 className="text-6xl md:text-8xl font-serif mb-10 leading-none">Chaque geste <span className="text-accent italic">compte</span>.</h1>
          <p className="text-xl text-ink/50 font-light max-w-2xl mx-auto leading-relaxed">
            Que vous soyez un particulier ou une entreprise, il existe de nombreuses façons de soutenir la mission de la FOSAMES.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "Devenir Membre", 
              desc: "Adhérez officiellement à la fondation pour participer activement aux décisions.", 
              cta: "Postuler", 
              icon: <Users className="text-primary" /> 
            },
            { 
              title: "Faire un Don", 
              desc: "Soutenez nos programmes financiers pour permettre l'accès au microcrédit.", 
              cta: "Donner", 
              icon: <Heart className="text-accent" /> 
            },
            { 
              title: "Partenariat Corporate", 
              desc: "Engagez votre entreprise dans une démarche de responsabilité sociétale (RSE).", 
              cta: "Collaborer", 
              icon: <Globe className="text-secondary" /> 
            }
          ].map((item, i) => (
            <div key={i} className="bg-paper border border-ink/5 p-12 rounded-[50px] hover:shadow-2xl transition-all group flex flex-col">
              <div className="w-14 h-14 bg-ink/5 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif mb-6">{item.title}</h3>
              <p className="text-ink/50 font-light leading-relaxed mb-10 flex-1">{item.desc}</p>
              <button className="w-full py-4 rounded-2xl bg-ink text-paper font-bold uppercase tracking-widest text-xs hover:bg-primary transition-colors">
                {item.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 md:p-20 bg-ink rounded-[60px] text-paper flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Une question spécifique ?</h2>
          <p className="text-paper/40 font-light mb-12 max-w-xl">
            Notre équipe est à votre disposition pour discuter des modalités de soutien et d'engagement.
          </p>
          <a href="mailto:contact@fosames.org" className="bg-accent text-ink px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all">
            Contactez-nous aujourd'hui
          </a>
        </div>
      </div>
    </div>
  );
}
