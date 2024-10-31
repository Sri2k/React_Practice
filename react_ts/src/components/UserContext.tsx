import React, { createContext, useState } from "react";

export interface UserContextProps {
  user: null | { username: string; password: string };
  setUser: (user: UserContextProps["user"]) => void;
}

const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {},
});

export default UserContext;
