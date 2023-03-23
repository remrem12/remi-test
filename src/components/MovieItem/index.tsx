import React from "react";
import { Row, Col } from "antd";

type MovieType = {
  title: string;
  url: string;
  sharedBy: string;
  description: string;
};

const MovieItem = (movie: MovieType) => {
  return (
    <Row gutter={8}>
      <Col span={10}></Col>
      <Col span={14}></Col>
    </Row>
  );
};

export default MovieItem;
