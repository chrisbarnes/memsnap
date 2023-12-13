import { createContext, useContext, useState } from "react";
import type { CardSet, ICardSetContext, ICardSetProviderProps } from "./types";

export const CardSetContext = createContext<ICardSetContext>({
  cardSet: null,
  setCardSet: () => {},
});

export const CardSetProvider = ({ children }: ICardSetProviderProps) => {
  const [cardSet, setCardSet] = useState<CardSet | null>(null);

  return (
    <CardSetContext.Provider value={{ cardSet, setCardSet }}>
      {children}
    </CardSetContext.Provider>
  );
};

export const useCardSet = () => {
  const context = useContext(CardSetContext);

  if (context === undefined) {
    throw new Error("useCardSet must be used within a CardSetProvider");
  }

  return context;
};
