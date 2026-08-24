# NEXORA.

Ecommerce frontend moderno desarrollado con **React, TypeScript, Tailwind CSS y Zustand**.

NEXORA. está pensado como un proyecto de portfolio enfocado en construir una experiencia de compra moderna, responsive y escalable, con especial atención en **UI/UX, arquitectura frontend, accesibilidad, componentes reutilizables y gestión de estado**.

Actualmente funciona como una demostración frontend de un ecommerce, incluyendo catálogo, búsqueda, filtros, favoritos, carrito persistente y flujo de checkout simulado.

---

## ✨ Características

- 🛍️ Catálogo de productos responsive.
- 🔎 Búsqueda de productos por nombre.
- 🗂️ Filtrado por categorías.
- ↕️ Ordenamiento por precio y nombre.
- ⚡ Sección de ofertas relámpago.
- 🆕 Sección de nuevos productos.
- ⭐ Productos destacados.
- 🎯 Banner promocional destacado.
- ❤️ Lista de favoritos.
- 🛒 Carrito de compras con control de cantidades.
- 💾 Persistencia del carrito y favoritos mediante `localStorage`.
- 📦 Resumen detallado del pedido.
- 💳 Checkout con métodos de pago simulados.
- ✅ Pantalla de confirmación de compra.
- 📱 Diseño responsive para desktop, tablet y móvil.
- ♿ Estados de foco y atributos accesibles.
- 🎨 Sistema visual consistente basado en Tailwind CSS.
- ⚡ Gestión de estado global con Zustand.
- 🧩 Componentes reutilizables y tipados con TypeScript.
- 🔗 Filtros y búsquedas sincronizados con la URL.
- 🗃️ Sistema centralizado de categorías.
- 🛍️ Catálogo de 30 productos de demostración.

---

## 🏷️ Identidad

**NEXORA.** es la identidad visual del ecommerce.

La propuesta está orientada a tecnología, gaming, audio, wearables y productos para el hogar.

### Personalidad

- Moderna
- Tecnológica
- Cercana
- Dinámica
- Confiable

### Paleta principal

```text
Primary:      #e94560
Secondary:    #0f3460
Background:   #f6f9fc
```

### Tipografía

**Poppins**

---

## 🛒 Categorías

Las categorías están centralizadas en:

```text
src/config/categories.ts
```

Actualmente:

- 📱 Celulares
- 🎮 Gaming
- 🎧 Audio
- ⌚ Relojes
- 🕶 Anteojos
- 📺 Smart TV

La configuración se reutiliza entre:

- Buscador.
- Filtros de tienda.
- Productos.
- URLs.
- Etiquetas visuales.

Esto permite evitar duplicación e inconsistencias entre componentes.

---

## 🛍️ Catálogo

El catálogo principal se encuentra en:

```text
src/components/shop/Sdata.ts
```

Actualmente contiene 30 productos de demostración distribuidos entre las distintas categorías.

Las secciones de la home reutilizan productos del catálogo principal:

```text
Sdata
 │
 ├── Flash Deals
 ├── New Arrivals
 └── Productos destacados
```

Esto evita mantener diferentes copias de un mismo producto y facilita futuras migraciones hacia una API.

---

## 🧭 Navegación y búsqueda

La búsqueda utiliza parámetros de URL para mantener los filtros.

Ejemplo:

```text
/shop?search=iphone
```

También se pueden combinar búsqueda y categoría:

```text
/shop?search=iphone&category=phone
```

Las categorías utilizan identificadores estables mientras que la interfaz muestra sus nombres amigables.

Por ejemplo:

**URL:**

```text
category=phone
```

**Interfaz:**

```text
Celulares
```

Esto permite mantener una navegación consistente y compatible con el historial del navegador.

---

## 🏠 Home

La página principal está compuesta por diferentes bloques visuales:

```text
Hero
  ↓
Flash Deals
  ↓
Categorías destacadas
  ↓
Nuevos productos
  ↓
Banner promocional
  ↓
Catálogo
  ↓
Beneficios
```

### Hero

Presentación principal del ecommerce con carrusel de campañas destacadas y llamadas a la acción.

### Flash Deals

Carrusel de productos con descuentos y acciones rápidas.

### Categorías destacadas

Sección orientada al descubrimiento y navegación del catálogo.

### Nuevos productos

Grilla compacta de productos recientemente incorporados.

### Banner promocional

Bloque visual destacado utilizado para campañas comerciales y promociones.

### Beneficios

Sección destinada a comunicar ventajas de compra como:

- Envíos.
- Pagos seguros.
- Confianza.
- Atención personalizada.

---

## 🛒 Carrito

El carrito permite:

- Agregar productos.
- Aumentar cantidades.
- Disminuir cantidades.
- Eliminar productos.
- Limpiar el carrito.
- Consultar subtotal.
- Consultar cantidad total.
- Acceder al checkout.

El estado del carrito y favoritos se mantiene mediante persistencia local.

---

## ❤️ Wishlist

La lista de favoritos permite:

