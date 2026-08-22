import React, { FormEvent, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { CartItem } from '../types';

interface CustomerData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
}

type PaymentMethod = 'card' | 'transfer' | 'cash';

const initialCustomerData: CustomerData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  province: '',
  postalCode: '',
};

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const cartItem = useCartStore((state) => state.cartItem);
  const clearCart = useCartStore((state) => state.clearCart);

  const [customerData, setCustomerData] =
    useState<CustomerData>(initialCustomerData);

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>('card');

  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  const totalItems = cartItem.reduce(
    (total, item) => total + item.qty,
    0
  );

  const subtotal = cartItem.reduce(
    (total, item) => total + Number(item.price) * item.qty,
    0
  );

  const shipping = subtotal >= 100000 ? 0 : 5000;
  const total = subtotal + shipping;

  const formatPrice = (price: number) =>
    price.toLocaleString('es-AR', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

  const updateField = (
    field: keyof CustomerData,
    value: string
  ) => {
    setCustomerData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setIsProcessing(true);

    /*
     * Simulación de procesamiento del pedido.
     * Más adelante este bloque puede reemplazarse
     * por una llamada real a una API.
     */
    await new Promise((resolve) => setTimeout(resolve, 1800));

    const orderNumber = `EC-${Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase()}`;

    const orderData = {
      orderNumber,
      total,
      totalItems,
      paymentMethod,
      customer: customerData,
      createdAt: new Date().toISOString(),
    };

    clearCart();

    navigate('/order-success', {
      replace: true,
      state: orderData,
    });

    setIsProcessing(false);
  };

  /*
   * Evitamos acceder al checkout sin productos.
   */
  if (cartItem.length === 0 && !location.state?.fromSuccess) {
    return (
      <main className="min-h-[70vh] bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-[500px] max-w-3xl flex-col items-center justify-center rounded-3xl bg-white px-6 py-12 text-center shadow-[0_8px_30px_rgba(3,0,71,0.05)]">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-primary">
            <i className="fa-solid fa-cart-shopping text-3xl" />
          </div>

          <h1 className="mt-6 text-2xl font-extrabold text-secondary">
            No hay productos para comprar
          </h1>

          <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
            Tu carrito está vacío. Agregá productos antes de continuar
            con la compra.
          </p>

          <Link
            to="/shop"
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
            "
          >
            Explorar productos
            <i className="fa-solid fa-arrow-right text-xs" />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="mb-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
            Finalizar compra
          </p>

          <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-secondary sm:text-3xl">
            Checkout
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Completá tus datos para confirmar tu pedido.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-6 lg:grid-cols-[1fr_380px]"
        >
          {/* Formulario */}
          <div className="space-y-6">

            {/* Datos personales */}
            <section className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_5px_25px_rgba(3,0,71,0.05)] sm:p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <i className="fa-solid fa-user text-sm" />
                </span>

                <div>
                  <h2 className="text-base font-bold text-secondary">
                    Datos personales
                  </h2>

                  <p className="text-xs text-gray-400">
                    Información de contacto
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <InputField
                  label="Nombre"
                  name="firstName"
                  value={customerData.firstName}
                  onChange={(value) =>
                    updateField('firstName', value)
                  }
                  placeholder="Martín"
                  required
                />

                <InputField
                  label="Apellido"
                  name="lastName"
                  value={customerData.lastName}
                  onChange={(value) =>
                    updateField('lastName', value)
                  }
                  placeholder="Morondo"
                  required
                />

                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  value={customerData.email}
                  onChange={(value) =>
                    updateField('email', value)
                  }
                  placeholder="tu@email.com"
                  required
                />

                <InputField
                  label="Teléfono"
                  name="phone"
                  type="tel"
                  value={customerData.phone}
                  onChange={(value) =>
                    updateField('phone', value)
                  }
                  placeholder="+54 9 11 1234 5678"
                  required
                />
              </div>
            </section>

            {/* Dirección */}
            <section className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_5px_25px_rgba(3,0,71,0.05)] sm:p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <i className="fa-solid fa-location-dot text-sm" />
                </span>

                <div>
                  <h2 className="text-base font-bold text-secondary">
                    Dirección de envío
                  </h2>

                  <p className="text-xs text-gray-400">
                    ¿Dónde entregamos tu pedido?
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <InputField
                    label="Dirección"
                    name="address"
                    value={customerData.address}
                    onChange={(value) =>
                      updateField('address', value)
                    }
                    placeholder="Av. Corrientes 1234"
                    required
                  />
                </div>

                <InputField
                  label="Ciudad"
                  name="city"
                  value={customerData.city}
                  onChange={(value) =>
                    updateField('city', value)
                  }
                  placeholder="Buenos Aires"
                  required
                />

                <InputField
                  label="Provincia"
                  name="province"
                  value={customerData.province}
                  onChange={(value) =>
                    updateField('province', value)
                  }
                  placeholder="Buenos Aires"
                  required
                />

                <InputField
                  label="Código postal"
                  name="postalCode"
                  value={customerData.postalCode}
                  onChange={(value) =>
                    updateField('postalCode', value)
                  }
                  placeholder="1000"
                  required
                />
              </div>
            </section>

            {/* Método de pago */}
            <section className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_5px_25px_rgba(3,0,71,0.05)] sm:p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <i className="fa-solid fa-credit-card text-sm" />
                </span>

                <div>
                  <h2 className="text-base font-bold text-secondary">
                    Método de pago
                  </h2>

                  <p className="text-xs text-gray-400">
                    Esta compra es una simulación
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <PaymentOption
                  value="card"
                  selected={paymentMethod}
                  onChange={setPaymentMethod}
                  icon="fa-credit-card"
                  title="Tarjeta de crédito o débito"
                  description="Simular pago con tarjeta"
                />

                <PaymentOption
                  value="transfer"
                  selected={paymentMethod}
                  onChange={setPaymentMethod}
                  icon="fa-building-columns"
                  title="Transferencia bancaria"
                  description="Simular transferencia"
                />

                <PaymentOption
                  value="cash"
                  selected={paymentMethod}
                  onChange={setPaymentMethod}
                  icon="fa-money-bill-wave"
                  title="Pago en efectivo"
                  description="Simular pago en efectivo"
                />
              </div>
            </section>

            {error && (
              <div
                role="alert"
                className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
              >
                <i className="fa-solid fa-circle-exclamation mr-2" />
                {error}
              </div>
            )}
          </div>

          {/* Resumen */}
          <aside className="h-fit lg:sticky lg:top-28">
            <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_8px_30px_rgba(3,0,71,0.06)] sm:p-6">

              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
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

              <div className="max-h-[280px] space-y-4 overflow-y-auto pr-1">
                {cartItem.map((item: CartItem) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3"
                  >
                    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-background p-2">
                      <img
                        src={item.cover}
                        alt={item.name}
                        className="h-full w-full object-contain"
                      />

                      <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-secondary px-1 text-[9px] font-bold text-white">
                        {item.qty}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <p
                        className="truncate text-sm font-semibold text-secondary"
                        title={item.name}
                      >
                        {item.name}
                      </p>

                      <p className="mt-0.5 text-xs text-gray-400">
                        ${formatPrice(Number(item.price))} c/u
                      </p>
                    </div>

                    <span className="text-sm font-bold text-secondary">
                      $
                      {formatPrice(
                        Number(item.price) * item.qty
                      )}
                    </span>
                  </div>
                ))}
              </div>

              <div className="my-5 h-px bg-black/[0.06]" />

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-medium text-secondary">
                    ${formatPrice(subtotal)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Envío</span>

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

              <div className="flex items-end justify-between gap-4">
                <div>
                  <span className="block text-xs text-gray-400">
                    Total
                  </span>

                  <span className="mt-1 block text-2xl font-extrabold text-secondary">
                    ${formatPrice(total)}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="
                  mt-6 flex w-full
                  items-center justify-center gap-2
                  rounded-xl
                  bg-primary
                  px-5 py-3.5
                  text-sm font-bold text-white
                  shadow-lg shadow-primary/20
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:shadow-primary/30
                  disabled:cursor-not-allowed
                  disabled:opacity-70
                  disabled:hover:translate-y-0
                "
              >
                {isProcessing ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Procesando compra...
                  </>
                ) : (
                  <>
                    Confirmar compra
                    <i className="fa-solid fa-arrow-right text-xs" />
                  </>
                )}
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-gray-400">
                <i className="fa-solid fa-lock text-primary" />
                Simulación de compra segura
              </div>
            </div>
          </aside>
        </form>
      </div>
    </main>
  );
};

