import { idGenerator } from "./../service/id-generator";

export default [
  {
    id: idGenerator(),
    title: "Omelette",
    ingredients: [
      {
        id: idGenerator(),
        name: "Oeuf",
        quantity: 4,
        unit: "pièce",
      },
    ],
  },
  {
    id: idGenerator(),
    title: "Poêlée de pomme de terre chorizo",
    ingredients: [
      {
        id: idGenerator(),
        name: "Pommes de terre",
        quantity: 850,
        unit: "g",
      },
      {
        id: idGenerator(),
        name: "Champignons de Paris",
        quantity: 350,
        unit: "g",
      },
      {
        id: idGenerator(),
        name: "Allumettes de chorizo",
        quantity: 200,
        unit: "g",
      },
      {
        id: idGenerator(),
        name: "Oignon",
        quantity: 1,
        unit: "pièce",
      },
      {
        id: idGenerator(),
        name: "Persil ciselé",
        quantity: 1,
        unit: "pièce",
      },
      {
        id: idGenerator(),
        name: "Gousse d'ail",
        quantity: 1,
        unit: "pièce",
      },
      {
        id: idGenerator(),
        name: "Huile d'olive",
        quantity: 1,
        unit: "pièce",
      },
    ],
  },
  {
    id: idGenerator(),
    title: "Aile de poulet frit",
    ingredients: [
      {
        id: idGenerator(),
        name: "Aile de poulet",
        quantity: 750,
        unit: "g",
      },
    ],
  },
  {
    id: idGenerator(),
    title: "Quiche",
    ingredients: [
      {
        id: idGenerator(),
        name: "Oeufs",
        quantity: 3,
        unit: "pièce",
      },
      {
        id: idGenerator(),
        name: "Crème fraiche",
        quantity: 100,
        unit: "ml",
      },
      {
        id: idGenerator(),
        name: "Lait",
        quantity: 100,
        unit: "ml",
      },
      {
        id: idGenerator(),
        name: "Lardon",
        quantity: 200,
        unit: "g",
      },
    ],
  },
  {
    id: idGenerator(),
    title: "Galettes de chou-fleur au fromage",
    link: "https://www.aux-fourneaux.fr/galettes-de-chou-fleur-au-fromage-48116/",
    ingredients: [
      {
        id: idGenerator(),
        name: "Chou-fleur",
        quantity: 250,
        unit: "g",
      },
      {
        id: idGenerator(),
        name: "oignon",
        quantity: 1,
        unit: "pièce",
      },
      {
        id: idGenerator(),
        name: "Fromage rapé",
        quantity: 100,
        unit: "g",
      },
      {
        id: idGenerator(),
        name: "Farine",
        quantity: 55,
        unit: "g",
      },
      {
        id: idGenerator(),
        name: "Oeuf",
        quantity: 1,
        unit: "pièce",
      },
      {
        id: idGenerator(),
        name: "Crème liquide",
        quantity: 100,
        unit: "ml",
      },
      {
        id: idGenerator(),
        name: "Curcuma",
        quantity: 1,
        unit: "pièce",
      },
      {
        id: idGenerator(),
        name: "Persil",
        quantity: 1,
        unit: "pièce",
      },
    ],
  },
  {
    id: idGenerator(),
    title: "Chausson farci aux épinards",
    ingredients: [
      {
        id: idGenerator(),
        name: "Pâte feuilleté",
        quantity: 1,
        unit: "pièce",
      },
      {
        id: idGenerator(),
        name: "Epinards hachés",
        quantity: 100,
        unit: "g",
      },
      {
        id: idGenerator(),
        name: "Dès de féta",
        quantity: 100,
        unit: "g",
      },
      {
        id: idGenerator(),
        name: "Tranche jambon de Parme",
        quantity: 1,
        unit: "pièce",
      },
    ],
  },
];
