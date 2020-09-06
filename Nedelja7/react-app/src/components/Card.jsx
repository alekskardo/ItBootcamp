import React from "react";
import Description from "./Description";
import Emoji from "./Emoji";

const Card = ({ string, url }) => {
  return (
    <>
      <Description ime={string} />
      <Emoji img={url} />
    </>
  );
};
export default Card;
