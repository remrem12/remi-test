import { manualMock } from "../matchMedia";
import { render, screen } from "@testing-library/react";
import MovieItem from "../../components/MovieItem";
import "@testing-library/jest-dom";

const movie = {
  title: "Unit test movie title",
  url: "https://www.youtube.com/watch?v=UTOHpcPUerc&ab_channel=WarnerBros.Vietnam",
  sharedBy: "nghia@abc.com",
  sharedAt: 1679632040748,
  description: "Movie's description",
};
describe("Movie", () => {
  test("renders an iframe with the right attributes", () => {
    manualMock();
    render(<MovieItem movie={movie} />);
    const iframe = screen.getByTitle("YouTube video player");
    expect(iframe).toHaveAttribute(
      "src",
      "https://www.youtube.com/watch?v=UTOHpcPUerc&ab_channel=WarnerBros.Vietnam"
    );
    expect(iframe).toHaveAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    );
  });

  test("renders the movie info", () => {
    manualMock();
    render(<MovieItem movie={movie} />);
    const title = screen.getByText("Unit test movie title");
    const sharedBy = screen.getByText("Shared by: nghia@abc.com");
    const sharedAt = screen.getByText("Shared at: 24-3-2023");
    const description = screen.getByText("Movie's description");
    expect(title).toBeInTheDocument();
    expect(sharedBy).toBeInTheDocument();
    expect(sharedAt).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
