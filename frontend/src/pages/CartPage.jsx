import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { items, totalPrice, updateQuantity, removeFromCart } = useCart();

  if (!items.length) {
    return (
      <div className="rounded-2xl bg-white p-10 text-center shadow-soft">
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <p className="mt-2 text-slate-600">Add some products to start your premium shopping journey.</p>
        <Link
          to="/shop"
          className="mt-5 inline-block rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white"
        >
          Browse Shop
        </Link>
      </div>
    );
  }

  return (
    <section>
      <h1 className="mb-6 text-3xl font-bold">Shopping Cart</h1>
      <div className="space-y-4">
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
          />
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-white p-6 shadow-soft">
        <h2 className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</h2>
        <Link
          to="/checkout"
          className="mt-4 inline-block rounded-full bg-indigo-600 px-5 py-2 text-sm font-medium text-white"
        >
          Checkout
        </Link>
      </div>
    </section>
  );
};

export default CartPage;
