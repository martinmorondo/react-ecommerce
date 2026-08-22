import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';
import { CartItem } from '../../types';

const Cart: React.FC = () => {
  const cartItem = useCartStore((state) => state.cartItem);
  const addToCart = useCartStore((state) => state.addToCart);
  const decreaseQty = useCartStore((state) => state.decreaseQty);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const totalItems = cartItem.reduce(
    (total, item) => total + item.qty,
    0
  );

  const totalPrice = cartItem.reduce(
    (total, item) => total + item.qty * Number(item.price),
    0
  );

  const formatPrice = (price: number) =>
    price.toLocaleString('es-AR', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

  return (
    <section
      aria-labelledby="cart-title"
      className="w-full bg-background py-10 sm:py-12 lg:py-16"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="mb-8">
          <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
            Tu compra
          </p>

          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h1
                id="cart-title"
                className="text-2xl font-extrabold tracking-tight text-secondary sm:text-3xl"
              >
                Mi carrito
              </h1>

              {cartItem.length > 0 && (
                <p className="mt-1 text-sm text-gray-500">
                  {totalItems}{' '}
                  {totalItems === 1
                    ? 'producto seleccionado'
                    : 'productos seleccionados'}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Estado vacío */}
        {cartItem.length === 0 ? (
          <div className="
            flex min-h-[420px]
            flex-col items-center justify-center
            rounded-3xl
            border border-black/[0.06]
            bg-white
            px-6 py-12
            text-center
            shadow-[0_8px_30px_rgba(3,0,71,0.05)]
          ">
            <div className="
              mb-6 flex h-20 w-20
              items-center justify-center
              rounded-3xl
              bg-primary/10
              text-primary
            ">
              <i className="fa-solid fa-cart-shopping text-3xl" />
            </div>

            <h2 className="text-xl font-bold text-secondary">
              Tu carrito está vacío
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
              Todavía no agregaste ningún producto. Explorá nuestra tienda
              y encontrá algo que te guste.
            </p>

            <a
              href="/shop"
              className="
                mt-6 inline-flex items-center gap-2
                rounded-xl
                bg-primary
                px-6 py-3
                text-sm font-semibold text-white
                shadow-lg shadow-primary/20
                transition-all duration-200
                hover:-translate-y-0.5
                hover:shadow-primary/30
                focus:outline-none
                focus:ring-2
                focus:ring-primary/30
              "
            >
              <span>Explorar productos</span>
              <i className="fa-solid fa-arrow-right text-xs" />
            </a>
          </div>
        ) : (
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start">

            {/* Productos */}
            <div className="min-w-0 flex-1 space-y-4">

              {cartItem.map((item: CartItem) => {
                const productQty =
                  Number(item.price) * item.qty;

                return (
                  <article
                    key={item.id}
                    className="
                      relative
                      flex flex-col gap-5
                      rounded-2xl
                      border border-black/[0.06]
                      bg-white
                      p-4
                      shadow-[0_5px_25px_rgba(3,0,71,0.05)]
                      transition-shadow duration-300
                      hover:shadow-[0_10px_30px_rgba(3,0,71,0.08)]
                      sm:p-5
                      md:flex-row
                      md:items-center
                    "
                  >
                    {/* Producto */}
                    <div className="flex min-w-0 flex-1 items-center gap-4 sm:gap-5">
                      {/* Imagen */}
                      <div className="
                        flex h-24 w-24 shrink-0
                        items-center justify-center
                        overflow-hidden
                        rounded-2xl
                        bg-gradient-to-b from-gray-50 to-white
                        p-3
                        sm:h-28 sm:w-28
                      ">
                        <img
                          src={item.cover}
                          alt={item.name}
                          loading="lazy"
                          className="
                            h-full w-full
                            object-contain
                            transition-transform duration-300
                            hover:scale-105
                          "
                        />
                      </div>

                      {/* Información */}
                      <div className="min-w-0 flex-1">
                        <h2
                          className="
                            line-clamp-2
                            text-sm font-semibold leading-5
                            text-secondary
                            sm:text-base
                          "
                          title={item.name}
                        >
                          {item.name}
                        </h2>

                        <p className="mt-1.5 text-xs text-gray-400">
                          Precio unitario
                        </p>

                        <p className="mt-0.5 text-sm font-medium text-gray-600">
                          ${formatPrice(Number(item.price))}
                        </p>

                        {/* Subtotal */}
                        <div className="mt-3 flex items-center gap-2">
                          <span className="text-xs text-gray-400">
                            Subtotal:
                          </span>

                          <strong className="text-sm font-bold text-primary">
                            ${formatPrice(productQty)}
                          </strong>
                        </div>
                      </div>
                    </div>

                    {/* Acciones */}
                    <div className="
                      flex items-center justify-between
                      gap-4
                      border-t border-black/[0.06]
                      pt-4
                      md:border-0 md:pt-0
                    ">
                      {/* Cantidad */}
                      <div
                        className="
                          flex items-center
                          overflow-hidden
                          rounded-xl
                          border border-black/10
                          bg-gray-50
                        "
                        aria-label={`Cantidad de ${item.name}`}
                      >
                        <button
                          type="button"
                          onClick={() => decreaseQty(item)}
                          className="
                            flex h-10 w-10
                            items-center justify-center
                            text-gray-500
                            transition-colors duration-200
                            hover:bg-white
                            hover:text-primary
                            focus:outline-none
                            focus:ring-2
                            focus:ring-primary/30
                          "
                          aria-label={`Disminuir cantidad de ${item.name}`}
                        >
                          <i className="fa-solid fa-minus text-xs" />
                        </button>

                        <span
                          className="
                            flex h-10 min-w-[42px]
                            items-center justify-center
                            border-x border-black/10
                            bg-white
                            px-2
                            text-sm font-bold
                            text-secondary
                          "
                        >
                          {item.qty}
                        </span>

                        <button
                          type="button"
                          onClick={() => addToCart(item)}
                          className="
                            flex h-10 w-10
                            items-center justify-center
                            text-gray-500
                            transition-colors duration-200
                            hover:bg-white
                            hover:text-primary
                            focus:outline-none
                            focus:ring-2
                            focus:ring-primary/30
                          "
                          aria-label={`Aumentar cantidad de ${item.name}`}
                        >
                          <i className="fa-solid fa-plus text-xs" />
                        </button>
                      </div>

                      {/* Eliminar */}
                      <button
                        type="button"
                        onClick={() => removeFromCart(item)}
                        className="
                          flex h-10 w-10
                          shrink-0
                          items-center justify-center
                          rounded-xl
                          text-gray-400
                          transition-all duration-200
                          hover:bg-red-50
                          hover:text-red-500
                          focus:outline-none
                          focus:ring-2
                          focus:ring-red-500/20
                        "
                        aria-label={`Eliminar ${item.name} del carrito`}
                      >
                        <i className="fa-solid fa-trash-can text-sm" />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Resumen */}
            <aside className="w-full lg:w-[340px] lg:shrink-0">
              <div className="
                sticky top-28
                rounded-2xl
                border border-black/[0.06]
                bg-white
                p-5
                shadow-[0_8px_30px_rgba(3,0,71,0.06)]
                sm:p-6
              ">
                <div className="mb-5 flex items-center gap-3">
                  <div className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-xl
                    bg-primary/10
                    text-primary
                  ">
                    <i className="fa-solid fa-receipt text-sm" />
                  </div>

                  <div>
                    <h2 className="text-base font-bold text-secondary">
                      Resumen del pedido
                    </h2>

                    <p className="text-xs text-gray-400">
                      Revisá tu compra antes de continuar
                    </p>
                  </div>
                </div>

                {/* Líneas */}
                <div className="space-y-3 border-b border-black/[0.06] pb-5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">
                      Productos
                    </span>

                    <span className="font-medium text-secondary">
                      {totalItems}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">
                      Subtotal
                    </span>

                    <span className="font-medium text-secondary">
                      ${formatPrice(totalPrice)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">
                      Envío
                    </span>

                    <span className="font-semibold text-green-600">
                      A calcular
                    </span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex items-end justify-between gap-4 py-5">
                  <div>
                    <span className="block text-xs text-gray-400">
                      Total
                    </span>

                    <span className="mt-1 block text-2xl font-extrabold tracking-tight text-secondary">
                      ${formatPrice(totalPrice)}
                    </span>
                  </div>

                  <span className="
                    rounded-full
                    bg-primary/10
                    px-2.5 py-1
                    text-[10px] font-bold uppercase tracking-wider
                    text-primary
                  ">
                    {totalItems}{' '}
                    {totalItems === 1 ? 'item' : 'items'}
                  </span>
                </div>

                {/* Checkout */}
                <Link
                  to="/checkout"
                  className="
                    flex w-full
                    items-center justify-center gap-2
                    rounded-xl
                    bg-primary
                    px-5 py-3.5
                    text-sm font-bold text-white
                    shadow-lg shadow-primary/20
                    transition-all duration-200
                    hover:-translate-y-0.5
                    hover:shadow-primary/30
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-primary/30
                  "
                >
                  Continuar compra
                  <i className="fa-solid fa-arrow-right text-xs" />
                </Link>

                {/* Confianza */}
                <div className="
                  mt-4
                  flex items-center justify-center gap-2
                  text-center text-[10px] text-gray-400
                ">
                  <i className="fa-solid fa-lock text-[9px] text-primary" />
                  <span>Compra segura y protegida</span>
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;