export interface CardSet {
  id: number;
  name: string;
  description: string;
  cards: any[];
  type: string;
}

export interface ICardSetContext {
  cardSet: CardSet | null;
  setCardSet: (cardSet: CardSet) => void;
}

export interface ICardSetProviderProps {
  children: React.ReactNode;
}
