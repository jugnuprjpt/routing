import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

export const User = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <div>
      <h2>User-1</h2>
      <h2>User-2</h2>
      <h2>User-3</h2>
      <Outlet />

      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active filter
        </button>
        &nbsp; &nbsp;
        <button onClick={() => setSearchParams({})}>Reset filter</button>
      </div>

      {showActiveUsers ? (
        <h2>showing active users</h2>
      ) : (
        <h2>showing all users</h2>
      )}
    </div>
  );
};
