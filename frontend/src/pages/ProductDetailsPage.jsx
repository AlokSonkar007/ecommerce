import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const API_URL = 'http://localhost:4000/api/products';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then((res) => res.json())
      .then(setProduct)
      .catch(() => setProduct(null));
  }, [id]);

  if (!product) return <p>Loading product...</p>;

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid gap-8 md:grid-cols-2">
      <div className="overflow-hidden rounded-3xl bg-white p-4 shadow-soft">
        <img src={product.image} alt={product.name} className="h-[420px] w-full rounded-2xl object-cover" />
      </div>
      <div>
        <p className="text-sm uppercase tracking-wider text-indigo-500">{product.category}</p>
        <h1 className="mt-2 text-4xl font-bold">{product.name}</h1>
        <p className="mt-4 text-slate-600">{product.description}</p>
        <p className="mt-6 text-3xl font-bold text-indigo-600">${product.price.toFixed(2)}</p>

        <div className="mt-8 flex items-center gap-4">
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-20 rounded-lg border border-slate-200 px-3 py-2"
          />
          <button
            onClick={() => addToCart(product, quantity)}
            className="rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-indigo-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default ProductDetailsPage;
