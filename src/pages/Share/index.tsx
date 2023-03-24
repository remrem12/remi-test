import { Card } from "antd";
import Layout from "../../components/Layout";
import ShareForm from "../../components/ShareForm";

const Share = () => {
  return (
    <Layout>
      <div style={{ width: 500, margin: "40px auto" }}>
        <Card title="Share movie" hoverable>
          <ShareForm />
        </Card>
      </div>
    </Layout>
  );
};

export default Share;
