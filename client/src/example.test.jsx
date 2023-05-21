import MyNavBar from "./components/Navbar";
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

//Test about Navbar
test("Navbar renders correctly", () => {
  const { getByTestId } = render(<MyNavBar />);
  const navbarElement = getByTestId("navbar");
  expect(navbarElement).toBeDefined();
});

test("Check that the button login is in the document", () => {
  render(<MyNavBar />);
  const button = screen.getByText("Log In");
  expect(button).toBeDefined();
});
