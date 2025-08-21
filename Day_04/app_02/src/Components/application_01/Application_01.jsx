import React from "react";
import Application_02 from "./Application_02";

const Application_01 = () => {
  const obj = [
  {
    name: "tarunsai",
    age: 56,
    place: "hyderabad",
  },
  {
    name: "sai",
    age: 34,
    place: "hyderabad",
  }
  ];
  console.log(obj);
  return (
    <div>
      <Application_02 s1={obj} />
    </div>
  );
};

export default Application_01;
