import React from 'react';

export interface CustomerData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
}

export type PaymentMethod = 'card' | 'transfer' | 'cash';

interface CheckoutFormProps {
  customerData: CustomerData;
  paymentMethod: PaymentMethod;
  onCustomerDataChange: (
    field: keyof CustomerData,
    value: string
  ) => void;
  onPaymentMethodChange: (method: PaymentMethod) => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  customerData,
  paymentMethod,
  onCustomerDataChange,
  onPaymentMethodChange,
}) => {
  return (
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
              onCustomerDataChange('firstName', value)
            }
            placeholder="Tu nombre"
            required
          />

          <InputField
            label="Apellido"
            name="lastName"
            value={customerData.lastName}
            onChange={(value) =>
              onCustomerDataChange('lastName', value)
            }
            placeholder="Tu apellido"
            required
          />

          <InputField
            label="Email"
            name="email"
            type="email"
            value={customerData.email}
            onChange={(value) =>
              onCustomerDataChange('email', value)
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
              onCustomerDataChange('phone', value)
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
                onCustomerDataChange('address', value)
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
              onCustomerDataChange('city', value)
            }
            placeholder="Buenos Aires"
            required
          />

          <InputField
            label="Provincia"
            name="province"
            value={customerData.province}
            onChange={(value) =>
              onCustomerDataChange('province', value)
            }
            placeholder="Buenos Aires"
            required
          />

          <InputField
            label="Código postal"
            name="postalCode"
            value={customerData.postalCode}
            onChange={(value) =>
              onCustomerDataChange('postalCode', value)
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
              Seleccioná cómo querés simular el pago
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <PaymentOption
            value="card"
            selected={paymentMethod}
            onChange={onPaymentMethodChange}
            icon="fa-credit-card"
            title="Tarjeta de crédito o débito"
            description="Simular pago con tarjeta"
          />

          <PaymentOption
            value="transfer"
            selected={paymentMethod}
            onChange={onPaymentMethodChange}
            icon="fa-building-columns"
            title="Transferencia bancaria"
            description="Simular transferencia"
          />

          <PaymentOption
            value="cash"
            selected={paymentMethod}
            onChange={onPaymentMethodChange}
            icon="fa-money-bill-wave"
            title="Pago en efectivo"
            description="Simular pago en efectivo"
          />
        </div>
      </section>
    </div>
  );
};

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

export default CheckoutForm;