import { MenuItem as MenuItemType } from '../types';

interface MenuItemProps {
  item: MenuItemType;
  onAdd?: () => void;
}

export default function MenuItem({ item, onAdd }: MenuItemProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex gap-3 p-3 cursor-pointer">
      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
        <img
          src={item.image_url}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">{item.name}</h4>
          <p className="text-xs text-gray-600 line-clamp-2">{item.description}</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="font-bold text-gray-900">C${item.price}</span>
          {onAdd && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAdd();
              }}
              className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-primary-700 transition"
            >
              Agregar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

