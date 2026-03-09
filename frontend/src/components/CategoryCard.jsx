import { motion } from 'framer-motion';

const CategoryCard = ({ category }) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.02 }}
    className="group relative h-48 overflow-hidden rounded-2xl shadow-soft"
  >
    <img src={category.image} alt={category.name} className="h-full w-full object-cover transition group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
    <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">{category.name}</h3>
  </motion.div>
);

export default CategoryCard;
