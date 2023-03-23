import React from "react";
import { Form, Input, Button, Row, Col } from "antd";

type userInfoType = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const onFinish = (values: userInfoType) => {
    console.log(values);
  };

  return (
    <Form
      name="basic"
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
