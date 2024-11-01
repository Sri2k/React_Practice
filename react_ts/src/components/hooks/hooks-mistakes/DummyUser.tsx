import { useState } from "react";

const DummyUser = () => {
  const [user, SetUser] = useState({
    name: "",
    city: "",
  });

  //   const handleName = (e: any) => {
  //     SetUser({
  //       ...user,
  //       name: e.target.values,
  //     });
  //   };
  console.log(user);
  const handleName = (e: any) => {
    SetUser((prev) => {
      return {
        ...prev,
        name: e.target.value,
      };
    });
  };
  return (
    <>
      <form>
        <input type="text" id="name" onChange={handleName}></input>
      </form>
    </>
  );
};
export default DummyUser;
