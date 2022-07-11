import React from "react";
import { useParams } from "react-router-dom";

export const UserDeatil = () => {
  const params = useParams();
  const userId = params.userId;
  return <div>Deatils about users{userId}</div>;
};
