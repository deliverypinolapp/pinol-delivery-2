import { Utensils, Clock, Pill, ShoppingBasket } from 'lucide-react';

interface CategoryCardProps {
  name: string;
  icon: string;
  color: string;
}

const iconMap = {
  'utensils': Utensils,
  'clock': Clock,
  'pill': Pill,
  'shopping-basket': ShoppingBasket,
};

export default function CategoryCard({ name, icon, color }: CategoryCardProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap] || Utensils;

  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer group">
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform"
        style={{ backgroundColor: color }}
      >
        <IconComponent size={28} />
      </div>
      <span className="text-xs font-medium text-gray-700 text-center">{name}</span>
    </div>
  );
}

