'use client';

import Navbar from '../Navbar';
import { useCart } from '../CartContext';

// Custom SVG Icons (Performance Optimized)
const Icons = {
  Trash: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
  ),
  Lock: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
  )
};

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum: number, item: any) => sum + item.price, 0);

  const handleCheckout = async () => {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cart }),
      });
      const data = await response.json();
      if (data.url) window.location.href = data.url;
    } catch (err) {
      alert("Checkout error. Check terminal!");
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* --- CENTERED HEADER --- */}
        <div className="text-center mb-20">
          <span className="text-orange-600 font-black tracking-[0.4em] uppercase text-xs mb-4 block">Review Inventory</span>
          <h1 className="text-7xl md:text-8xl font-black tracking-tighter uppercase italic">
            Your <span className="not-italic">Bag</span>
          </h1>
        </div>

        {cart.length === 0 ? (
          <div className="py-32 text-center border-2 border-dashed border-zinc-100 rounded-[3rem]">
            <p className="text-3xl font-bold text-zinc-300 uppercase tracking-tighter">The bag is empty, Singh.</p>
            <a href="/shop" className="mt-8 inline-block bg-zinc-900 text-white px-12 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-orange-600 transition-all">
              Return to Arsenal
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* --- LEFT: ITEM LIST --- */}
            <div className="lg:col-span-8 space-y-8">
              {cart.map((item: any, index: number) => (
                <div key={index} className="flex flex-col md:flex-row items-center gap-8 pb-8 border-b border-zinc-100 group">
                  {/* Image Container */}
                  <div className="w-32 h-40 bg-zinc-50 rounded-2xl overflow-hidden flex-shrink-0 border border-zinc-100">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Item Details */}
                  <div className="flex-grow text-center md:text-left">
                    <h2 className="text-3xl font-black uppercase tracking-tighter leading-none">{item.name}</h2>
                    <p className="text-zinc-400 font-bold uppercase tracking-widest text-[10px] mt-2">Premium Artifact • Amritsar</p>
                    
                    {/* Action Buttons */}
                    <button 
                      onClick={() => removeFromCart(index)}
                      className="mt-6 flex items-center gap-2 text-zinc-300 hover:text-red-600 transition-colors mx-auto md:mx-0 font-bold text-xs uppercase tracking-widest"
                    >
                      <Icons.Trash /> Remove Piece
                    </button>
                  </div>

                  {/* Price */}
                  <div className="text-2xl font-black text-zinc-900">
                    ₹{item.price}
                  </div>
                </div>
              ))}
            </div>

            {/* --- RIGHT: SUMMARY (STICKY) --- */}
            <div className="lg:col-span-4 sticky top-32">
              <div className="bg-zinc-50 p-10 rounded-[2.5rem] border border-zinc-100 shadow-sm">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400 mb-8">Summary</h3>
                
                <div className="space-y-6">
                  <div className="flex justify-between text-zinc-500 font-bold uppercase text-xs tracking-widest">
                    <span>Subtotal</span>
                    <span>₹{total}</span>
                  </div>
                  <div className="flex justify-between text-zinc-500 font-bold uppercase text-xs tracking-widest">
                    <span>Shipping</span>
                    <span className="text-green-600 font-black">Free</span>
                  </div>
                  
                  <div className="h-px bg-zinc-200 my-4" />
                  
                  <div className="flex justify-between items-end">
                    <span className="text-zinc-900 font-black uppercase text-xl tracking-tighter">Total Seva</span>
                    <span className="text-4xl font-black text-zinc-900">₹{total}</span>
                  </div>
                </div>

                <button 
                  onClick={handleCheckout}
                  className="w-full mt-10 bg-zinc-900 text-white py-6 rounded-2xl text-xl font-black hover:bg-orange-600 transition-all active:scale-95 shadow-2xl flex items-center justify-center gap-3"
                >
                  <Icons.Lock /> Proceed to Payment
                </button>

                {/* Trust Badges */}
                <div className="mt-8 flex justify-center gap-6">
                   <div className="flex flex-col items-center opacity-30">
                      <div className="text-[10px] font-black uppercase tracking-widest">SSL Secure</div>
                   </div>
                   <div className="flex flex-col items-center opacity-30">
                      <div className="text-[10px] font-black uppercase tracking-widest">Pure Steel</div>
                   </div>
                </div>
              </div>
            </div>

          </div>
        )}
      </main>
    </div>
  );
}