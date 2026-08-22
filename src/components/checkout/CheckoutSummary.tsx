import React from 'react';
import { CartItem } from '../../types';

interface CheckoutSummaryProps {
  cartItem: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  totalItems: number;
  isProcessing: boolean;
}

const CheckoutSummary: React.FC<CheckoutSummaryProps> = ({
  cartItem,
  subtotal,
  shipping,
  total,
  totalItems,
  isProcessing,
}) => {
  const formatPrice = (price: number) =>
    price.toLocaleString('es-AR', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

  return (
    <aside className="h-fit lg:sticky lg:top-28">
      <div className="
        rounded-2xl
        border border-black/[0.06]
        bg-white
        p-5
        shadow-[0_8px_30px_rgba(3,0,71,0.06)]
        sm:p-6
      ">
        {/* Header */}
        <div className="mb-5 flex items-center gap-3">
          <span className="
            flex h-10 w-10
            items-center justify-center
            rounded-xl
            bg-primary/10
            text-primary
          ">
            <i className="fa-solid fa-receipt text-sm" />
          </span>

          <div>
            <h2 className="text-base font-bold text-secondary">
              Tu pedido
            </h2>

            <p className="text-xs text-gray-400">
              {totalItems}{' '}
              {totalItems === 1 ? 'producto' : 'productos'}
            </p>
          </div>
        </div>

        {/* Productos */}
        <div className="
          max-h-[280px]
          space-y-4
          overflow-y-auto
          pr-1
        ">
          {cartItem.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3"
            >
              <div className="
                relative
                flex h-14 w-14 shrink-0
                items-center justify-center
                rounded-xl
                bg-background
                p-2
              ">
                <img
                  src={item.cover}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />

                <span className="
                  absolute -right-1.5 -top-1.5
                  flex h-5 min-w-5
                  items-center justify-center
                  rounded-full
                  bg-secondary
                  px-1
                  text-[9px] font-bold
                  text-white
                ">
                  {item.qty}
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <p
                  className="
                    truncate
                    text-sm font-semibold
                    text-secondary
                  "
                  title={item.name}
                >
                  {item.name}
                </p>

                <p className="mt-0.5 text-xs text-gray-400">
                  ${formatPrice(Number(item.price))} c/u
                </p>
              </div>

              <span className="shrink-0 text-sm font-bold text-secondary">
                $
                {formatPrice(
                  Number(item.price) * item.qty
                )}
              </span>
            </div>
          ))}
        </div>

        {/* Separador */}
        <div className="my-5 h-px bg-black/[0.06]" />

        {/* Totales */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">
              Subtotal
            </span>

            <span className="font-medium text-secondary">
              ${formatPrice(subtotal)}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">
              Envío
            </span>

            {shipping === 0 ? (
              <span className="font-semibold text-green-600">
                Gratis
              </span>
            ) : (
              <span className="font-medium text-secondary">
                ${formatPrice(shipping)}
              </span>
            )}
          </div>
        </div>

        <div className="my-5 h-px bg-black/[0.06]" />

        {/* Total */}
        <div className="
          flex items-end
          justify-between
          gap-4
          rounded-2xl
          bg-background
          p-4
        ">
          <div>
            <span className="block text-xs text-gray-400">
              Total
            </span>

            <span className="
              mt-1 block
              text-2xl font-extrabold
              tracking-tight
              text-secondary
            ">
              ${formatPrice(total)}
            </span>
          </div>

          <span className="
            rounded-full
            bg-primary/10
            px-2.5 py-1
            text-[10px] font-bold
            uppercase tracking-wider
            text-primary
          ">
            {totalItems}{' '}
            {totalItems === 1 ? 'item' : 'items'}
          </span>
        </div>

        {/* Nota */}
        <div className="
          mt-4
          flex items-center justify-center gap-2
          text-center text-[10px]
          text-gray-400
        ">
          <i className="fa-solid fa-lock text-[9px] text-primary" />
          <span>Simulación de compra segura</span>
        </div>

        {/* Estado de procesamiento */}
        {isProcessing && (
          <div className="
            mt-4
            flex items-center justify-center gap-2
            rounded-xl
            bg-primary/5
            px-4 py-3
            text-xs font-medium
            text-primary
          ">
            <span className="
              h-3.5 w-3.5
              animate-spin
              rounded-full
              border-2
              border-primary/20
              border-t-primary
            />
            Procesando pedido...
          </div>
        )}
      </div>
    </aside>
  );
};

export default CheckoutSummary;