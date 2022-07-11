import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="home">Home-page</div>
      <button
        className="bt"
        onClick={() => navigate("order-summery", { replace: true })}
      >
        Place-order
      </button>
    </>
  );
};
