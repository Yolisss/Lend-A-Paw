import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Form from "./components/Form";
import { BrowserRouter } from "react-router-dom";

//skipped because: Fetch is undefined
// Need to mock the api endpoints
// Api endpoint in backed, backend needs to be running in order for the fetch to be running successfully

// The first test checks if the form renders correctly
//by asserting the presence of form elements and the submit button.
describe("AdoptionForm", () => {
  test.skip("renders the form correctly", () => {
    render(
      <BrowserRouter>
        <Form />
      </BrowserRouter>
    );

    expect(screen.getByLabelText("Full Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Reason")).toBeInTheDocument();
    expect(screen.getByText("Submit My Form")).toBeInTheDocument();
  });

  //skipped because: Fetch is undefined
  // Need to mock the api endpoints
  // Api endpoint in backed, backend needs to be running in order for the fetch to be running successfully
  //The second test simulates user input in the form fields
  //and clicks the submit button. After submission, it asserts
  //the expected behavior, such as displaying a "Thank you" message.
  test.skip("submits the form correctly", () => {
    render(
      <BrowserRouter>
        <Form />
      </BrowserRouter>
    );

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
