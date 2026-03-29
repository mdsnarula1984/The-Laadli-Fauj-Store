'use client';

import Link from 'next/link';
import { useCart } from './CartContext';

export default function Navbar() {
  const { cart } = useCart() || { cart: [] };

  return (
    <nav className="flex justify-between items-center px-8 py-6 bg-white/90 backdrop-blur-md border-b border-zinc-100 sticky top-0 z-50">
      {/* Brand Logo */}
      <Link href="/" className="text-2xl font-black text-orange-600 tracking-tighter uppercase italic">
        The <span className="text-zinc-900 not-italic">Laadli Fauj</span> Store
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-10 font-bold text-[11px] uppercase tracking-[0.3em] text-zinc-400">
        <Link href="/" className="hover:text-orange-600 transition-colors">
          Home
        </Link>
        <Link href="/shop" className="hover:text-orange-600 transition-colors">
          Arsenal
        </Link>
        
        {/* THE NEW ABOUT LINK */}
        <Link href="/about" className="hover:text-orange-600 transition-colors">
          About
        </Link>

        {/* The Modern Bag Button */}
        <Link href="/cart" className="bg-zinc-900 px-6 py-2.5 rounded-full flex items-center gap-3 hover:bg-orange-600 transition-all text-white shadow-xl shadow-zinc-200">
          <span className="text-[10px]">Bag</span>
          <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 rounded-full min-w-[22px] text-center border border-white/10">
            {cart.length}
          </span>
        </Link>
      </div>
    </nav>
  );
}