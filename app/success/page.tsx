'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../Navbar';
import { useCart } from '../CartContext';

export default function SuccessPage() {
  const { cart, clearCart } = useCart();

  useEffect(() => {
    if (cart.length > 0) {
      clearCart();
    }
  }, [cart, clearCart]);

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-orange-100">
      <Navbar />
      
      <main className="flex flex-col items-center justify-center pt-24 pb-40 px-6 text-center">
        {/* --- 1. THE SYMBOL --- */}
        <div className="relative mb-12">
          <div className="w-32 h-32 bg-zinc-950 text-orange-500 rounded-full flex items-center justify-center text-5xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] animate-pulse">
            ⚔️
          </div>
          {/* Decorative Ring */}
          <div className="absolute inset-0 border-2 border-orange-600/20 rounded-full scale-125 animate-ping"></div>
        </div>

        {/* --- 2. THE VICTORY HEADER --- */}
        <span className="text-orange-600 font-black tracking-[0.6em] uppercase text-xs mb-6 block">
          Order Authenticated
        </span>
        
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-none mb-8">
          AKAL <span className="italic text-zinc-200">SAHAI.</span>
        </h1>
        
        <p className="mt-4 text-2xl md:text-3xl text-zinc-400 max-w-3xl font-medium leading-tight tracking-tight">
          Your request has reached the <span className="text-zinc-900 italic">Laadli Fauj</span> workshops. 
          The arsenal is being prepared with high-grade steel and ancient Maryada.
        </p>

        {/* --- 3. THE "TYARI BAR TYARI" TRACKER --- */}
        <div className="mt-24 p-12 border border-zinc-100 rounded-[3rem] bg-zinc-50 max-w-2xl w-full relative overflow-hidden group">
          {/* Ghost Text Background */}
          <div className="absolute top-0 right-0 opacity-[0.03] text-8xl font-black -translate-y-4 translate-x-4 italic">
            READY
          </div>

          <div className="flex justify-between items-end mb-6 relative z-10">
            <div className="text-left">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 mb-2">Current Protocol</h2>
              <p className="text-zinc-900 font-black text-3xl tracking-tighter uppercase italic">Tyar Bar Tyar</p>
            </div>
            <div className="text-right">
               <span className="text-zinc-900 font-black text-xl">40%</span>
            </div>
          </div>
          
          <div className="w-full bg-zinc-200 h-4 rounded-full overflow-hidden mb-8">
            <div className="bg-zinc-900 h-full w-[40%] rounded-full transition-all duration-1000"></div>
          </div>
          
          <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-zinc-400">
            <span>Forging</span>
            <span className="text-orange-600">Sharpening</span>
            <span>Dispatch</span>
          </div>
        </div>

        {/* --- 4. THE ACTION BUTTONS --- */}
        <div className="mt-16 flex flex-col md:flex-row gap-6">
          <Link href="/shop">
            <button className="px-12 py-6 bg-zinc-900 text-white rounded-[2rem] text-xl font-black hover:bg-orange-600 transition-all duration-500 shadow-2xl active:scale-95 uppercase tracking-tighter">
              Return to Arsenal
            </button>
          </Link>
          
          <Link href="/">
            <button className="px-12 py-6 bg-white text-zinc-900 border-2 border-zinc-100 rounded-[2rem] text-xl font-black hover:bg-zinc-50 transition-all active:scale-95 uppercase tracking-tighter">
              The Home Base
            </button>
          </Link>
        </div>

        {/* --- 5. THE CLOSING SALOK --- */}
        <p className="mt-24 text-zinc-300 font-bold italic text-xl max-w-lg">
          "The Khalsa is always in a state of Chardikala—ascending glory and eternal readiness."
        </p>
      </main>

      <footer className="py-12 border-t border-zinc-50 text-center">
         <p className="text-zinc-200 font-black uppercase tracking-[1em] text-[10px]">
           Est. 1984 • The Gurmukh Store
         </p>
      </footer>
    </div>
  );
}