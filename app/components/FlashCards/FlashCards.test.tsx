import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { FlashCards } from "./FlashCards";
import { CardSetContext } from "~/context/CardSetContext";
import type { CardSet } from "~/context/types";

describe("FlashCards", () => {
  const mockCardSet: CardSet = {
    cards: [
      {
        sideA: {
          x: 1,
          y: 2,
          operand: "+",
        },
        sideB: 3,
      },
      {
        sideA: {
          x: 2,
          y: 2,
          operand: "+",
        },
        sideB: 4,
      },
    ],
    description: "Mock Card Set",
    id: 3,
    name: "Mock Card Set",
    type: "math",
  };

  it("should render and have keyboard functionality", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <CardSetContext.Provider
        value={{ cardSet: mockCardSet, setCardSet: jest.fn() }}
      >
        <FlashCards />
      </CardSetContext.Provider>
    );
    expect(container).toMatchSnapshot();

    const cardSetStatus = screen.getByTestId("card-set-status");
    expect(cardSetStatus).toHaveTextContent("1/2");

    const sideAX = screen.getByTestId("side-a-x");

    await user.keyboard("{arrowright}");

    expect(sideAX).toHaveTextContent("2");

    await user.keyboard("{arrowleft}");

    expect(sideAX).toHaveTextContent("1");

    await user.keyboard("{arrowup}");

    expect(container).toMatchSnapshot();

    await user.keyboard("{arrowdown}");

    expect(container).toMatchSnapshot();

    await user.keyboard("{arrowright}");
    await user.keyboard("{arrowright}");

    expect(sideAX).not.toBeInTheDocument();

    const done = screen.getByTestId("done");

    expect(done).toBeInTheDocument();
  });

  it("should render and have button functionality", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <CardSetContext.Provider
        value={{ cardSet: mockCardSet, setCardSet: jest.fn() }}
      >
        <FlashCards />
      </CardSetContext.Provider>
    );
    expect(container).toMatchSnapshot();

    const cardSetStatus = screen.getByTestId("card-set-status");
    expect(cardSetStatus).toHaveTextContent("1/2");

    const sideAX = screen.getByTestId("side-a-x");

    const nextButton = screen.getByTestId("next-button");
    const previousButton = screen.getByTestId("previous-button");
    const showAnswerButton = screen.getByTestId("show-answer-button");

    await user.click(nextButton);

    expect(sideAX).toHaveTextContent("2");

    await user.click(previousButton);

    expect(sideAX).toHaveTextContent("1");

    await user.click(showAnswerButton);

    expect(container).toMatchSnapshot();

    await user.click(showAnswerButton);

    expect(container).toMatchSnapshot();

    await user.click(nextButton);
    await user.click(nextButton);

    expect(sideAX).not.toBeInTheDocument();

    const done = screen.getByTestId("done");

    expect(done).toBeInTheDocument();
  });
});
