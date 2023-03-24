import { MovieType } from "../../types/movie";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import {
  ArrowLeftOutlined,
  CloudUploadOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/user";
import { useNavigate } from "react-router";
import { Form, Button, Input, message } from "antd";
import { formatUrl } from "../../utils/formatUrl";

const ShareForm = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { email } = useContext(UserContext);

  const onFinish = (values: MovieType) => {
    setLoading(true);
    addDoc(collection(db, "movies"), {
      ...values,
      url: formatUrl(values.url),
      sharedAt: Date.now(),
      sharedBy: email,
    })
      .then(() => {
        message.success("Share movie successfully! 🎉🎉🎉");
        form.resetFields();
        setLoading(false);
      })
      .catch(() => {
        message.error("Something went wrong! 🥲");
        setLoading(false);
      });
  };

  const handleClear = () => {
    form.resetFields();
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
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
        rules={[
          { required: true, message: "Please input movie URL!" },
          {
            pattern: new RegExp("^(https?://)?(www.youtube.com|youtu.be)/.+$"),
            message: "Please input a Youtube URL",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: "Please input movie description!" }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }}>
        <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
          <Button danger onClick={handleBack}>
            <ArrowLeftOutlined /> Back to Home
          </Button>
          <Button onClick={handleClear}>
            <ReloadOutlined /> Clear
          </Button>
          <Button htmlType="submit" type="primary" loading={loading}>
            <CloudUploadOutlined />
            Share
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default ShareForm;
