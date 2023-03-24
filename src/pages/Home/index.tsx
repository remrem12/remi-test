import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import MovieItem from "../../components/MovieItem";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { ResponseMovieType } from "../../types/movie";
import { Empty, Spin } from "antd";

const Home = () => {
  const [movieList, setMovieList] = useState<ResponseMovieType[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPost = () => {
    setLoading(true);
    getDocs(collection(db, "movies")).then((querySnapshot) => {
      const newData: any = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMovieList(newData);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <Layout>
      <Spin spinning={loading}>
        <div style={{ width: "70%", margin: "40px auto 0", padding: 30 }}>
          {movieList.length !== 0 ? (
            movieList.map((movie: ResponseMovieType) => (
              <MovieItem key={movie.id} movie={movie} />
            ))
          ) : (
            <Empty />
          )}
        </div>
      </Spin>
    </Layout>
  );
};

export default Home;
