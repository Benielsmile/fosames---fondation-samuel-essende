import { Users, Shield, CheckCircle2 } from "lucide-react";

const WOMEN_IMAGE = "/src/assets/images/fosames_women_leadership_congolese_1779174764252.png";
const CHILDREN_IMAGE = "/src/assets/images/fosames_children_inclusion_education_1779174783988.png";

export default function Actions() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32 max-w-3xl">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-secondary mb-8 block">PROGRAMMES OPÉRATIONNELS</span>
          <h1 className="text-6xl md:text-8xl font-serif mb-10 leading-none">Transformer les <span className="text-secondary italic">vies</span>.</h1>
          <p className="text-xl text-ink/50 font-light leading-relaxed">
            FOSAMES intervient sur des problématiques structurelles pour garantir un changement pérenne dans la communauté congolaise.
          </p>
        </div>

        <div className="space-y-32">
          {/* Action 1 */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-secondary/5 px-4 py-2 rounded-full mb-8">
                <Users className="w-4 h-4 text-secondary" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-secondary">Axe 1 : Autonomisation Féminine</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-8">Leadership et Économie</h2>
              <ul className="space-y-6">
                {[
                  "Programmes de microcrédit pour l'entrepreneuriat féminin.",
                  "Sensibilisation à la santé sexuelle et reproductive.",
                  "Assistance juridique et psychologique pour les victimes de VBG.",
                  "Mentorat et leadership pour les jeunes filles."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="text-secondary w-5 h-5 flex-shrink-0 mt-1" />
                    <p className="text-ink/60 font-light leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2 rounded-[60px] overflow-hidden shadow-2xl h-[500px]">
              <img src={WOMEN_IMAGE} alt="Axe 1" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Action 2 */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="rounded-[60px] overflow-hidden shadow-2xl h-[500px]">
              <img src={CHILDREN_IMAGE} alt="Axe 2" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-8">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-accent">Axe 2 : Protection de l'Enfance</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-8">Inclusion et Éducation</h2>
              <ul className="space-y-6">
                {[
                  "Médiation Parent-Enfant pour restaurer le dialogue familial.",
                  "Inclusion des enfants en situation de handicap.",
                  "Centres de réinsertion pour les enfants des rues.",
                  "Actions contre le travail forcé des enfants."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0 mt-1" />
                    <p className="text-ink/60 font-light leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
