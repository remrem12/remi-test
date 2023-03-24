import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ShareForm from "../../components/ShareForm";
import { manualMock } from "../matchMedia";

describe("ShareForm", () => {
  test("should form reveive correct value", () => {
    manualMock();
    render(
      <BrowserRouter>
        <ShareForm />
      </BrowserRouter>
    );
    const titleField = screen.getByLabelText("Movie Title");
    const urlField = screen.getByLabelText("Youtube URL");
    const descriptionField = screen.getByLabelText("Description");

    fireEvent.change(titleField, { target: { value: "Test Title" } });
    fireEvent.change(urlField, {
      target: { value: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    });
    fireEvent.change(descriptionField, {
      target: { value: "Test Description" },
    });
    expect(titleField).toHaveValue("Test Title");
    expect(urlField).toHaveValue("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    expect(descriptionField).toHaveValue("Test Description");
  });
});
