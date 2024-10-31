import { useState } from "react";
import UserContext, { UserContextProps } from "./UserContext";

const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = useState<UserContextProps["user"]>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
