import { generateFlashCards, shuffleFlashCards } from "../FlashCards/helpers";
import { useCardSet } from "~/context/CardSetContext";
import { NumberSetCheckbox } from "../Inputs/NumberSetCheckbox/NumberSetCheckbox";
import type { FormEvent } from "react";
import { Button } from "../Button/Button";
import { Checkbox } from "../Inputs/Checkbox/Checkbox";

export const SetBuilder = () => {
  const { setCardSet, cardSet } = useCardSet();
  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    // get form values from event object
    const formData = new FormData(event.target as HTMLFormElement);
    const numbers = formData
      .getAll("numbers")
      .map((number) => parseInt(number.toString()));
    const randomize = formData.get("randomize");
    let cards = generateFlashCards(numbers);

    if (randomize) {
      cards = shuffleFlashCards(cards);
    }

    console.log("randomize", randomize);

    setCardSet({
      cards,
      name: "Multiplication",
      id: 123,
      description: `Multiplication facts: ${numbers.join(", ")}`,
      type: "math",
    });
  };
  const handleSelectAll = () => {
    const checkboxes = document.querySelectorAll<HTMLInputElement>(
      'input[type="checkbox"]'
    );

    checkboxes.forEach((checkbox) => {
      checkbox.checked = true;
    });
  };
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div>
      <h2 className="text-md text-gray-700 dark:text-white font-extrabold mb-4">
        Set Builder
      </h2>
      <h3 className="mb-4 text-md text-gray-700 dark:text-white">
        Current Set: <br />
        {!cardSet?.cards.length
          ? "No cards in set"
          : `${cardSet.cards.length} cards - ${cardSet?.description}`}
      </h3>
      <form className="mb-4" onSubmit={handleFormSubmit} method="POST">
        <p className="mb-4 text-gray-700 dark:text-white">Cards to include:</p>
        <div className="grid grid-cols-4 gap-4 mb-4">
          {numbers.map((number) => (
            <NumberSetCheckbox
              key={number}
              id={`checkbox-${number.toString()}`}
              label={number.toString()}
              name="numbers"
              onChange={() => {}}
              value={number.toString()}
            />
          ))}
        </div>
        <div className="mb-4">
          <Checkbox
            id="randomize"
            label="Randomize"
            name="randomize"
            value="true"
          />
        </div>
        <Button variant="primary" type="submit">
          Build Set
        </Button>
        <Button variant="secondary" onClick={handleSelectAll}>
          Select All
        </Button>
      </form>
    </div>
  );
};
