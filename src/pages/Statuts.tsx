import { ArrowRight } from "lucide-react";

export default function Statuts() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-ink/30 mb-8 block">DOCUMENTS OFFICIELS</span>
          <h1 className="text-5xl md:text-6xl font-serif mb-8">Statuts de la Fondation</h1>
          <p className="text-ink/50 font-light italic">"JUSTICE, ÉGALITÉ, ESPOIR"</p>
        </div>

        <div className="bg-paper border border-ink/10 rounded-3xl p-8 md:p-16 space-y-12">
          <div className="prose prose-ink max-w-none">
            <h3 className="font-serif text-2xl mb-6">TITRE I : DISPOSITIONS GÉNÉRALES</h3>
            <div className="space-y-8 text-ink/70 font-light leading-relaxed">
              <div>
                <h4 className="font-bold text-ink uppercase text-[10px] tracking-widest mb-2">Article 1 : Création</h4>
                <p>Il est créé en date du 21/04/2022, en République Démocratique du Congo, conformément à la loi n°004/2001, une fondation dénommée «FONDATION SAMUEL ESSENDE», en sigle « FOSAMES ».</p>
              </div>
              <div>
                <h4 className="font-bold text-ink uppercase text-[10px] tracking-widest mb-2">Article 2 : Forme Juridique</h4>
                <p>La FOSAMES est une institution apolitique et sans but lucratif.</p>
              </div>
              <div>
                <h4 className="font-bold text-ink uppercase text-[10px] tracking-widest mb-2">Article 3 : Siège Social</h4>
                <p>Le siège social est situé au N° 13 avenue BUSUJANO, KASA VUBU, Kinshasa, RDC.</p>
              </div>
            </div>

            <h3 className="font-serif text-2xl my-12 pt-12 border-t border-ink/5">TITRE II : OBJET ET OBJECTIFS</h3>
            <div className="space-y-8 text-ink/70 font-light leading-relaxed">
              <div>
                <h4 className="font-bold text-ink uppercase text-[10px] tracking-widest mb-2">Article 6 : Objet Général</h4>
                <p>Contribuer à l'édification d'une société juste, égalitaire et inclusive en RDC.</p>
              </div>
            </div>

            <h3 className="font-serif text-2xl my-12 pt-12 border-t border-ink/5">TITRE III : MEMBRES</h3>
            <div className="space-y-8 text-ink/70 font-light leading-relaxed">
              <div>
                <h4 className="font-bold text-ink uppercase text-[10px] tracking-widest mb-2">Article 8 : Catégories</h4>
                <ul className="list-disc pl-5">
                  <li>Membres fondateurs</li>
                  <li>Membres effectifs</li>
                  <li>Membres d'honneur</li>
                  <li>Membres sympathisants</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-12">
            <button className="bg-ink text-paper px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-2">
              Télécharger le PDF complet <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
