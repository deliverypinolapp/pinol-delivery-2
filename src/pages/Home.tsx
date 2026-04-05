import { useState, useEffect } from 'react';
import { Search, ShoppingCart } from 'lucide-react';
import CategoryCard from '../components/CategoryCard';
import RestaurantCard from '../components/RestaurantCard';
import { supabase } from '../lib/supabase';
import { Restaurant, Category } from '../types';

export default function Home() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [restaurantsRes, categoriesRes] = await Promise.all([
        supabase.from('restaurants').select('*').order('created_at', { ascending: false }),
        supabase.from('categories').select('*').order('order_index', { ascending: true })
      ]);

      if (restaurantsRes.data) setRestaurants(restaurantsRes.data);
      if (categoriesRes.data) setCategories(categoriesRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">El Buen Sabor</h1>
            </div>
            <button className="relative p-2 hover:bg-gray-100 rounded-full transition">
              <ShoppingCart size={24} className="text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </button>
          </div>

          <div className="mb-3">
            <h2 className="text-xl text-gray-800">Hola, Carlos 👋</h2>
            <p className="text-gray-600">¿Qué te gustaría pedir hoy?</p>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar en PinolApp"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="px-4 py-4 flex gap-4 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              icon={category.icon}
              color={category.color}
            />
          ))}
        </div>
      </header>

      <main className="px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Restaurantes Cercanos</h3>
          <button className="text-primary-600 font-medium text-sm hover:text-primary-700">
            Ver todos
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
