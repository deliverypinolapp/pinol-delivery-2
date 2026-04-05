export interface User {
  id: string;
  full_name: string;
  email: string;
  phone?: string;
  created_at: string;
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  image_url: string;
  rating: number;
  delivery_time: number;
  minimum_order: number;
  created_at: string;
}

export interface MenuItem {
  id: string;
  restaurant_id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  is_featured: boolean;
  created_at: string;
}

export interface Order {
  id: string;
  user_id: string;
  restaurant_id: string;
  order_number: string;
  status: 'pending' | 'preparing' | 'on_the_way' | 'delivered';
  total_amount: number;
  delivery_address: string;
  delivery_person_name: string;
  delivery_person_phone: string;
  estimated_delivery_time: number;
  created_at: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  menu_item_id: string;
  quantity: number;
  price: number;
  created_at: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  order_index: number;
  created_at: string;
}

