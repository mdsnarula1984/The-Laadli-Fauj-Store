import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Simple setup - no version date to avoid that error we saw earlier!
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const { cart } = await req.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: cart.map((item: any) => ({
        price_data: {
          currency: 'inr',
          product_data: { 
            name: item.name,
            description: 'Official Sikh Store Accessory'
          },
          unit_amount: Math.round(item.price * 100), // Rupees to Paise
        },
        quantity: 1,
      })),
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/success`,
      cancel_url: `${req.headers.get('origin')}/cart`,
    });

    // We send back the DIRECT URL (The Teleportation Link)
    return NextResponse.json({ url: session.url });

  } catch (err: any) {
    console.error("STRIPE ERROR:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}