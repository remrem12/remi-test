import {
  ArrowLeftOutlined,
  CloudUploadOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Form, Button, Input, Card, message } from "antd";
import { useNavigate } from "react-router";
import Layout from "../../components/Layout";
import { MovieType } from "../../types/movie";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

const Share = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values: MovieType) => {
    addDoc(collection(db, "movies"), {
      ...values,
      sharedAt: Date.now(),
    })
      .then(() => {
        message.success("Share movie successfully! 🎉🎉🎉");
        form.resetFields();
      })
      .catch(() => {
        message.error("Something went wrong! 🥲");
      });
  };

  const handleClear = () => {
    form.resetFields();
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <Layout>
      <div style={{ width: 500, margin: "40px auto" }}>
        <Card title="Share movie" hoverable>
          <Form
            form={form}
            name="share-form"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            labelAlign="left"
          >
            <Form.Item
              label="Movie Title"
              name="title"
              rules={[{ required: true, message: "Please input movie title!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Youtube URL"
              name="url"
              rules={[{ required: true, message: "Please input movie URL!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[
                { required: true, message: "Please input movie description!" },
              ]}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item wrapperCol={{ span: 24 }}>
              <div
                style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}
              >
                <Button danger onClick={handleBack}>
                  <ArrowLeftOutlined /> Back
                </Button>
                <Button onClick={handleClear}>
                  <ReloadOutlined /> Clear
                </Button>
                <Button htmlType="submit" type="primary">
                  <CloudUploadOutlined />
                  Share
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </Layout>
  );
};

export default Share;
