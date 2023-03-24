import { render, screen } from "@testing-library/react";
import MovieList from "../../components/MovieList";
import { manualMock } from "../matchMedia";

jest.mock("firebase/firestore", () => ({
  getDocs: jest.fn(),
  collection: jest.fn(),
}));

describe("MovieList", () => {
  test("renders empty if there are no movie", () => {
    manualMock();
    render(<MovieList movieList={[]} />);
    const emptyMessage = screen.getByText(/No Data/i);
    expect(emptyMessage).toBeInTheDocument();
  });

  test("renders list of movies", () => {
    manualMock();
    const movieList = [
      {
        id: "1",
        title: "Movie 1",
        description: "Description 1",
        url: "https://www.youtube.com/watch?v=BhQQiWGkcD4&ab_channel=FlashbackFM",
        sharedBy: "nghia@abc.com",
      },
      {
        id: "2",
        title: "Movie 2",
        description: "Description 2",
        url: "https://www.youtube.com/watch?v=BhQQiWGkcD4&ab_channel=FlashbackFM",
        sharedBy: "nghia@abc.com",
      },
    ];
    render(<MovieList movieList={movieList} />);
    const movieItems = screen.getAllByTestId("movie-item");
    expect(movieItems).toHaveLength(2);
    expect(screen.getByText("Movie 1")).toBeInTheDocument();
    expect(screen.getByText("Description 2")).toBeInTheDocument();
  });
});