- Agregar productos.
- Quitar productos.
- Alternar favoritos desde las tarjetas.
- Persistir favoritos entre sesiones locales.

---

## 💳 Checkout

El checkout actual es una simulación frontend.

Incluye:

- Datos personales.
- Dirección de envío.
- Método de pago.
- Resumen del pedido.
- Cálculo de subtotal.
- Cálculo de envío.
- Total de compra.
- Procesamiento simulado.

> No se realizan pagos reales ni se procesan datos bancarios reales.

---

## ✅ Confirmación de pedido

Después del checkout se muestra una pantalla de confirmación con:

- Número de pedido.
- Fecha.
- Cantidad de productos.
- Método de pago.
- Cliente.
- Total.
- Acciones para seguir comprando.

---

## 🧠 Arquitectura y estado

El proyecto utiliza Zustand para la gestión del estado global.

### Cart Store

Archivo:

```text
src/store/cartStore.ts
```

Gestiona:

- `cartItem`
- `wishlist`
- `addToCart()`
- `decreaseQty()`
- `removeFromCart()`
- `clearCart()`
- `toggleWishlist()`
- `removeFromWishlist()`
- `clearWishlist()`
- `getTotalItems()`
- `getTotalPrice()`

El estado se persiste mediante:

```text
zustand/middleware
```

### Product Store

Archivo:

```text
src/store/productStore.ts
```

Gestiona el catálogo y sus estados:

- `flashDeals`
- `shopItems`
- `topCategories`
- `newArrivals`
- `isLoading`
- `hasLoaded`
- `error`

Actualmente utiliza datos locales y una simulación de carga para preparar la arquitectura para una futura API.

---

## 📁 Estructura del proyecto

```text
src/
├── assets/
│   └── img/
├── common/
│   ├── Cart/
│   └── Footer/
├── components/
│   ├── announcements/
│   ├── flashDeals/
│   ├── header/
│   ├── main/
│   ├── newArrivals/
│   ├── promo/
│   ├── shop/
│   ├── top/
│   └── wrapper/
├── config/
│   ├── categories.ts
│   └── site.ts
├── pages/
│   ├── Checkout.tsx
│   ├── OrderSuccess.tsx
│   ├── Pages.tsx
│   └── ShopPage.tsx
├── store/
│   ├── cartStore.ts
│   └── productStore.ts
├── types/
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css
```

Los recursos públicos se encuentran en:

```text
public/
└── img/
    └── products/
```

---

## 🧰 Tecnologías

| Tecnología | Uso |
|---|---|
| React | Construcción de la interfaz |
| TypeScript | Tipado estático |
| Vite | Desarrollo y build |
| Tailwind CSS | UI y responsive design |
| Zustand | Estado global |
| React Router | Navegación |
| React Slick | Carruseles |
| Font Awesome | Iconografía |
| LocalStorage | Persistencia local |

---

## ⚙️ Requisitos

- Node.js y npm instalados.

---

## 🚀 Instalación

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

Iniciá el entorno de desarrollo:

```bash
npm run dev
```

---

## 🧪 Calidad del código

El proyecto incluye herramientas para mantener una base de código consistente.

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

### Formateo

```bash
npm run format
```

---

## 📦 Build de producción

Para generar la versión de producción:

```bash
npm run build
```

Para comprobarla localmente:

```bash
npm run preview
```

---

## 🔮 Próximas mejoras

El proyecto está preparado para continuar evolucionando hacia un ecommerce conectado a servicios reales.

### Catálogo

- Integración con API real.
- Página individual de producto.
- Stock.
- Variantes y atributos.
- Productos relacionados.
- Paginación o carga progresiva.

### Usuarios

- Autenticación.
- Registro e inicio de sesión.
- Perfil de usuario.
- Historial de compras.
- Direcciones guardadas.

### Compra

- Backend para pedidos.
- Persistencia real de órdenes.
- Integración con proveedor de pagos.
- Cálculo real de envíos.
- Estados del pedido.

### Experiencia

- Autocompletado del buscador.
- Sugerencias de productos.
- Reseñas y valoraciones.
- Sistema de recomendaciones.
- Mejoras adicionales de SEO.
- Optimización avanzada de imágenes y rendimiento.

---

## 📌 Estado del proyecto

NEXORA. se encuentra actualmente en desarrollo como proyecto de práctica y portfolio.

El frontend cuenta con una experiencia ecommerce funcional a nivel de demostración, incluyendo:

```text
Catálogo
   ↓
Búsqueda
   ↓
Filtros
   ↓
Favoritos
   ↓
Carrito
   ↓
Checkout
   ↓
Confirmación
```

Los pagos, pedidos y datos de usuario todavía funcionan mediante simulaciones locales y no representan un entorno de producción real.

---

## 👨‍💻 Autor

Desarrollado como proyecto de práctica y portfolio para explorar arquitectura frontend, React, TypeScript, UI/UX y desarrollo de ecommerce.

**NEXORA. — Tecnología para tu día a día.**
