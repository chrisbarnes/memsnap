import { render } from "@testing-library/react";
import { FlashCard } from "./FlashCard";

describe("FlashCard", () => {
  it("should render properly", async () => {
    const { container } = render(
      <FlashCard
        displayAnswer={false}
        sideA={{ x: 1, y: 2, operand: "+" }}
        sideB={3}
        isCorrect={false}
        wasSeen={false}
        id={1}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("should render the answer", async () => {
    const { container } = render(
      <FlashCard
        displayAnswer={true}
        sideA={{ x: 1, y: 2, operand: "+" }}
        sideB={3}
        isCorrect={false}
        wasSeen={false}
        id={1}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
