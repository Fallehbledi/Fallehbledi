'use client'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutPage from "./OrdedSam";
import convertToSubcurrency  from './convertToSubcurrency'
if(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined){
    throw new Error('process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY  if not defind')  
}
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const page = () => {
    const amount = 49.99;

  return (
    <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(amount),
          currency: "usd"
        }}
      >
    <CheckoutPage/>
      </Elements>
  )
}

export default page