import React from "react";
import { useParams } from "react-router-dom";
import "./CoinPage.scss";

const CoinPage = () => {
  let { id } = useParams();

  return <div>{id}</div>;
};

export default CoinPage;
