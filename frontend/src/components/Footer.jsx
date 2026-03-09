import { Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-3 md:px-8">
        <div>
          <h3 className="text-lg font-bold">LumaStore</h3>
          <p className="mt-2 text-sm text-slate-600">Elegant essentials for a modern lifestyle.</p>
        </div>

        <div className="flex gap-6 text-sm text-slate-600">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="flex items-center gap-3 text-slate-500">
          <Instagram size={18} />
          <Facebook size={18} />
          <Twitter size={18} />
        </div>
      </div>
      <p className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} LumaStore. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
