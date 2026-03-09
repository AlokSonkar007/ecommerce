import { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import { categories } from '../data/categories';
import { useCart } from '../context/CartContext';

const API_URL = 'http://localhost:4000/api/products';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 4)))
      .catch(() => setProducts([]));
  }, []);

  return (
    <div className="space-y-16">
      <HeroSection />

      <section>
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold">Featured Products</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold">Categories</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
