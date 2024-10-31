import { useContext, useState } from "react";
import UserContext from "./UserContext";

export const Login = () => {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <>
      <h1>Login Here</h1>
      <div>
        <label htmlFor="username">UserName</label>
        <input
          id="username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="text"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};
