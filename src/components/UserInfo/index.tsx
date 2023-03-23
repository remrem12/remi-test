import { Button } from "antd";
import { useNavigate } from "react-router-dom";

type UserInfoType = {
  email: string;
};

const UserInfo = ({ email }: UserInfoType) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        margin: "0 20px",
      }}
    >
      <div>Welcome {email}</div>
      <Button onClick={() => navigate("/share")}>Share a movie</Button>
    </div>
  );
};

export default UserInfo;
