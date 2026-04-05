import { Star, Clock } from 'lucide-react';
import { Restaurant } from '../types';
import { useNavigate } from 'react-router-dom';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/restaurant/${restaurant.id}`)}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="h-32 overflow-hidden">
        <img
          src={restaurant.image_url}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-gray-900 mb-1">{restaurant.name}</h3>
        <div className="flex items-center gap-3 text-sm mb-2">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <Clock size={14} />
            <span>{restaurant.delivery_time} min</span>
          </div>
        </div>
        <div className="inline-block bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
          C${restaurant.minimum_order}
        </div>
      </div>
    </div>
  );
}
