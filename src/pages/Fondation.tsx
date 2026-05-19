import { Heart, Scale, Shield } from "lucide-react";

const HERO_IMAGE = "/src/assets/images/fosames_hero_african_mother_child_1779174745353.png";

export default function Fondation() {
  return (
    <div className="py-20">
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary mb-8 block">NOTRE HISTOIRE</span>
            <h1 className="text-6xl md:text-7xl font-serif mb-10 leading-tight">Une vision née de la <span className="italic text-primary">solidarité</span>.</h1>
            <div className="space-y-6 text-lg text-ink/60 font-light leading-relaxed">
              <p>Créée en avril 2022, la Fondation Samuel Essende (FOSAMES) est née d'un constat simple mais alarmant : les populations défavorisées de la République Démocratique du Congo manquent trop souvent de soutien structurel.</p>
              <p>Nous croyons que le développement intégral d'une nation passe par l'autonomisation de sa force la plus vitale : les femmes et les enfants.</p>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[60px] overflow-hidden shadow-2xl">
              <img src={HERO_IMAGE} alt="History" className="w-full h-full object-cover aspect-square" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-primary p-12 rounded-[40px] shadow-2xl text-paper max-w-xs">
              <h4 className="font-serif text-3xl mb-4 text-accent">2022</h4>
              <p className="text-xs uppercase tracking-widest font-bold opacity-60">Année de fondation à Kinshasa</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-ink text-paper px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Nos Valeurs Fondamentales</h2>
            <p className="text-paper/40 font-light">Les piliers qui guident chaque décision de la FOSAMES.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Dignité Humaine", desc: "Le respect absolu de chaque individu, sans discrimination.", icon: <Heart className="text-accent" /> },
              { title: "Justice Sociale", desc: "La quête d'une égalité des chances pour tous les citoyens.", icon: <Scale className="text-accent" /> },
              { title: "Transparence", desc: "Une gestion rigoureuse et ouverte de toutes nos ressources.", icon: <Shield className="text-accent" /> }
            ].map((v, i) => (
              <div key={i} className="p-10 rounded-[40px] border border-paper/10 bg-white/5 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-paper/10 rounded-2xl flex items-center justify-center mb-8">{v.icon}</div>
                <h4 className="text-2xl font-serif mb-4">{v.title}</h4>
                <p className="text-paper/40 font-light leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-12 italic">"Contribuer à l'atteinte des Objectifs de Développement Durable."</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {["ODD 4", "ODD 5", "ODD 10", "ODD 16"].map(odd => (
              <div key={odd} className="w-24 h-24 rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/10">
                <span className="font-bold text-primary">{odd}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
