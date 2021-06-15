import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import axios from "axios";
import "./CoinPage.scss";

const CoinPage = () => {
  let { id } = useParams();

  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get(
          `https://api.nomics.com/v1/currencies?key=f40c6b7456c197028c38acdd0a2b6c23&ids=${id}`
        )
        .then((res) => {
          setCrypto(res.data);
        })
        .catch((error) => console.log(error));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="coin-page">
      <div className="home-page-button">
        <Link to="/">
          <HomeIcon />
        </Link>
      </div>
      <div className="coin-page__graph">GRAPHIQUE HERE</div>
      <div className="coin-page__content">
        <div className="coin-page__content__left-part">LEFT PART</div>
        <div className="coin-page__content__right-part">RIGHT PART</div>
      </div>
    </div>
  );
};

export default CoinPage;
