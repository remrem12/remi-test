import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { ResponseMovieType } from "../../types/movie";
import { Spin } from "antd";
import MovieList from "../../components/MovieList";

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
        <MovieList movieList={movieList} />
      </Spin>
    </Layout>
  );
};

export default Home;
