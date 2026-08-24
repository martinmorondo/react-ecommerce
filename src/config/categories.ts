export const ALL_CATEGORY_VALUE = 'all' as const;

export const categories = [
  {
    value: 'phone',
    label: 'Celulares',
    icon: 'fa-mobile-screen-button',
  },
  {
    value: 'gaming',
    label: 'Gaming',
    icon: 'fa-gamepad',
  },
  {
    value: 'headphones',
    label: 'Audio',
    icon: 'fa-headphones',
  },
  {
    value: 'watch',
    label: 'Relojes',
    icon: 'fa-clock',
  },
  {
    value: 'glasses',
    label: 'Anteojos',
    icon: 'fa-glasses',
  },
  {
    value: 'tv',
    label: 'Smart TV',
    icon: 'fa-tv',
  },
] as const;

export type CategoryId =
  (typeof categories)[number]['value'];

export type CategoryOption =
  (typeof categories)[number];

export const getCategoryLabel = (
  category: string
): string => {
  return (
    categories.find(
      (item) => item.value === category
    )?.label ?? category
  );
};