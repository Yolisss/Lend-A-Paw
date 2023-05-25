import React from "react";
import { render, screen, fireEvent } from "vitest";

import AdoptionForm from "./AdoptionForm";

// The first test checks if the form renders correctly
//by asserting the presence of form elements and the submit button.
describe("AdoptionForm", () => {
  test("renders the form correctly", () => {
    render(<AdoptionForm />);

    expect(screen.getByLabelText("Full Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Reason")).toBeInTheDocument();
    expect(screen.getByText("Submit My Form")).toBeInTheDocument();
  });

  //The second test simulates user input in the form fields
  //and clicks the submit button. After submission, it asserts
  //the expected behavior, such as displaying a "Thank you" message.
  test("submits the form correctly", () => {
    render(<AdoptionForm />);

    const fullnameInput = screen.getByLabelText("Full Name");
    const emailInput = screen.getByLabelText("Email");
    const reasonInput = screen.getByLabelText("Reason");
    const submitButton = screen.getByText("Submit My Form");

    fireEvent.change(fullnameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(reasonInput, { target: { value: "I love pets!" } });

    fireEvent.click(submitButton);

    // Assert the expected behavior after form submission
    // For example, you can check if a "Thank you" message is displayed
    expect(
      screen.getByText("Thank you for submitting the form!")
    ).toBeInTheDocument();
  });
});
