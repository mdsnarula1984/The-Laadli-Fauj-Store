'use client';

import Link from 'next/link';
import Navbar from '../Navbar';
import { products } from '../data';
import { useCart } from '../CartContext';

// Custom SVG for the "Plus" icon to keep performance high
const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

export default function ShopPage() {
  const { addToCart } = useCart();

  const handleQuickAdd = (e: React.MouseEvent, product: any) => {
    // This stops the page from opening the product detail link
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    
    // Optional: You could add a 'toast' or small animation here
    console.log(`${product.name} added to arsenal.`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 py-24">
        {/* --- CENTERED HEADER SECTION --- */}
        <div className="flex flex-col items-center text-center mb-28">
          <span className="text-orange-600 font-black tracking-[0.5em] uppercase text-xs mb-6 block">
            The Arsenal
          </span>
          <h1 className="text-7xl md:text-9xl font-black text-zinc-900 tracking-tighter uppercase italic leading-none">
            The <span className="not-italic">ਹਾਟ</span>
          </h1>
          <div className="w-24 h-[3px] bg-orange-600 my-10"></div>
          <p className="text-xl md:text-2xl text-zinc-400 font-medium leading-relaxed max-w-3xl">
            A curated sanctuary of traditional essentials. Each piece is selected 
            to uphold the dignity and legacy of the Gurmukh.
          </p>
        </div>
        
        {/* --- PRODUCT GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-24">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <Link href={`/shop/${product.id}`}>
                <div className="relative aspect-[3/4] bg-zinc-50 rounded-[3rem] overflow-hidden mb-8 border border-zinc-100 transition-all duration-700 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] group-hover:-translate-y-2">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* --- THE QUICK ADD BUTTON --- */}
                  <button 
                    onClick={(e) => handleQuickAdd(e, product)}
                    className="absolute top-6 right-6 w-14 h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-zinc-900 shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-orange-600 hover:text-white active:scale-90"
                    title="Add to Bag"
                  >
                    <PlusIcon />
                  </button>
                  
                  {/* Luxury Price Tag */}
                  <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl">
                    <span className="text-xl font-black text-zinc-900">₹{product.price}</span>
                  </div>
                </div>
                
                {/* Centered Text Content */}
                <div className="space-y-2 text-center">
                  <h2 className="text-3xl font-black text-zinc-900 uppercase tracking-tighter group-hover:text-orange-600 transition-colors">
                    {product.name}
                  </h2>
                  <p className="text-zinc-400 font-bold uppercase tracking-[0.3em] text-[10px]">
                    Hand-Forged • Limited Edition
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>

      <section className="py-24 border-t border-zinc-100 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-zinc-200 font-black uppercase tracking-[0.8em] text-xs">
            The Gurmukh Store Legacy
          </p>
        </div>
      </section>
    </div>
  );
}