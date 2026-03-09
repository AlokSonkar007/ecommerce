import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => (
  <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-8 py-24 text-white shadow-soft">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.35),transparent_42%)]" />
    <motion.div
      className="relative max-w-2xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold leading-tight md:text-6xl">Premium shopping, reimagined.</h1>
      <p className="mt-5 text-lg text-indigo-100">
        Explore beautifully crafted products with a seamless and modern shopping experience.
      </p>
      <Link
        to="/shop"
        className="mt-8 inline-block rounded-full bg-white px-6 py-3 font-semibold text-indigo-600 transition hover:-translate-y-0.5 hover:shadow-lg"
      >
        Shop Now
      </Link>
    </motion.div>
  </section>
);

export default HeroSection;
