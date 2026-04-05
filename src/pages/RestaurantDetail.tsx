import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Clock, CreditCard, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import MenuItem from '../components/MenuItem';
import { supabase } from '../lib/supabase';
import { Restaurant, MenuItem as MenuItemType } from '../types';

export default function RestaurantDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
  const [featuredItems, setFeaturedItems] = useState<MenuItemType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchRestaurantData(id);
    }
  }, [id]);

  const fetchRestaurantData = async (restaurantId: string) => {
    try {
      const [restaurantRes, menuItemsRes] = await Promise.all([
        supabase.from('restaurants').select('*').eq('id', restaurantId).maybeSingle(),
        supabase.from('menu_items').select('*').eq('restaurant_id', restaurantId)
      ]);

      if (restaurantRes.data) setRestaurant(restaurantRes.data);
      if (menuItemsRes.data) {
        const featured = menuItemsRes.data.filter(item => item.is_featured);
        const regular = menuItemsRes.data.filter(item => !item.is_featured);
        setFeaturedItems(featured);
        setMenuItems(regular);
      }
    } catch (error) {
      console.error('Error fetching restaurant data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleOrderItem = () => {
    navigate(`/order-tracking/${id}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Restaurante no encontrado</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title={restaurant.name} showBack showCart cartCount={2} />

      <div className="relative h-64 overflow-hidden">
        <img
          src={restaurant.image_url}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h2 className="text-3xl font-bold text-white mb-2">{restaurant.name}</h2>
          <div className="flex items-center gap-4 text-white">
            <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              <Clock size={16} />
              <span className="text-sm font-medium">{restaurant.delivery_time} min</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              <CreditCard size={16} />
              <span className="text-sm font-medium">C${restaurant.minimum_order}</span>
            </div>
          </div>
        </div>
      </div>

      <main className="p-4 space-y-6">
        {featuredItems.length > 0 && (
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Ofertas del Día</h3>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              {featuredItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{item.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                    <div className="flex items-center gap-3">
                      <span className="line-through text-gray-400 text-sm">C$560</span>
                      <ChevronRight size={16} className="text-gray-400" />
                      <span className="font-bold text-primary-600 text-lg">C${item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Menú</h3>
          <div className="space-y-3">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} onAdd={handleOrderItem} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

