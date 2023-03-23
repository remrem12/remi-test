import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import MovieItem from "../../components/MovieItem";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { ResponseMovieType } from "../../types/movie";
import { Empty } from "antd";

const Home = () => {
  const [movieList, setMovieList] = useState<ResponseMovieType[]>([]);

  const fetchPost = async () => {
    await getDocs(collection(db, "movies")).then((querySnapshot) => {
      const newData: any = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMovieList(newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <Layout>
      <div style={{ width: "70%", margin: "40px auto 0", padding: 30 }}>
        {movieList.length !== 0 ? (
          movieList.map((movie: ResponseMovieType) => (
            <MovieItem key={movie.id} movie={movie} />
          ))
        ) : (
          <Empty />
        )}
      </div>
    </Layout>
  );
};

export default Home;
