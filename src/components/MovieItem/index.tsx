import { Row, Col } from "antd";
import { MovieType } from "../../types/movie";

type MoviePropsType = {
  movie: MovieType;
};

const MovieItem = ({ movie }: MoviePropsType) => {
  const { title, url, description, sharedBy } = movie;

  return (
    <Row gutter={8}>
      <Col span={10}>
        <div style={{ textAlign: "right" }}>
          <iframe
            width="300"
            height="180"
            src={url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </div>
      </Col>
      <Col span={13} offset={1}>
        <div style={{ textAlign: "left" }}>
          <h3>{title}</h3>
          <span>Shared by: {sharedBy}</span>
          <p>Description:</p>
          <span>{description}</span>
        </div>
      </Col>
    </Row>
  );
};

export default MovieItem;
