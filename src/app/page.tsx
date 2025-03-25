"use client"
import { sendGTMEvent } from "@next/third-parties/google";

export default function Home() {
  const handleAddToCart = () => {
    sendGTMEvent({
      event: "add_to_cart",
      product_id: "P001",
      product_name: "Smartphone",
      product_price: 29999,
      currency: "INR",
      quantity: 1
    });
  };

  const handleAddToCart2 = () => {
    sendGTMEvent({
      event: "add_to_cart",
      product_id: "P002",
      product_name: "Laptop",
      product_price: 59999,
      currency: "INR",
      quantity:5})
  }

  

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
      <button className="bg-red-500 hover:bg-reed-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddToCart2}>
        Add to cart2
      </button>
      <h1 className="text-rose-500 font-bold">Hello </h1>
    </div>
  );
}
