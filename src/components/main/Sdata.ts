export interface SlideData {
  id: number;
  badge: string;
  title: string;
  desc: string;
  cover: string;
  alt: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
}

export const Sdata: SlideData[] = [
  {
    id: 1,
    badge: 'Nueva colección',
    title: 'Tecnología que lleva tu día más lejos',
    desc: 'Descubrí productos pensados para combinar rendimiento, diseño y tecnología en una experiencia única.',
    cover: '/img/products/iphone-inicio.webp',
    alt: 'Productos tecnológicos de última generación',
    primaryAction: {
      label: 'Explorar colección',
      href: '/pages',
    },
    secondaryAction: {
      label: 'Ver productos',
      href: '/shop',
    },
  },

  {
    id: 2,
    badge: 'Oferta exclusiva',
    title: 'Tu estilo. Tu ritmo. Tus zapatillas.',
    desc: 'Encontrá modelos urbanos que combinan comodidad, diseño y personalidad para acompañarte todos los días.',
    cover: '/img/products/nike-air.png',
    alt: 'Zapatillas Nike Air urbanas',
    primaryAction: {
      label: 'Comprar ahora',
      href: '/shop',
    },
    secondaryAction: {
      label: 'Ver ofertas',
      href: '/offers',
    },
  },

  {
    id: 3,
    badge: 'Colección premium',
    title: 'El tiempo también define tu estilo',
    desc: 'Descubrí relojes seleccionados para quienes buscan precisión, elegancia y materiales de primera calidad.',
    cover: '/img/products/apple-watch.webp',
    alt: 'Reloj premium de lujo',
    primaryAction: {
      label: 'Descubrir colección',
      href: '/shop',
    },
    secondaryAction: {
      label: 'Ver relojes',
      href: '/pages',
    },
  },
];

export default Sdata;