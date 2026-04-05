# PinolApp - Delivery 100% Nicaragüense

Aplicación de delivery de comida nicaragüense construida con React, TypeScript, Vite y Supabase.

## Características

- Pantalla de bienvenida atractiva
- Navegación entre múltiples vistas
- Listado de restaurantes con filtros por categoría
- Vista detallada de restaurantes con menú
- Seguimiento de pedidos en tiempo real
- Interfaz responsive y moderna

## Tecnologías Utilizadas

- React 18
- TypeScript
- Vite
- React Router DOM
- Tailwind CSS
- Supabase (Base de datos y autenticación)
- Lucide React (Iconos)

## Estructura del Proyecto

```
src/
├── components/       # Componentes reutilizables
│   ├── Header.tsx
│   ├── CategoryCard.tsx
│   ├── RestaurantCard.tsx
│   └── MenuItem.tsx
├── pages/           # Páginas de la aplicación
│   ├── Welcome.tsx
│   ├── Home.tsx
│   ├── RestaurantDetail.tsx
│   └── OrderTracking.tsx
├── lib/             # Configuración de servicios
│   └── supabase.ts
├── types/           # Tipos de TypeScript
│   └── index.ts
├── App.tsx          # Componente principal
├── main.tsx         # Punto de entrada
└── index.css        # Estilos globales
```

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
Crear un archivo `.env` basado en `.env.example`:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

5. Construir para producción:
```bash
npm run build
```

## Base de Datos

La aplicación utiliza Supabase con las siguientes tablas:

- `users` - Usuarios de la aplicación
- `restaurants` - Restaurantes disponibles
- `menu_items` - Items del menú de cada restaurante
- `orders` - Pedidos realizados
- `order_items` - Items de cada pedido
- `categories` - Categorías de restaurantes

## Pantallas

1. **Welcome** - Pantalla de bienvenida con opciones para comenzar
2. **Home** - Listado de categorías y restaurantes cercanos
3. **Restaurant Detail** - Detalles del restaurante, ofertas y menú
4. **Order Tracking** - Seguimiento en tiempo real del pedido

## Autor

Desarrollado con ❤️ para Nicaragua
