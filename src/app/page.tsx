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

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}
