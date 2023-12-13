import React, { useEffect, useState } from "react";
import { FlashCard } from "./FlashCard";
import { useCardSet } from "~/context/CardSetContext";
import type { IMathFlashCardProps } from "./types";
import { FlashCardControls } from "../FlashCardControls/FlashCardControls";

const CARD_ADVANCE_DELAY = 150;

export const FlashCards = () => {
  const { cardSet } = useCardSet();
  const { cards } = cardSet || { cards: [] };
  const [cardIndex, setCardIndex] = useState<number>(0);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [displayAnswer, setDisplayAnswer] = useState<boolean>(false);
  const [renderedCards] = useState<IMathFlashCardProps[]>(
    cards.map((card) => ({
      ...card,
      displayAnswer: false,
      isCorrect: false,
      wasSeen: false,
    }))
  );
  const next = () => {
    if (cardIndex === cards.length - 1) {
      setIsDone(true);
    }

    setDisplayAnswer(false);

    if (displayAnswer) {
      setTimeout(() => {
        setCardIndex(cardIndex + 1);
      }, CARD_ADVANCE_DELAY);

      return;
    }

    setCardIndex(cardIndex + 1);
  };
  const previous = () => {
    if (cardIndex > 0) {
      setDisplayAnswer(false);

      if (displayAnswer) {
        setTimeout(() => {
          setCardIndex(cardIndex - 1);
        }, CARD_ADVANCE_DELAY);

        return;
      }

      setCardIndex(cardIndex - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isDone) {
        if (event.code === "ArrowRight") {
          next();
        }

        if (event.code === "ArrowLeft" && cardIndex > 0) {
          previous();
        }

        if (event.code === "ArrowUp" || event.code === "ArrowDown") {
          setDisplayAnswer(!displayAnswer);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <React.Fragment>
      {!isDone && (
        <div className="flex flex-col">
          <p
            className="mx-4 text-sm text-slate-500 text-right mb-2"
            data-testid="card-set-status"
          >
            {cardIndex + 1}/{renderedCards.length}
          </p>
          {renderedCards[cardIndex] && (
            <FlashCard
              {...renderedCards[cardIndex]}
              displayAnswer={displayAnswer}
            />
          )}
          <FlashCardControls
            onPrevious={previous}
            onNext={next}
            onShowAnswer={() => setDisplayAnswer(!displayAnswer)}
          />
          <p className="mx-4 mb-2 text-sm dark:text-white">
            Use the left and right arrow keys to go forward and back through the
            cards. Press up or down to flip the card.
          </p>
        </div>
      )}
      {isDone && (
        <p
          className="text-5xl text-gray-900 dark:text-white"
          data-testid="done"
        >
          Done!
        </p>
      )}
    </React.Fragment>
  );
};
