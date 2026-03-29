'use client';
import React from 'react';
import Navbar from '../../Navbar';
import { products } from '../../data';
import { useCart } from '../../CartContext';
import Link from 'next/link';

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { addToCart } = useCart();
  const { id } = React.use(params);
  const product = products.find((p) => p.id === id);

  if (!product) return <div className="p-20 text-center font-black">Finding the Shashtar...</div>;

  // Filter out the current product to show "Related" items
  const relatedProducts = products.filter(p => p.id !== id).slice(0, 4);

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pt-20 pb-40">
        
        {/* --- SECTION 1: MAIN PRODUCT DETAILS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-40">
          
          {/* Left: Huge Gallery (8 columns) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="aspect-[4/5] bg-zinc-50 rounded-[3rem] overflow-hidden border border-zinc-100 shadow-sm">
              <img 
                src={product.image} 
                className="w-full h-full object-cover" 
                alt={product.name}
              />
            </div>
          </div>

          {/* Right: Sticky Info (5 columns) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
            <span className="text-orange-600 font-black tracking-[0.4em] uppercase text-xs mb-4 block">
              Artifact No. {product.id.toUpperCase()}
            </span>
            <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
              {product.name}
            </h1>
            <p className="text-3xl font-bold text-zinc-900 mb-10">₹{product.price}</p>
            
            <div className="h-px bg-zinc-100 w-full mb-10" />
            
            <p className="text-xl text-zinc-500 leading-relaxed mb-12 font-medium">
              {product.description}
            </p>
            
            <button 
              onClick={() => addToCart(product)}
              className="w-full bg-zinc-900 text-white py-6 rounded-[2rem] text-xl font-black hover:bg-orange-600 transition-all active:scale-95 shadow-2xl"
            >
              Add to Arsenal
            </button>

            <div className="mt-8 flex gap-8 justify-center lg:justify-start">
               <span className="text-[10px] font-black uppercase tracking-widest text-zinc-300 italic">Authentic Sourcing</span>
               <span className="text-[10px] font-black uppercase tracking-widest text-zinc-300 italic">Hand-Forged</span>
            </div>
          </div>
        </div>

        {/* --- SECTION 2: RELATED PRODUCTS --- */}
        <section className="border-t border-zinc-100 pt-32">
          <div className="flex flex-col items-center text-center mb-20">
            <span className="text-zinc-300 font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Complete the Set</span>
            <h2 className="text-5xl font-black uppercase tracking-tighter">You might <span className="italic text-orange-600">also</span> like</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {relatedProducts.map((p) => (
              <div key={p.id} className="group">
                <Link href={`/shop/${p.id}`}>
                  <div className="relative aspect-[3/4] bg-zinc-50 rounded-[2.5rem] overflow-hidden mb-6 border border-zinc-100 transition-all group-hover:shadow-xl group-hover:-translate-y-2">
                    <img src={p.image} className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700" alt={p.name} />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter group-hover:text-orange-600 transition-colors text-center">{p.name}</h3>
                  <p className="text-center text-zinc-400 font-bold text-[10px] uppercase tracking-widest mt-1">₹{p.price}</p>
                </Link>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Mini Footer */}
      <footer className="py-12 border-t border-zinc-50 text-center">
         <p className="text-zinc-200 font-black uppercase tracking-[0.8em] text-[10px]">
           The Gurmukh Store Legacy
         </p>
      </footer>
    </div>
  );
}