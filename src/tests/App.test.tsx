import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("App Component", () => {
  test("renders the title 'Vite + React'", () => {
    render(<App />);
    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });

  test("initial count is 0 and increments on button click", () => {
    render(<App />);

    const button = screen.getByRole("button", { name: /count is/i });
    expect(button).toHaveTextContent("count is 0");

    fireEvent.click(button);
    expect(button).toHaveTextContent("count is 1");
  });

    test("displays text prompting to edit src/App.tsx", () => {
    render(<App />);
  
    expect(
      screen.getByText((content, element) => {
        return (
          content.startsWith("Edit") &&
          element?.textContent?.includes("Edit src/App.tsx and save to test HMR")
        );
      })
    ).toBeInTheDocument();
  });
});
