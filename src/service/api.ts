const mockData: TProduct[] = [
  {
    id: 1,
    name: "Нямушка",
    type: "с фуа-гра",
    description: "Сказочное заморское яство с рыбой",
    portions: 10,
    promo: "мышь в подарок",
    weight: 0.5,
    image: "./src/assets/Photo.png",
    ingredients: "Печень утки разварная с артишоками.",
    stock: true,
  },

  {
    id: 2,
    name: "Нямушка",
    type: "с рыбой",
    description: "Сказочное заморское яство с рыбой",
    portions: 40,
    promo: "2 мыши в подарок",
    weight: 2,
    image: "./src/assets/Photo.png",
    ingredients: "Головы щучьи с чесноком да свежайшая сёмгушка.",
    stock: true,
  },

  {
    id: 3,
    name: "Нямушка",
    type: "с курой",
    description: "Сказочное заморское яство с рыбой",
    portions: 100,
    promo: "5 мышей в подарок заказчик доволен",
    weight: 5,
    image: "./src/assets/Photo.png",
    ingredients: "Филе из цыплят с трюфелями в бульоне.",
    stock: false,
    cause: "Печалька, с курой закончился.",
  },
];

export const getProducts = async (): Promise<TProduct[]> => {
  await new Promise((r) => setTimeout(r, 500));

  return mockData;
};
