import { ShoppingBag, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const links = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/cart', label: 'Cart' },
  { to: '/about', label: 'About' }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/80 backdrop-blur-lg shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link to="/" className="text-xl font-bold tracking-tight text-slate-900">
          Luma<span className="text-indigo-500">Store</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? 'text-indigo-500' : 'text-slate-600 hover:text-slate-900'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link to="/cart" className="relative rounded-full bg-slate-100 p-2 transition hover:bg-indigo-100">
            <ShoppingBag size={18} />
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 rounded-full bg-indigo-500 px-1.5 py-0.5 text-xs text-white">
                {totalItems}
              </span>
            )}
          </Link>
          <button className="md:hidden" onClick={() => setOpen((prev) => !prev)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col border-t border-slate-100 bg-white px-4 py-3 md:hidden"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100"
            >
              {link.label}
            </NavLink>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
