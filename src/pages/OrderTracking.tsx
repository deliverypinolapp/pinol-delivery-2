import { Phone, MapPin, Clock } from 'lucide-react';
import Header from '../components/Header';

export default function OrderTracking() {
  const steps = [
    { id: 1, label: 'Pedido recibido', status: 'completed' },
    { id: 2, label: 'Preparando', status: 'active' },
    { id: 3, label: 'En camino', status: 'pending' },
    { id: 4, label: 'Entregado', status: 'pending' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Pedido en camino" showBack />

      <div className="relative h-64 bg-gradient-to-br from-primary-200 via-primary-100 to-yellow-100 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 400 300">
            <path
              d="M 50 250 Q 150 180 200 150 T 350 50"
              stroke="#16a34a"
              strokeWidth="4"
              fill="none"
              strokeDasharray="8,8"
            />
            <circle cx="50" cy="250" r="8" fill="#16a34a" />
            <circle cx="350" cy="50" r="8" fill="#16a34a" />
          </svg>
        </div>

        <div className="absolute top-4 left-4 bg-primary-700 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
          <Clock size={16} />
          <span className="font-semibold">~5 min</span>
        </div>

        <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <div className="relative">
            <div className="w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center animate-bounce">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-3xl">🛵</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-t-4 border-primary-500 rounded-t-3xl -mt-6 relative z-10 shadow-lg">
        <div className="p-6 space-y-6">
          <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded-r-lg">
            <div className="flex items-start gap-3">
              <MapPin className="text-primary-600 flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Pedido en camino</h3>
                <p className="text-sm text-gray-600">
                  Tu pedido está en camino y llegará pronto a tu domicilio. #3519
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-2xl shadow-md">
              👨‍🍳
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">Joel M.</h4>
              <p className="text-sm text-gray-600">+505 8888-9999</p>
            </div>
            <button className="bg-primary-600 text-white p-4 rounded-full hover:bg-primary-700 transition shadow-md">
              <Phone size={24} />
            </button>
          </div>

          <div className="flex items-center justify-between py-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex-1 flex items-center">
                <div className="flex flex-col items-center relative flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                      step.status === 'completed'
                        ? 'bg-primary-600 text-white'
                        : step.status === 'active'
                        ? 'bg-primary-500 text-white ring-4 ring-primary-200'
                        : 'bg-gray-200 text-gray-400'
                    }`}
                  >
                    {step.status === 'completed' ? '✓' : step.id}
                  </div>
                  <span className="text-xs text-gray-600 mt-2 text-center font-medium">
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 flex-1 -mt-6 transition-all ${
                      step.status === 'completed' ? 'bg-primary-600' : 'bg-gray-200'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>

          <div className="border-t pt-6">
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Comedor Pinolero</h3>
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <span className="text-gray-600 font-medium">1 x</span>
                  <span className="text-gray-900">Baho</span>
                </div>
                <span className="font-semibold text-gray-900">C$180.00</span>
              </div>
            </div>
            <div className="border-t mt-4 pt-4 flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900">Total</span>
              <span className="text-2xl font-bold text-primary-600">C$180.00</span>
            </div>
          </div>

          <button className="w-full bg-primary-600 text-white py-4 rounded-full font-semibold text-lg hover:bg-primary-700 transition shadow-lg hover:shadow-xl transform hover:scale-105">
            Seguir pedido
          </button>
        </div>
      </div>
    </div>
  );
}

