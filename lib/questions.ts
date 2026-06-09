export interface Question {
  d: "easy" | "medium" | "hard";
  q: string;
  o: [string, string, string, string];
  c: 0 | 1 | 2 | 3;
}

export const SET_A: Question[] = [
  {
    d: "easy",
    q: "What is Walter White's profession at the very start of Breaking Bad?",
    o: ["Chemistry Teacher", "Meth Dealer", "Car Wash Worker", "School Principal"],
    c: 0,
  },
  {
    d: "easy",
    q: "What is Walter White's infamous drug-lord alias?",
    o: ["The Cook", "Blue Sky", "Heisenberg", "Danger Man"],
    c: 2,
  },
  {
    d: "easy",
    q: "What distinctive color is Walter and Jesse's premium methamphetamine?",
    o: ["White", "Red", "Yellow", "Blue"],
    c: 3,
  },
  {
    d: "easy",
    q: "What is the name of Walter's DEA-agent brother-in-law?",
    o: ["Mike Ehrmantraut", "Hank Schrader", "Saul Goodman", "Tuco Salamanca"],
    c: 1,
  },
  {
    d: "medium",
    q: "What fast food chain serves as the front for Gus Fring's drug operation?",
    o: ["Los Pollos Hermanos", "Chicken Brothers", "Pollos Amigos", "El Pollo Loco"],
    c: 0,
  },
  {
    d: "medium",
    q: "What is Jesse Pinkman's street cook name?",
    o: ["Cap'n Cook", "Blue Flame", "The Pinkman", "The Chemist"],
    c: 0,
  },
  {
    d: "medium",
    q: "Who is the crooked lawyer Walter and Jesse use throughout the series?",
    o: ["Howard Hamlin", "Kim Wexler", "Saul Goodman", "Chuck McGill"],
    c: 2,
  },
  {
    d: "medium",
    q: "What is the name of Jesse's girlfriend who dies of a heroin overdose?",
    o: ["Andrea Cantillo", "Lydia Rodarte-Quayle", "Marie Schrader", "Jane Margolis"],
    c: 3,
  },
  {
    d: "hard",
    q: "What dangerous acid does Walter White use to dissolve bodies in a bathtub?",
    o: ["Sulfuric Acid", "Hydrochloric Acid", "Hydrofluoric Acid", "Nitric Acid"],
    c: 2,
  },
  {
    d: "hard",
    q: "What is the name of the neo-Nazi gang leader responsible for Hank Schrader's death?",
    o: ["Todd Alquist", "Jack Welker", "Kenny", "Lyle"],
    c: 1,
  },
];

export const SET_B: Question[] = [
  {
    d: "easy",
    q: "In which New Mexico city does Breaking Bad primarily take place?",
    o: ["Phoenix", "Albuquerque", "El Paso", "Santa Fe"],
    c: 1,
  },
  {
    d: "easy",
    q: "What is the name of Walter White's wife?",
    o: ["Marie", "Kim", "Skyler", "Jane"],
    c: 2,
  },
  {
    d: "easy",
    q: "What unusual vehicle does Walter White drive at the start of the series?",
    o: ["1990 Pontiac Aztek", "2004 Toyota Camry", "1998 Honda Civic", "2002 Ford Explorer"],
    c: 0,
  },
  {
    d: "easy",
    q: "Jesse Pinkman was once a student of Walter White's in which subject?",
    o: ["Biology", "Physics", "Chemistry", "Mathematics"],
    c: 2,
  },
  {
    d: "medium",
    q: "What is the street name for Walter and Jesse's signature blue meth?",
    o: ["Crystal", "Glass", "Blue Magic", "Sky Blue"],
    c: 2,
  },
  {
    d: "medium",
    q: "Who does Walter White secretly poison to manipulate Jesse emotionally?",
    o: ["Brock Cantillo", "Jesse Pinkman", "Mike Ehrmantraut", "Hank Schrader"],
    c: 0,
  },
  {
    d: "medium",
    q: "What is Gus Fring's actual country of origin?",
    o: ["Mexico", "Chile", "Peru", "Colombia"],
    c: 1,
  },
  {
    d: "medium",
    q: "What is the name of Mike Ehrmantraut's beloved granddaughter?",
    o: ["Kaylee", "Emily", "Sarah", "Madison"],
    c: 0,
  },
  {
    d: "hard",
    q: "What purity percentage does Walter claim to achieve with his blue meth?",
    o: ["76%", "89%", "96%", "99.1%"],
    c: 3,
  },
  {
    d: "hard",
    q: "In which season does Walter deliver the iconic 'I am the one who knocks' speech?",
    o: ["Season 2", "Season 3", "Season 4", "Season 5"],
    c: 2,
  },
];
