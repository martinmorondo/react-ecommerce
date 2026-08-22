import React from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';

interface OrderSuccessState {
  orderNumber: string;
  total: number;
  totalItems: number;
  paymentMethod: 'card' | 'transfer' | 'cash';
  customer: {
    firstName: string;
    lastName: string;
    email: string;
  };
  createdAt: string;
}

const paymentLabels = {
  card: 'Tarjeta de crédito o débito',
  transfer: 'Transferencia bancaria',
  cash: 'Pago en efectivo',
};

const OrderSuccess: React.FC = () => {
  const location = useLocation();

  const order = location.state as OrderSuccessState | null;

  /*
   * Si el usuario entra directamente a /order-success
   * sin completar una compra, volvemos al inicio.
   */
  if (!order?.orderNumber) {
    return <Navigate to="/" replace />;
  }

  const formatPrice = (price: number) =>
    price.toLocaleString('es-AR', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

  const formattedDate = new Date(
    order.createdAt
  ).toLocaleDateString('es-AR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <main className="min-h-[75vh] bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">

        {/* Éxito */}
        <div className="
          overflow-hidden
          rounded-3xl
          border border-black/[0.06]
          bg-white
          shadow-[0_12px_40px_rgba(3,0,71,0.08)]
        ">
          {/* Cabecera */}
          <div className="
            relative
            overflow-hidden
            bg-secondary
            px-6 py-10
            text-center
            sm:px-10
          ">
            <div className="
              absolute right-0 top-0
              h-40 w-40
              rounded-full
              bg-primary/20
              blur-3xl
            " />

            <div className="
              relative z-10
              mx-auto flex h-20 w-20
              items-center justify-center
              rounded-full
              bg-primary
              text-white
              shadow-[0_0_0_10px_rgba(233,69,96,0.12)]
            ">
              <i className="fa-solid fa-check text-3xl" />
            </div>

            <p className="
              relative z-10
              mt-6
              text-[10px] font-bold
              uppercase tracking-[0.18em]
              text-primary
            ">
              Compra confirmada
            </p>

            <h1 className="
              relative z-10
              mt-2
              text-2xl font-extrabold
              tracking-tight
              text-white
              sm:text-3xl
            ">
              ¡Gracias por tu compra!
            </h1>

            <p className="
              relative z-10
              mx-auto mt-3
              max-w-md
              text-sm leading-6
              text-white/60
            ">
              Tu pedido fue procesado correctamente. Esta es una simulación
              del proceso de compra.
            </p>
          </div>

          {/* Información */}
          <div className="p-6 sm:p-8">

            {/* Pedido */}
            <div className="
              flex flex-col gap-3
              rounded-2xl
              border border-primary/10
              bg-primary/5
              p-4
              sm:flex-row sm:items-center sm:justify-between
            ">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-primary">
                  Número de pedido
                </span>

                <strong className="mt-1 block text-lg font-extrabold tracking-wide text-secondary">
                  #{order.orderNumber}
                </strong>
              </div>

              <div className="text-left sm:text-right">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Fecha
                </span>

                <span className="mt-1 block text-sm font-medium capitalize text-secondary">
                  {formattedDate}
                </span>
              </div>
            </div>

            {/* Resumen */}
            <div className="mt-6">
              <h2 className="text-base font-bold text-secondary">
                Resumen de tu compra
              </h2>

              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">
                    Productos
                  </span>

                  <span className="font-medium text-secondary">
                    {order.totalItems}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">
                    Método de pago
                  </span>

                  <span className="max-w-[55%] text-right font-medium text-secondary">
                    {paymentLabels[order.paymentMethod]}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">
                    Cliente
                  </span>

                  <span className="font-medium text-secondary">
                    {order.customer.firstName}{' '}
                    {order.customer.lastName}
                  </span>
                </div>
              </div>
            </div>

            {/* Total */}
            <div className="my-6 h-px bg-black/[0.06]" />

            <div className="
              flex items-end justify-between
              rounded-2xl
              bg-background
              p-4
            ">
              <div>
                <span className="block text-xs text-gray-400">
                  Total pagado
                </span>

                <strong className="mt-1 block text-2xl font-extrabold text-secondary">
                  ${formatPrice(order.total)}
                </strong>
              </div>

              <span className="
                flex items-center gap-1.5
                rounded-full
                bg-green-50
                px-3 py-1.5
                text-[10px] font-bold
                uppercase tracking-wider
                text-green-600
              ">
                <i className="fa-solid fa-circle-check" />
                Confirmado
              </span>
            </div>

            {/* Email */}
            <div className="
              mt-5 flex items-start gap-3
              rounded-xl
              border border-black/[0.06]
              p-4
            ">
              <span className="
                flex h-9 w-9 shrink-0
                items-center justify-center
                rounded-xl
                bg-primary/10
                text-primary
              ">
                <i className="fa-solid fa-envelope text-xs" />
              </span>

              <div>
                <p className="text-xs font-semibold text-secondary">
                  Confirmación
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-400">
                  En una compra real recibirías la confirmación en{' '}
                  <strong className="font-medium text-gray-600">
                    {order.customer.email}
                  </strong>
                  .
                </p>
              </div>
            </div>

            {/* Acciones */}
            <div className="
              mt-6 flex flex-col gap-3
              sm:flex-row
            ">
              <Link
                to="/shop"
                className="
                  flex flex-1
                  items-center justify-center gap-2
                  rounded-xl
                  bg-primary
                  px-5 py-3
                  text-sm font-semibold text-white
                  shadow-lg shadow-primary/20
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:shadow-primary/30
                "
              >
                Seguir comprando
                <i className="fa-solid fa-arrow-right text-xs" />
              </Link>

              <Link
                to="/"
                className="
                  flex flex-1
                  items-center justify-center
                  rounded-xl
                  border border-black/10
                  bg-white
                  px-5 py-3
                  text-sm font-semibold
                  text-secondary
                  transition-all duration-200
                  hover:border-primary/20
                  hover:bg-background
                "
              >
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>

        {/* Nota */}
        <p className="
          mt-5
          text-center
          text-[10px]
          leading-5
          text-gray-400
        ">
          Este checkout es una simulación. No se realizó ningún cargo
          real ni se procesaron datos bancarios.
        </p>
      </div>
    </main>
  );
};

export default OrderSuccess;