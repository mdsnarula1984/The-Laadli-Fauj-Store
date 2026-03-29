'use client';

import Navbar from '../Navbar';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />

      <main className="pt-24 pb-32">
        {/* --- 1. MINIMALIST HERO --- */}
        {/* Changed the closing tag below from </div> to </section> */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-b border-zinc-100">
          <span className="text-orange-600 font-black tracking-[0.5em] uppercase text-xs mb-6 block">
            Our Legacy
          </span>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85]">
            The <span className="italic text-zinc-200">Modern</span> <br />
            Gurmukh.
          </h1>
        </section>

        {/* --- 2. THE STORY (2 PARAGRAPHS) --- */}
        <section className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
             <h2 className="text-3xl font-black uppercase tracking-tighter sticky top-32">
               The Vision <br />
               <span className="text-orange-600">Behind the Haat.</span>
             </h2>
          </div>
          
          <div className="lg:col-span-8 space-y-12">
            <p className="text-2xl md:text-3xl font-medium text-zinc-600 leading-relaxed">
              The Gurmukh Store was born at the intersection of ancient heritage and the fast-paced modern world. We realized that while the spirit of the Khalsa is eternal, the way we carry our identity can evolve. Our mission is to provide the modern Gursikh with essentials that don't just follow tradition, but honor it through superior craftsmanship and contemporary design. 
            </p>
            <p className="text-2xl md:text-3xl font-medium text-zinc-600 leading-relaxed">
              Every item in our arsenal—from the hand-forged Sarbloh Kadas to the precision-stitched Cholas—is sourced directly from master artisans in the heart of Amritsar. We believe that quality is a form of Maryada. By choosing only the finest materials, we ensure that your identity isn't just worn; it is preserved for the next generation of warriors and thinkers.
            </p>
          </div>
        </section>

        {/* --- 3. THE PILLARS (SUGGESTED SECTION) --- */}
        <section className="bg-zinc-950 py-32 rounded-[4rem] mx-4 relative overflow-hidden">
          {/* Subtle Background Icon */}
          <div className="absolute top-0 right-0 opacity-10 translate-x-1/4 -translate-y-1/4">
             <h2 className="text-[20rem] font-black text-white italic">03</h2>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <h2 className="text-white text-5xl md:text-6xl font-black tracking-tighter mb-24 uppercase">
              Our <span className="text-orange-600">Pillars.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="space-y-6">
                <span className="text-orange-500 font-black text-4xl italic">01</span>
                <h3 className="text-white text-2xl font-bold uppercase tracking-widest">Authenticity</h3>
                <p className="text-zinc-500 text-lg">No mass-produced shortcuts. Every piece is vetted for its historical and spiritual accuracy.</p>
              </div>
              <div className="space-y-6">
                <span className="text-orange-500 font-black text-4xl italic">02</span>
                <h3 className="text-white text-2xl font-bold uppercase tracking-widest">Precision</h3>
                <p className="text-zinc-500 text-lg">Modern engineering meets traditional forging. We obsess over the weight, balance, and feel of every Shashtar.</p>
              </div>
              <div className="space-y-6">
                <span className="text-orange-500 font-black text-4xl italic">03</span>
                <h3 className="text-white text-2xl font-bold uppercase tracking-widest">Community</h3>
                <p className="text-zinc-500 text-lg">We aren't just a store; we are a hub for the global Panth, reinvesting in the artisans who keep our skills alive.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 4. CALL TO ACTION --- */}
        <section className="py-40 text-center">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 uppercase">
            Ready to Explore <br /> The <span className="text-orange-600">ਬਾਣਾ?</span>
          </h2>
          <Link href="/shop">
            <button className="bg-zinc-900 text-white px-14 py-6 rounded-full text-xl font-black hover:bg-orange-600 transition-all duration-500 shadow-2xl active:scale-95">
              Enter the Arsenal
            </button>
          </Link>
        </section>
      </main>

      <footer className="py-12 border-t border-zinc-100 text-center">
         <p className="text-zinc-300 font-black uppercase tracking-[0.8em] text-xs">
           The Gurmukh Store • Est. 1984
         </p>
      </footer>
    </div>
  );
}