import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -6 }}
    className="group overflow-hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-soft"
  >
    <div className="overflow-hidden rounded-xl">
      <img
        src={product.image}
        alt={product.name}
        className="h-52 w-full object-cover transition duration-500 group-hover:scale-110"
      />
    </div>
    <div className="mt-4">
      <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
      <p className="mt-1 text-sm text-slate-500">{product.description.slice(0, 70)}...</p>
      <p className="mt-2 text-lg font-bold text-indigo-600">${product.price.toFixed(2)}</p>
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => onAddToCart(product)}
          className="flex-1 rounded-xl bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-indigo-600"
        >
          Add to Cart
        </button>
        <Link
          to={`/product/${product.id}`}
          className="rounded-xl border border-slate-200 px-3 py-2 text-sm transition hover:border-indigo-300 hover:text-indigo-600"
        >
          View Details
        </Link>
      </div>
    </div>
  </motion.article>
);

export default ProductCard;
