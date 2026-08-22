# React Ecommerce

Ecommerce moderno desarrollado con **React, TypeScript, Tailwind CSS y Zustand**, diseñado para ofrecer una experiencia de compra completa, responsive y visualmente cuidada.

El proyecto incluye catálogo de productos, búsqueda, filtros por categoría, favoritos, carrito persistente y un flujo de checkout simulado.

## ✨ Características

* 🛍️ Catálogo de productos responsive.
* 🔎 Búsqueda de productos por nombre.
* 🗂️ Filtrado por categorías.
* ↕️ Ordenamiento por precio y nombre.
* ⚡ Sección de ofertas relámpago.
* 🆕 Sección de nuevos productos.
* ❤️ Lista de favoritos.
* 🛒 Carrito de compras con control de cantidades.
* 💾 Persistencia del carrito y favoritos mediante `localStorage`.
* 📦 Resumen detallado del pedido.
* 💳 Checkout con métodos de pago simulados.
* ✅ Pantalla de confirmación de compra.
* 📱 Diseño responsive para desktop, tablet y móvil.
* ♿ Estados de foco y etiquetas accesibles.
* 🎨 Interfaz moderna basada en Tailwind CSS.
* ⚡ Componentes reutilizables y estado global con Zustand.

## 🛒 Flujo de compra

El proyecto simula un flujo completo de ecommerce:

```text
Explorar productos
       ↓
Agregar al carrito
       ↓
Revisar carrito
       ↓
Continuar compra
       ↓
Completar datos
       ↓
Seleccionar método de pago
       ↓
Procesar pedido
       ↓
Confirmación de compra
```

El checkout es actualmente **una simulación**. No se realizan cargos reales ni se procesan datos bancarios.

## 🧰 Tecnologías

| Tecnología   | Uso                                  |
| ------------ | ------------------------------------ |
| React        | Construcción de la interfaz          |
| TypeScript   | Tipado estático                      |
| Vite         | Entorno de desarrollo y build        |
| Tailwind CSS | Estilos y diseño responsive          |
| Zustand      | Gestión del estado global            |
| React Router | Navegación                           |
| React Slick  | Carruseles                           |
| Font Awesome | Iconografía                          |
| LocalStorage | Persistencia del carrito y favoritos |

## 📁 Estructura del proyecto

```text
src/
├── assets/
│   └── img/
│
├── common/
│   ├── Cart/
│   └── Footer/
│
├── components/
│   ├── announcements/
│   ├── flashDeals/
│   ├── header/
│   ├── main/
│   ├── newArrivals/
│   ├── shop/
│   ├── top/
│   └── wrapper/
│
├── pages/
│   ├── Checkout.tsx
│   ├── OrderSuccess.tsx
│   └── Pages.tsx
│
├── store/
│   ├── cartStore.ts
│   └── productStore.ts
│
├── types/
│   └── index.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

## 🧩 Componentes principales

### Header

El encabezado está compuesto por:

* Barra superior con información y utilidades.
* Logo.
* Buscador.
* Selector de categorías.
* Acceso al perfil.
* Carrito con contador de productos.
* Navegación principal.
* Menú responsive para dispositivos móviles.

### Catálogo

La página principal incluye diferentes secciones:

* Hero principal.
* Flash Deals.
* Categorías destacadas.
* Nuevos productos.
* Tienda.
* Banners promocionales.
* Beneficios de compra.

### Carrito

El carrito permite:

* Agregar productos.
* Aumentar o disminuir cantidades.
* Eliminar productos.
* Ver subtotal y total.
* Persistir los productos aunque se recargue la página.
* Acceder al checkout.

### Checkout

El checkout simula:

* Datos personales.
* Dirección de envío.
* Selección de método de pago.
* Resumen del pedido.
* Procesamiento del pedido.
* Generación de número de orden.

### Confirmación

Al completar la compra se muestra:

* Número de pedido.
* Fecha.
* Cantidad de productos.
* Método de pago.
* Total.
* Datos básicos del comprador.
* Acciones para volver a comprar.

## 🎨 Diseño

El proyecto utiliza una interfaz basada en una estética moderna y minimalista, con:

* Poppins como tipografía principal.
* Paleta azul oscuro, rosa y fondos claros.
* Bordes redondeados.
* Sombras suaves.
* Microinteracciones.
* Transiciones.
* Estados hover y focus.
* Diseño responsive.

### Paleta principal

```text
Primary:    #e94560
Secondary:  #0f3460
Background: #f6f9fc
```

## 🔍 Búsqueda

La barra de búsqueda permite introducir términos y navegar hacia la tienda utilizando parámetros en la URL:

```text
/shop?search=iphone
```

También admite combinar búsqueda y categoría:

```text
/shop?search=iphone&category=phone
```

Esto permite mantener los filtros en la URL y facilita la navegación mediante el historial del navegador.

## 🧠 Gestión del estado

El proyecto utiliza **Zustand** para manejar el estado global.

### Cart Store

Gestiona:

```text
cartItem
wishlist
addToCart()
decreaseQty()
removeFromCart()
clearCart()
toggleWishlist()
removeFromWishlist()
clearWishlist()
```

Además, el estado se persiste mediante `zustand/middleware`.

### Product Store

Gestiona:

```text
flashDeals
shopItems
topCategories
newArrivals
isLoading
hasLoaded
error
```

Esto permite centralizar la información del catálogo y preparar el proyecto para una futura integración con una API.

## ⚙️ Instalación

Cloná el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
```

Entrá al proyecto:

```bash
cd react-ecommerce
```

Instalá las dependencias:

```bash
npm install
```

Iniciá el servidor de desarrollo:

```bash
npm run dev
```

## 📦 Build de producción

Para generar una versión optimizada:

```bash
npm run build
```

Para comprobar localmente el build:

```bash
npm run preview
```

## 🔮 Próximas mejoras

* Integración con una API real de productos.
* Sistema de autenticación y cuentas de usuario.
* Página individual de producto.
* Sistema de stock.
* Checkout conectado a un proveedor de pagos real.
* Gestión real de pedidos.
* Historial de compras.
* Sistema de reseñas.
* Autocompletado y sugerencias en el buscador.
* Paginación o carga progresiva de productos.
* Mejoras adicionales de SEO y rendimiento.

## 📄 Estado del proyecto

Este proyecto se encuentra en desarrollo y funciona actualmente como una **demostración completa de un ecommerce frontend**, incluyendo un flujo de compra simulado.

---

### Autor

Desarrollado como proyecto de práctica y portfolio utilizando tecnologías modernas del ecosistema frontend.

