import { useState } from 'react';
import { useCart } from '../context/CartContext';

const CheckoutPage = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [ordered, setOrdered] = useState(false);

  const placeOrder = () => {
    setOrdered(true);
    clearCart();
  };

  return (
    <section className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-soft">
      <h1 className="text-3xl font-bold">Checkout Summary</h1>
      {!ordered ? (
        <>
          <div className="mt-6 space-y-3">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between border-b border-slate-100 pb-3 text-sm">
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</p>
          <button
            onClick={placeOrder}
            disabled={!items.length}
            className="mt-5 rounded-full bg-slate-900 px-5 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            Place Order
          </button>
        </>
      ) : (
        <p className="mt-6 text-lg text-emerald-600">Order placed successfully. Thank you for shopping with us!</p>
      )}
    </section>
  );
};

export default CheckoutPage;
