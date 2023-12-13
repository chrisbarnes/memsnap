// tests for Button.tsx
import { render } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders a primary button correctly", () => {
    const { container } = render(<Button variant="primary">Click Me!</Button>);
    expect(container).toMatchSnapshot();
  });
});
