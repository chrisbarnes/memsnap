import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { FlashCardControls } from "./FlashCardControls";

describe("FlashCardControls", () => {
  it("should render", async () => {
    const user = userEvent.setup();
    const onPrevious = jest.fn();
    const onNext = jest.fn();
    const onShowAnswer = jest.fn();

    const { container } = render(
      <FlashCardControls
        onPrevious={onPrevious}
        onNext={onNext}
        onShowAnswer={onShowAnswer}
      />
    );
    expect(container).toMatchSnapshot();

    const previousButton = screen.getByTestId("previous-button");
    const nextButton = screen.getByTestId("next-button");
    const showAnswerButton = screen.getByTestId("show-answer-button");

    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(showAnswerButton).toBeInTheDocument();

    await user.click(previousButton);
    expect(onPrevious).toHaveBeenCalledTimes(1);
    await user.click(nextButton);
    expect(onNext).toHaveBeenCalledTimes(1);
    await user.click(showAnswerButton);
    expect(onShowAnswer).toHaveBeenCalledTimes(1);
  });
});