/* =========================================================
   Input
   ========================================================= */

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  required = false,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-semibold text-secondary"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        required={required}
        className="
          h-11 w-full
          rounded-xl
          border border-black/10
          bg-background
          px-3
          text-sm text-secondary
          outline-none
          transition-all duration-200
          placeholder:text-gray-400
          focus:border-primary/40
          focus:bg-white
          focus:ring-2
          focus:ring-primary/10
        "
      />
    </div>
  );
};

/* =========================================================
   Método de pago
   ========================================================= */

interface PaymentOptionProps {
  value: PaymentMethod;
  selected: PaymentMethod;
  onChange: (value: PaymentMethod) => void;
  icon: string;
  title: string;
  description: string;
}

const PaymentOption: React.FC<PaymentOptionProps> = ({
  value,
  selected,
  onChange,
  icon,
  title,
  description,
}) => {
  const isSelected = selected === value;

  return (
    <label
      className={`
        flex cursor-pointer items-center gap-3
        rounded-xl
        border
        p-3.5
        transition-all duration-200
        ${
          isSelected
            ? 'border-primary/30 bg-primary/5'
            : 'border-black/[0.06] hover:border-primary/20 hover:bg-background'
        }
      `}
    >
      <input
        type="radio"
        name="paymentMethod"
        value={value}
        checked={isSelected}
        onChange={() => onChange(value)}
        className="sr-only"
      />

      <span
        className={`
          flex h-10 w-10 shrink-0 items-center justify-center
          rounded-xl
          ${
            isSelected
              ? 'bg-primary text-white'
              : 'bg-background text-gray-400'
          }
        `}
      >
        <i className={`fa-solid ${icon} text-sm`} />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-secondary">
          {title}
        </span>

        <span className="mt-0.5 block text-xs text-gray-400">
          {description}
        </span>
      </span>

      <span
        className={`
          flex h-5 w-5 items-center justify-center
          rounded-full border
          ${
            isSelected
              ? 'border-primary bg-primary text-white'
              : 'border-gray-300'
          }
        `}
      >
        {isSelected && (
          <i className="fa-solid fa-check text-[8px]" />
        )}
      </span>
    </label>
  );
};

export default Checkout;