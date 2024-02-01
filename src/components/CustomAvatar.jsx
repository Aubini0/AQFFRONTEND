import React, { useContext } from "react";
import Avatar from "react-avatar";

import { AuthContext } from "../pages/auth/authContext";

const CustomAvatar = () => {
  const { user } = useContext(AuthContext);

  return (
    <Avatar
      size='100'
      name={user.name}
      src={user.imageUrl || null}
      round={true}
      color='#664a09'
    />
  );
};

export default CustomAvatar;
