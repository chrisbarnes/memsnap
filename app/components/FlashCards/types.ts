export interface MathQuestion {
  x: number;
  y: number;
  operand: string;
}

export interface MathFlashCard {
  id: number;
  sideA: MathQuestion;
  sideB: number;
}

export interface IMathFlashCardProps extends MathFlashCard {
  displayAnswer: boolean;
  isCorrect: boolean;
  wasSeen: boolean;
}

export interface IFlashCardsProps {
  cards: MathFlashCard[];
}
