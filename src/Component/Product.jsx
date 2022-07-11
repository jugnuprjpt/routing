import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Product = () => {
  return (
    <>
      <div style={{ marginTop: "10px" }}>
        <input type="search" placeholder="Search products" />
      </div>
      <nav>
        <Link className="sub" to="features">
          Features
        </Link>
        <Link className="sub" to="newProduct">
          New
        </Link>
      </nav>
      <Outlet />
    </>
  );
};
