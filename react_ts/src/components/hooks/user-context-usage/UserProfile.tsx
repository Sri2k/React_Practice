import React, { useContext } from "react";
import UserContext from "./UserContext";

export const UserProfile = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <h1>Hello, {user?.username || "Guest"}</h1>{" "}
      {/* Handle potential null user */}
    </>
  );
};
