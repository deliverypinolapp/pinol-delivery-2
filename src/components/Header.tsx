import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  showCart?: boolean;
  cartCount?: number;
}

export default function Header({ title, showBack = false, showCart = false, cartCount = 0 }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="bg-primary-700 text-white px-4 py-4 flex items-center justify-between sticky top-0 z-50 shadow-md">
      <div className="flex items-center gap-3 flex-1">
        {showBack && (
          <button onClick={() => navigate(-1)} className="p-1 hover:bg-primary-600 rounded-full transition">
            <ArrowLeft size={24} />
          </button>
        )}
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>
      {showCart && (
        <button className="relative p-2 hover:bg-primary-600 rounded-full transition">
          <ShoppingCart size={24} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      )}
    </header>
  );
}

