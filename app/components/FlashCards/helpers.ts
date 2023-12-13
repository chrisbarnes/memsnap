import type { MathFlashCard } from "./types";

// function that generates flash cards based on the numbers array passed in
// it should generate all possible combinations of the numbers array passed in
// multiplied by numbers 0 - 12
export const generateFlashCards = (numbers: number[]): MathFlashCard[] => {
  const flashCards: MathFlashCard[] = [];

  for (let i = 0; i <= 12; i++) {
    for (let j = 0; j < numbers.length; j++) {
      flashCards.push({
        id: flashCards.length + 1,
        sideA: {
          x: numbers[j],
          y: i,
          operand: "x",
        },
        sideB: numbers[j] * i,
      });
    }
  }

  return flashCards;
};

// export const generateFlashCards = (numbers: number[]): MathFlashCard[] => {
//   const flashCards: MathFlashCard[] = [];

//   for (let i = 0; i < 12; i++) {
//     for (let j = 0; j < numbers.length; j++) {
//       flashCards.push({
//         id: flashCards.length + 1,
//         sideA: {
//           x: numbers[i],
//           y: numbers[j],
//           operand: "x",
//         },
//         sideB: numbers[i] * numbers[j],
//       });
//     }
//   }

//   return flashCards;
// };

// export const generateFlashCards = (): MathFlashCard[] => {
//   const flashCards: MathFlashCard[] = [];

//   for (let i = 0; i <= 12; i++) {
//     for (let j = 0; j <= 12; j++) {
//       flashCards.push({
//         id: flashCards.length + 1,
//         sideA: {
//           x: i,
//           y: j,
//           operand: "x",
//         },
//         sideB: i * j,
//       });
//     }
//   }

//   return flashCards;
// };

// randomize the order of the flash cards
export const shuffleFlashCards = (
  flashCards: MathFlashCard[]
): MathFlashCard[] => {
  return flashCards.sort(() => Math.random() - 0.5);
};
