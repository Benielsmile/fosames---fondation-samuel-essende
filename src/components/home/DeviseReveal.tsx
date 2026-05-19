import { motion } from "framer-motion";

export default function DeviseReveal() {
  const words = ["JUSTICE", "ÉGALITÉ", "ESPOIR"];
  // Triple the words for seamless infinite scrolling
  const marqueeItems = [...words, ...words, ...words];

  return (
    <section className="py-20 bg-ink text-paper overflow-hidden border-y border-paper/10">
      <div className="relative flex overflow-hidden">
        <motion.div 
          className="flex whitespace-nowrap items-center py-4"
          animate={{ x: [0, "-50%"] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {marqueeItems.map((word, i) => (
            <div key={i} className="flex items-center gap-12 md:gap-24 px-6 md:px-12">
              <h2 className="text-6xl md:text-[10vw] font-serif tracking-tighter leading-none text-paper/90 hover:text-accent transition-colors">
                {word}
              </h2>
              <div className="w-3 h-3 md:w-5 md:h-5 bg-accent rounded-full flex-shrink-0" />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {marqueeItems.map((word, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-12 md:gap-24 px-6 md:px-12">
              <h2 className="text-6xl md:text-[10vw] font-serif tracking-tighter leading-none text-paper/90 hover:text-accent transition-colors">
                {word}
              </h2>
              <div className="w-3 h-3 md:w-5 md:h-5 bg-accent rounded-full flex-shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
