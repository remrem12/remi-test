import { Row, Col } from "antd";
import { MovieType } from "../../types/movie";

type MoviePropsType = {
  movie: MovieType;
};

const MovieItem = ({ movie }: MoviePropsType) => {
  const { title, url, description, sharedBy, sharedAt = 0 } = movie;

  const formatDate = (sharedAt: number) => {
    const date = new Date(sharedAt);
    return (
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
    );
  };

  return (
    <Row gutter={8} style={{ padding: 16 }} data-testid="movie-item">
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
          <h2 style={{ margin: "0 0 10px", color: "#ff4d4f" }}>{title}</h2>
          <p style={{ margin: "0 0 10px" }}>Shared by: {sharedBy}</p>
          <p style={{ margin: "0 0 10px" }}>
            Shared at: {formatDate(sharedAt)}
          </p>
          <p style={{ margin: 0 }}>Description:</p>
          <p style={{ margin: 0 }}>{description}</p>
        </div>
      </Col>
    </Row>
  );
};

export default MovieItem;
