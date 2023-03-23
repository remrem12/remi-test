import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import MovieItem from "../../components/MovieItem";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { ResponseMovieType } from "../../types/movie";

const Home = () => {
  const [movieList, setMovieList] = useState<ResponseMovieType[]>([]);

  const fetchPost = async () => {
    await getDocs(collection(db, "movies")).then((querySnapshot) => {
      const newData: any = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(newData);
      setMovieList(newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <Layout>
      <div style={{ width: "70%", margin: "auto", padding: 30 }}>
        {!!movieList.length &&
          movieList.map((movie: ResponseMovieType) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
      </div>
    </Layout>
  );
};

export default Home;
