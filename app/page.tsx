'use client';

import Navbar from './Navbar';
import Link from 'next/link';
import { products } from './data';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-orange-100 selection:text-orange-600 antialiased">
      <Navbar />

      {/* 1. FULLSCREEN HERO SECTION - Performance Optimized */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-zinc-950">
        
        {/* Background Image - Removed scale animation to save GPU */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://d2057z2iq79qyw.cloudfront.net/uploads/16/page/who-are-nihang-singhs/Nihang-Singh-Baba-Ranjeet-Singh-Holla-Mahalla-2011-niahng-singh-ranjeet-singh-holla-mahalla-2011-20683955-2560-19201.jpg" 
            alt="Nihang Singh Heritage" 
            className="w-full h-full object-cover opacity-60"
            style={{ contentVisibility: 'auto' }} // Tells the browser to only render when visible
          />
          
          {/* Replaced Backdrop-Blur with a High-Performance Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-zinc-950"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl px-6 text-center text-white">
          <div className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.4em] uppercase bg-orange-600 rounded-sm">
            Est. 1699 • Anandpur Sahib
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-8 uppercase italic">
            THE <br />
            <span className="text-orange-500 not-italic">LAADLI FAUJ</span> <br />
            STORE.
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-zinc-300 font-medium leading-relaxed mb-12">
            Authentic Shashtars and essentials for the modern Gursikh. 
            Quality crafted with Maryada in every steel and stitch.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/shop">
              <button className="px-12 py-5 bg-white text-zinc-950 rounded-full text-xl font-black hover:bg-orange-600 hover:text-white transition-colors duration-300 shadow-2xl active:scale-95">
                Explore the Arsenal
              </button>
            </Link>
          </div>
        </div>
        
        {/* Simple Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-black tracking-[0.2em] uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-orange-600 to-transparent"></div>
          </div>
        </div>
      </section>


      {/* 2. ABOUT SECTION */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-zinc-100 rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://dtfbooks.com/wp-content/uploads/2024/08/Silver-Kirpan.jpg" 
                alt="Craftsmanship" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-zinc-900 p-10 rounded-2xl shadow-2xl text-white hidden md:block">
              <p className="text-5xl font-black text-orange-500">100%</p>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mt-2">Authentic Source</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-5xl md:text-6xl font-black mb-10 leading-tight tracking-tighter">
              Honoring Our <br />Heritage.
            </h2>
            <p className="text-xl text-zinc-500 leading-relaxed mb-12">
              The Laadli Fauj Store is a commitment to 
              preserving the martial and spiritual identity of the Khalsa. Every Kirpan, 
              Kada, and Chola is sourced from dedicated artisans who understand the weight of our history.
            </p>
            <button className="flex items-center gap-4 text-lg font-black group">
              View more about us 
              <span className="w-14 h-14 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                →
              </span>
            </button>
          </div>
        </div>
      </section>

{/* 3. FEATURED PRODUCTS SECTION */}
<section className="py-32 bg-zinc-50 px-6 border-y border-zinc-100">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
      <div>
        <h2 className="text-6xl font-black tracking-tighter uppercase italic text-zinc-900">Featured Gear</h2>
        <p className="text-zinc-400 mt-4 text-xl">Handpicked essentials for your collection.</p>
      </div>
      <a href="/shop" className="px-10 py-4 bg-zinc-900 text-white rounded-full font-black hover:bg-orange-600 transition-colors uppercase text-sm tracking-widest">
        View all products
      </a>
    </div>

    {/* Updated to md:grid-cols-4 for 4 products */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {products.map((product) => (
        <div key={product.id} className="group cursor-pointer">
          <a href={`/shop/${product.id}`}>
            <div className="relative aspect-[3/4] bg-white rounded-[2rem] overflow-hidden mb-8 shadow-sm border border-zinc-100">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
                loading="lazy" 
              />
              <div className="absolute bottom-6 left-6 px-6 py-3 bg-white/95 rounded-xl text-lg font-black shadow-lg">
                ₹{product.price}
              </div>
            </div>
            <h3 className="text-2xl font-black group-hover:text-orange-600 transition-colors uppercase tracking-tighter mb-1">
              {product.name}
            </h3>
            <p className="text-zinc-400 font-bold uppercase tracking-[0.2em] text-[10px]">Premium Grade</p>
          </a>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* 4. MODERN FOOTER */}
      <footer className="bg-zinc-900 text-white pt-32 pb-16 px-6 rounded-t-[5rem] -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-4xl font-black tracking-tighter mb-10 italic">THE LAADLI FAUJ STORE.</h2>
              <p className="text-zinc-400 text-xl max-w-sm leading-relaxed font-medium">
                Empowering the next generation of Gursikhs with high-quality 
                traditional essentials.
              </p>
            </div>
            <div>
              <h4 className="font-black uppercase tracking-[0.2em] text-xs mb-10 text-orange-500">Links</h4>
              <ul className="space-y-6 font-bold text-zinc-100 text-lg">
                <li><Link href="/" className="hover:text-orange-500 transition">Home</Link></li>
                <li><Link href="/shop" className="hover:text-orange-500 transition">Arsenal</Link></li>
                <li><Link href="/cart" className="hover:text-orange-500 transition">Bag</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black uppercase tracking-[0.2em] text-xs mb-10 text-orange-500">Connect</h4>
              <ul className="space-y-6 font-bold text-zinc-100 text-lg">
                <li>Anandpur Sahib, PB</li>
                <li>Instagram</li>
                <li>WhatsApp</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-16 border-t border-zinc-800 flex flex-col md:flex-row justify-between gap-8 text-zinc-500 text-sm font-bold uppercase tracking-widest">
            <p>© 2026 The Laadli Fauj Store. Tyar Bar Tyar.</p>
            <div className="flex gap-12">
              <span className="hover:text-white cursor-pointer transition">Privacy</span>
              <span className="hover:text-white cursor-pointer transition">Terms</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}