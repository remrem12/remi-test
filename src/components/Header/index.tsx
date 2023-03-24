import LoginForm from "../LoginForm";
import { Row, Col, Divider } from "antd";
import { HomeFilled } from "@ant-design/icons";

const Header = () => {
  return (
    <>
      <Row align="middle">
        <Col span={9} offset={3}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <HomeFilled style={{ fontSize: 36 }} /> <h1>Funny Movies</h1>
          </div>
        </Col>
        <Col span={8} offset={2}>
          <LoginForm />
        </Col>
      </Row>
      <Divider style={{ marginTop: 10 }} />
    </>
  );
};

export default Header;
