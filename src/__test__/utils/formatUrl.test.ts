import "@testing-library/jest-dom";
import { formatUrl } from "../../utils/formatUrl";

describe("formatUrl", () => {
  test("returns a YouTube embed URL when given a normal YouTube URL", () => {
    const url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=42s";
    const expectedUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";
    expect(formatUrl(url)).toEqual(expectedUrl);
  });

  test("returns the input URL when typed a YouTube embed URL", () => {
    const url = "https://www.youtube.com/embed/dQw4w9WgXcQ";
    expect(formatUrl(url)).toEqual(url);
  });
});
