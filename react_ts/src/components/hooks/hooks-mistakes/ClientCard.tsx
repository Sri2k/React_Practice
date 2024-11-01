import { useEffect, useState } from "react";

interface ClientCardProps {
  id?: string;
}

const ClientCard = ({ id }: ClientCardProps) => {
  // mistake
  //   if (!id) {
  //     return <p>There is no Id</p>;
  //   }
  //   const [something, setSomething] = useState("damn");
  //   useEffect(() => {}, [something]);

  const [something, setSomething] = useState("damn");
  useEffect(() => {}, [something]);

  if (!id) {
    return <p>There is no Id</p>;
  }

  return (
    <>
      <h4>Render: {something}</h4>
    </>
  );
};

export default ClientCard;
