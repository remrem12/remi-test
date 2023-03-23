import { Form, Input, Button, Row, Col } from "antd";
import { useContext } from "react";
import { UserContext } from "../../contexts/user";
import UserInfo from "../UserInfo";

type userInfoType = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { email, handleLogin, handleLogout } = useContext(UserContext);

  const onFinish = (values: userInfoType) => {
    handleLogin(values.email);
  };

  return email ? (
    <div style={{ display: "flex" }}>
      <UserInfo email={email} />
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  ) : (
    <Form
      name="login-form"
      wrapperCol={{ span: 24 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Row gutter={8}>
        <Col span={9}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
            style={{ marginBottom: 0 }}
          >
            <Input placeholder="Email" type="email" />
          </Form.Item>
        </Col>
        <Col span={9}>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
            style={{ marginBottom: 0 }}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item wrapperCol={{ span: 24 }} style={{ marginBottom: 0 }}>
            <Button type="primary" htmlType="submit">
              Login/Register
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default LoginForm;
