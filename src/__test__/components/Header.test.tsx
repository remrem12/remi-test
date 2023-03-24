import { manualMock } from "../matchMedia";
import { render, screen } from "@testing-library/react";
import Header from "../../components/Header";
import "@testing-library/jest-dom";

describe("Header", () => {
  test("should show a h1 with the text 'Funny Movies'", () => {
    manualMock();
    render(<Header />);
    const text = screen.getByText("Funny Movies");
    expect(text).toBeInTheDocument();
    // const email = localStorage.getItem("remi-user");
    // const buttonText = email ? "Logout" : "Login";
    // const logButtonElement = screen.getByText(buttonText);
    // expect(logButtonElement).toBeInTheDocument();
  });
});
