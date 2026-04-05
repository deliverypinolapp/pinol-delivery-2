import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-600 via-primary-500 to-yellow-400 flex flex-col items-center justify-between p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIxLjUiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-30"></div>

      <div className="flex-1 flex items-center justify-center z-10">
        <div className="text-center">
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto bg-gradient-to-br from-red-500 to-yellow-500 rounded-3xl shadow-2xl transform rotate-6 flex items-center justify-center">
              <div className="w-44 h-44 bg-gradient-to-br from-red-600 to-yellow-600 rounded-3xl transform -rotate-12 flex items-center justify-center shadow-xl">
                <div className="text-6xl">🛍️</div>
              </div>
            </div>
          </div>

          <div className="mb-2">
            <h1 className="text-6xl font-bold text-white mb-2">
              Pinol<span className="text-yellow-300">App</span>
            </h1>
          </div>
          <p className="text-white text-lg font-medium tracking-wide">
            Delivery 100% Nicaragüense
          </p>
        </div>
      </div>

      <div className="w-full max-w-md space-y-3 z-10">
        <button
          onClick={() => navigate('/home')}
          className="w-full bg-white text-primary-700 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
        >
          Comienza a pedir
          <ArrowRight size={24} />
        </button>

        <button
          onClick={() => navigate('/home')}
          className="w-full bg-transparent border-2 border-white text-white py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-700 transition-all duration-200"
        >
          Iniciar sesión
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-yellow-200/30 to-transparent pointer-events-none"></div>
    </div>
  );
}

