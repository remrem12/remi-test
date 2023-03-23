import React from "react";
import { Button } from "antd";

type UserInfoType = {
  email: string;
};

const UserInfo = ({ email }: UserInfoType) => {
  return (
    <div>
      <div>Welcome {email}</div>
      <Button>Share a movie</Button>
    </div>
  );
};

export default UserInfo;
