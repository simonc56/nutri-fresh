export type MenuItem = {
  id: number;
  imageSource: string;
  title: string;
  price: number;
  quantity: number;
  isAvailable: boolean;
  isAdvertised: boolean;
};

const EMPTY: MenuItem[] = [];

const SMALL = [
  {
    id: 1,
    imageSource: "/images/burrito-bowl.png",
    title: "Burrito",
    price: 5.297,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: 2,
    imageSource: "/images/water.png",
    title: "Eau",
    price: 3.356,
    quantity: 0,
    isAvailable: true,
    isAdvertised: true,
  },
];

const MEDIUM = [
  {
    id: 1,
    imageSource: "/images/salmon-boulgour.png",
    title: "Boulgour saumon",
    price: 12.598,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: 2,
    imageSource: "/images/salad.png",
    title: "Salade poulet",
    price: 10.367,
    quantity: 0,
    isAvailable: false,
    isAdvertised: false,
  },
  {
    id: 3,
    imageSource: "/images/orange-juice.png",
    title: "Jus d'orange",
    price: 3.568,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: 4,
    imageSource: "/images/kiwi-juice.png",
    title: "Jus de kiwi",
    price: 3.487,
    quantity: 0,
    isAvailable: true,
    isAdvertised: true,
  },
  {
    id: 5,
    imageSource: "/images/water.png",
    title: "Eau",
    price: 3.356,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
];

const LARGE = [
  {
    id: 1,
    imageSource: "/images/salmon-boulgour.png",
    title: "Boulgour saumon",
    price: 12.598,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: 2,
    imageSource: "/images/burrito-bowl.png",
    title: "Burrito",
    price: 14.4985,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: 3,
    imageSource: "/images/salad.png",
    title: "Salade poulet",
    price: 10.367,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: 4,
    imageSource: "/images/orange-juice.png",
    title: "Jus d'orange",
    price: 3.568,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: 5,
    imageSource: "/images/kiwi-juice.png",
    title: "Jus de kiwi",
    price: 3.487,
    quantity: 0,
    isAvailable: true,
    isAdvertised: true,
  },
  {
    id: 6,
    imageSource: "/images/water.png",
    title: "Eau",
    price: 3.356,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: 7,
    imageSource: "/images/fraises.png",
    title: "Fraises 200g",
    price: 5.567,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: 8,
    imageSource: "/images/apple.png",
    title: "Pomme",
    price: 2.1678,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: 9,
    imageSource: "/images/ananas.png",
    title: "1/2 Ananas",
    price: 8.7,
    quantity: 0,
    isAvailable: true,
    isAdvertised: true,
  },
  {
    id: 10,
    imageSource: "/images/peach.png",
    title: "Pêche",
    price: 3.845,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: 11,
    imageSource: "/images/noix.png",
    title: "Noix 100g",
    price: 6.69,
    quantity: 0,
    isAvailable: false,
    isAdvertised: false,
  },
  {
    id: 12,
    imageSource: "/images/mango.png",
    title: "Mangue",
    price: 3.95,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: 13,
    imageSource: "/images/bread.png",
    title: "Pain 400g",
    price: 9.3,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: 14,
    imageSource: "/images/coffee.png",
    title: "Café",
    price: 3.2,
    quantity: 0,
    isAvailable: true,
    isAdvertised: true,
  },
];

export const startMenu = {
  EMPTY,
  SMALL,
  MEDIUM,
  LARGE,
};
