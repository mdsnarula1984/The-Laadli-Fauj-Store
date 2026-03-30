'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from './CartContext';

// Custom SVGs for Mobile Toggle
const Icons = {
  Menu: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
  ),
  X: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
  )
};

export default function Navbar() {
  const { cart } = useCart() || { cart: [] };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        
        {/* Brand Logo */}
        <Link href="/" className="text-xl md:text-2xl font-black text-orange-600 tracking-tighter uppercase italic">
          The <span className="text-zinc-900 not-italic">Gurmukh</span> Store
        </Link>

        {/* --- DESKTOP NAVIGATION --- */}
        <div className="hidden md:flex items-center gap-10 font-bold text-[11px] uppercase tracking-[0.3em] text-zinc-400">
          <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
          <Link href="/shop" className="hover:text-orange-600 transition-colors">Arsenal</Link>
          <Link href="/about" className="hover:text-orange-600 transition-colors">About</Link>
          
          <Link href="/cart" className="bg-zinc-900 px-6 py-2.5 rounded-full flex items-center gap-3 hover:bg-orange-600 transition-all text-white shadow-xl">
            <span className="text-[10px]">Bag</span>
            <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 rounded-full min-w-[22px] text-center">
              {cart.length}
            </span>
          </Link>
        </div>

        {/* --- MOBILE TOGGLE & BAG --- */}
        <div className="flex md:hidden items-center gap-4">
          <Link href="/cart" className="relative p-2 text-zinc-900">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            <span className="absolute top-0 right-0 bg-orange-600 text-white text-[9px] font-black h-4 w-4 rounded-full flex items-center justify-center">
              {cart.length}
            </span>
          </Link>
          <button onClick={toggleMenu} className="text-zinc-900 p-1">
            {isMenuOpen ? <Icons.X /> : <Icons.Menu />}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div className={`fixed inset-0 top-[73px] bg-white z-[90] transition-transform duration-500 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full gap-12 text-center">
          <Link href="/" onClick={toggleMenu} className="text-4xl font-black uppercase tracking-tighter text-zinc-900">Home</Link>
          <Link href="/shop" onClick={toggleMenu} className="text-4xl font-black uppercase tracking-tighter text-zinc-900">Arsenal</Link>
          <Link href="/about" onClick={toggleMenu} className="text-4xl font-black uppercase tracking-tighter text-zinc-900">About</Link>
          
          <div className="pt-8 border-t border-zinc-100 w-24 mx-auto">
             <p className="text-[10px] font-black text-orange-600 tracking-widest uppercase">Laadli Fauj</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
