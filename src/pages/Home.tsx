import { motion } from "framer-motion";
import { Shield, Heart, Scale, Users, ChevronRight, ArrowRight, BookOpen } from "lucide-react";
import Hero from "@/src/components/home/Hero";
import DeviseReveal from "@/src/components/home/DeviseReveal";

const HERO_IMAGE = "/images/fosames_hero_african_mother_child_1779174745353.png";
const WOMEN_IMAGE = "/images/fosames_women_leadership_congolese_1779174764252.png";
const CHILDREN_IMAGE = "/images/fosames_children_inclusion_education_1779174783988.png";

export default function Home() {
  return (
    <>
      <Hero />
      <DeviseReveal />
      <MissionPreamble />
      <ProgramsGrid />
      <StatutesPreview />
      <GovernanceSummary />
      <ContactSection />
    </>
  );
}

function MissionPreamble() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-ink/30 mb-8 block">PRÉAMBULE</span>
          <h2 className="text-4xl md:text-5xl font-serif text-ink mb-12 text-balance leading-tight">
            Dans un monde où les ONG épaulent le progrès, nous choisissons de soutenir les plus <span className="text-secondary italic">vulnérables</span>.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="space-y-6">
              <p className="text-ink/70 leading-relaxed font-light">
                Considérant que les populations défavorisées, en particulier les femmes et les enfants, sont les plus souvent sans assistance, ni soutien et protection.
              </p>
              <p className="text-ink/70 leading-relaxed font-light">
                Considérant que le développement intégral passe par la mise en commun des efforts et des diverses ressources.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-ink/70 leading-relaxed font-light">
                FOSAMES s'engage contre les violences basées sur le genre (VBG) et pour l'inclusion des enfants en situation de handicap.
              </p>
              <div className="pt-4">
                <button className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
                  Lire l'intégralité du préambule <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProgramsGrid() {
  const programs = [
    {
      title: "Autonomie de la Femme",
      desc: "Microcrédit, formation professionnelle et lutte contre les violences basées sur le genre.",
      icon: <Users className="w-6 h-6" />,
      image: WOMEN_IMAGE,
      color: "bg-primary/5",
      points: ["Leadership féminin", "Santé reproductive", "Mentorat"]
    },
    {
      title: "Protection de l'Enfant",
      desc: "Inclusion des enfants handicapés, médiation parent-enfant et lutte contre le travail forcé.",
      icon: <Shield className="w-6 h-6" />,
      image: CHILDREN_IMAGE,
      color: "bg-secondary/5",
      points: ["Médiation parentale", "Inclusion handicap", "Scolarisation"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-paper">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-serif mb-6 leading-tight">Nos Piliers d'Action</h2>
            <p className="text-ink/50 font-light">Des programmes structurés pour un impact durable sur les générations futures de la RDC.</p>
          </div>
          <button className="text-xs uppercase tracking-widest font-bold text-primary flex items-center gap-2 underline underline-offset-8 decoration-primary/20 hover:decoration-primary transition-all">
            Tous nos projets <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {programs.map((p, i) => (
            <motion.div 
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className={`group overflow-hidden rounded-[40px] ${p.color} border border-ink/5 flex flex-col`}
            >
              <div className="h-[350px] overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-10 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-paper flex items-center justify-center text-primary shadow-sm border border-ink/5">
                    {p.icon}
                  </div>
                  <h3 className="text-2xl font-serif">{p.title}</h3>
                </div>
                <p className="text-ink/60 font-light mb-8 flex-1 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {p.points.map(pt => (
                    <span key={pt} className="text-[9px] uppercase tracking-widest bg-paper px-3 py-1.5 rounded-full border border-ink/5 font-bold text-ink/40">
                      {pt}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-paper py-4 rounded-2xl border border-ink/10 font-bold uppercase tracking-widest text-[10px] hover:bg-primary hover:text-paper hover:border-primary transition-all flex items-center justify-center gap-2">
                  En savoir plus <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatutesPreview() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto bg-primary rounded-[60px] p-12 md:p-24 relative overflow-hidden flex flex-col md:flex-row gap-16 items-center">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-ink/5 skew-x-[-15deg] origin-top translate-x-20" />
        <Scale className="absolute -bottom-20 -left-10 w-80 h-80 text-paper/5 rotate-12" />

        <div className="relative z-10 flex-1">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-paper/60 mb-6 block">CADRE JURIDIQUE</span>
          <h2 className="text-4xl md:text-6xl font-serif text-paper mb-10 leading-tight">Des Statuts Fondés sur la Transparence.</h2>
          <p className="text-paper/70 font-light mb-12 text-lg leading-relaxed max-w-xl">
            Conformément à la loi n°004/2001 du 20 juillet 2001, FOSAMES est une institution apolitique régie par des principes de justice et d'égalité.
          </p>
          <button className="bg-accent text-ink px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center gap-3">
            <BookOpen className="w-4 h-4" /> Consulter les statuts complets
          </button>
        </div>

        <div className="relative z-10 w-full md:w-[400px] space-y-4">
          {[
            { art: "Article 2", title: "Forme Juridique", desc: "Apolitique et sans but lucratif" },
            { art: "Article 6", title: "Objet Général", desc: "Société juste, égalitaire et inclusive" },
            { art: "Article 29", title: "Exercice Comptable", desc: "Transparence et rapports annuels" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-paper/5 backdrop-blur-xl border border-paper/10 p-6 rounded-3xl"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-[9px] uppercase tracking-widest font-bold text-accent">{item.art}</span>
              </div>
              <h4 className="text-paper font-serif mb-1">{item.title}</h4>
              <p className="text-paper/40 text-[10px] leading-relaxed tracking-wide">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GovernanceSummary() {
  return (
    <section className="py-32 px-6 bg-paper border-t border-ink/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-serif mb-6">Gouvernance Exécutive</h2>
          <p className="text-ink/50 max-w-xl mx-auto font-light leading-relaxed">
            Une direction collégiale engagée dans la rigueur administrative et l'efficacité de terrain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { role: "Conseil d'Administration", icon: <Users />, count: 6 },
            { role: "Direction Exécutive", icon: <Shield />, count: 10 },
            { role: "Collège des Fondateurs", icon: <Heart />, count: "Originel" },
            { role: "Comité de Surveillance", icon: <Scale />, count: 3 }
          ].map((item, i) => (
            <div key={i} className="bg-paper border border-ink/5 p-8 rounded-3xl hover:shadow-xl transition-all group">
              <div className="w-10 h-10 rounded-xl bg-ink/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-paper transition-all mb-6">
                {item.icon}
              </div>
              <h4 className="font-serif text-lg mb-2">{item.role}</h4>
              <p className="text-[10px] text-ink/40 uppercase tracking-widest font-bold">
                {typeof item.count === 'number' ? `${item.count} Membres` : item.count}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-ink/30 mb-8 block">CONTACT</span>
          <h2 className="text-5xl font-serif mb-10 leading-tight">Rejoignez notre <span className="text-primary italic">mouvement</span>.</h2>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[10px] uppercase tracking-widest text-ink/40 mb-2">Adresse du Siège</h4>
                <p className="text-lg font-light leading-relaxed">
                  13 RUE  BUSU-MELO, <br/>
                  Commune de KASA-VUBU, Kinshasa, RDC.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[10px] uppercase tracking-widest text-ink/40 mb-2">Email Professionnel</h4>
                <p className="text-lg font-light">contact@fosames.org</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-paper border border-ink/5 p-12 rounded-[40px] shadow-sm relative overflow-hidden">
          <form className="relative z-10 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-ink/40 ml-2">Nom Complet</label>
                <input type="text" className="w-full bg-ink/5 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="Samuel Essende" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-ink/40 ml-2">Email</label>
                <input type="email" className="w-full bg-ink/5 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="contact@exemple.org" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-ink/40 ml-2">Sujet</label>
              <select className="w-full bg-ink/5 border-none rounded-2xl p-4 text-sm outline-none">
                <option>Devenir Partenaire</option>
                <option>Faire un Don</option>
                <option>Bénévole</option>
                <option>Autre</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-ink/40 ml-2">Message</label>
              <textarea rows={4} className="w-full bg-ink/5 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="Comment nous aider ?" />
            </div>
            <button className="w-full bg-primary text-paper py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] shadow-xl hover:bg-primary/90 hover:scale-[1.02] active:scale-95 transition-all">
              Envoyer le message
            </button>
          </form>
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-10 translate-x-10" />
        </div>
      </div>
    </section>
  );
}
