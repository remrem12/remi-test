import { Empty } from "antd";
import { ResponseMovieType } from "../../types/movie";
import MovieItem from "../MovieItem";

const MovieList = ({ movieList }: { movieList: ResponseMovieType[] }) => {
  return (
    <div style={{ width: "70%", margin: "40px auto 0", padding: 30 }}>
      {movieList.length !== 0 ? (
        movieList.map((movie: ResponseMovieType) => (
          <MovieItem key={movie.id} movie={movie} />
        ))
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default MovieList;
