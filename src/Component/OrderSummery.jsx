import React from "react";
import { useNavigate } from "react-router-dom";

export const OrderSummery = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home">Order-confirmed !</div>
      <button className="bt" onClick={() => navigate(-1)}>
        Go-back
      </button>
    </>
  );
};
