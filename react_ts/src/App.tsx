/* eslint-disable */
import "./App.css";
import ClientCard from "./components/hooks/hooks-mistakes/ClientCard";
import Counter from "./components/hooks/hooks-mistakes/Counter";
import DummyUser from "./components/hooks/hooks-mistakes/DummyUser";
import { Login } from "./components/hooks/user-context-usage/Login";
import UserContextProvider from "./components/hooks/user-context-usage/UserContextProvider";
import { UserProfile } from "./components/hooks/user-context-usage/UserProfile";

import { YoutubeForm } from "./components/react-hook-form/YoutubeForm";

function App() {
  return (
    <div className="App">
      {/* <YoutubeForm></YoutubeForm> */}
      {/* <UserContextProvider>
        <Login></Login>
        <UserProfile></UserProfile>
      </UserContextProvider> */}
      {/* <Counter></Counter> */}
      {/* <ClientCard id={undefined}></ClientCard> */}
      <DummyUser></DummyUser>
    </div>
  );
}

export default App;
