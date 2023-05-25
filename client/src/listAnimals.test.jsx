import React from "react";
import { render, screen, waitFor } from "vitest";
import ListAnimals from "./components/ListAnimals";

//The first test checks if the list of animals is rendered
//correctly by asserting the presence of animal names, species, and descriptions.
//Mock the useAuth0 hook
jest.mock("@auth0/auth0-react", () => ({
  useAuth0: () => ({
    isAuthenticated: true,
    loginWithRedirect: jest.fn(),
    logout: jest.fn(),
    user: { name: "John Doe" },
  }),
}));

describe("ListAnimals", () => {
  test("renders the list of animals correctly", async () => {
    // Mock the API response for fetching animals
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              id: 1,
              name: "Fluffy",
              species: "Cat",
              description: "A cute and playful cat",
              photos: [],
            },
            {
              id: 2,
              name: "Buddy",
              species: "Dog",
              description: "A friendly and loyal dog",
              photos: [{ full: "dog.jpg" }],
            },
          ]),
      })
    );

    render(<ListAnimals />);

    // Wait for the API response and the component to update
    await waitFor(() => {
      expect(screen.getByText("Fluffy")).toBeInTheDocument();
      expect(screen.getByText("Cat")).toBeInTheDocument();
      expect(screen.getByText("A cute and playful cat")).toBeInTheDocument();

      expect(screen.getByText("Buddy")).toBeInTheDocument();
      expect(screen.getByText("Dog")).toBeInTheDocument();
      expect(screen.getByText("A friendly and loyal dog")).toBeInTheDocument();
    });

    // Restore the original fetch implementation
    global.fetch.mockRestore();
  });

  //The second test checks if the "Adopt" button is displayed when the user is authenticated.
  test("displays the 'Adopt' button when authenticated", () => {
    render(<ListAnimals />);

    expect(screen.getByRole("link", { name: "Adopt" })).toBeInTheDocument();
  });

  // The third test checks if the "Log In" button is displayed when the user
  // is not authenticated.
  test("displays the 'Log In' button when not authenticated", () => {
    // Mock the useAuth0 hook to return isAuthenticated: false
    jest.mock("@auth0/auth0-react", () => ({
      useAuth0: () => ({
        isAuthenticated: false,
        loginWithRedirect: jest.fn(),
        logout: jest.fn(),
        user: null,
      }),
    }));

    render(<ListAnimals />);

    expect(screen.getByRole("button", { name: "Log In" })).toBeInTheDocument();
  });
});
