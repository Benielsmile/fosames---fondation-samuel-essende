import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HERO_IMAGE = "/src/assets/images/fosames_hero_african_mother_child_1779174745353.png";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-primary">République Démocratique du Congo</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif text-ink leading-[0.9] mb-8 text-balance">
            Bâtir une <span className="italic text-primary">société</span> plus juste.
          </h1>
          
          <p className="text-lg text-ink/60 max-w-lg mb-12 leading-relaxed font-light">
            La Fondation Samuel Essende (FOSAMES) œuvre pour l'autonomisation des femmes et la protection des droits de l'enfant au cœur de Kinshasa.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-paper px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-3 group hover:pr-10 transition-all">
              Découvrir nos actions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="border border-ink/10 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-ink/5 transition-all">
              Les Statuts
            </button>
          </div>
        </motion.div>

        <motion.div 
          className="relative group h-full"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Main Video Container: Sharp Pro Proportions */}
          <div className="relative z-10 w-full h-[500px] md:h-[700px] overflow-hidden shadow-[20px_20px_0px_0px_rgba(18,93,68,1)] border-2 border-ink bg-ink/5">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              poster={HERO_IMAGE}
              className="w-full h-full object-cover transition-transform duration-[10s] ease-out group-hover:scale-105"
            >
              {/* Using a highly reliable public video for testing and visual parity */}
              <source src="https://test-videos.co.uk/vids/big_buck_bunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4" type="video/mp4" />
              <source src="https://assets.mixkit.co/videos/preview/mixkit-small-group-of-african-school-children-smiling-together-34533-large.mp4" type="video/mp4" />
              <img 
                src={HERO_IMAGE} 
                alt="FOSAMES Hero" 
                className="w-full h-full object-cover"
              />
            </video>
            
            {/* Pro Overlays */}
            <div className="absolute inset-0 bg-ink/10 mix-blend-overlay pointer-events-none" />
            <div className="absolute inset-0 border-[16px] border-paper/5 pointer-events-none" />
            
            {/* HUD / Scanning Effect for that 'Pro' feel */}
            <div className="absolute top-8 left-8 z-20 flex gap-2">
              <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse" />
              <span className="text-[7px] font-black uppercase tracking-widest text-paper/80">LIVE FEED // KINSHASA</span>
            </div>

            <motion.div 
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 w-full h-[1px] bg-accent/20 z-20 pointer-events-none"
            />
          </div>

          {/* Geometric Accents (Sharp, not rounded) */}
          <div className="absolute -top-6 -right-6 w-32 h-32 border-r border-t border-ink/20 z-0" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent/5 z-0" />
          
          {/* Legend/Info Tag */}
          <div className="absolute -bottom-6 right-8 z-20 bg-ink p-6 border-l-4 border-accent shadow-2xl">
            <div className="flex flex-col gap-1">
              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-accent">Contenu Documenté</span>
              <span className="text-paper text-[10px] font-bold">Terrain RDC • Campagne 2024</span>
              <div className="mt-2 flex gap-1">
                {[1,2,3,4].map(i => <div key={i} className="w-1 h-1 bg-paper/20" />)}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
