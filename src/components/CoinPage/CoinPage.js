import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import axios from "axios";
import "./CoinPage.scss";
import Page404 from "../404/404";
import Chart from "../Chart/Chart";
import TechnicalAnalysis from "../TechnicalAnalysis/TechnicalAnalysis";

const CoinPage = () => {
  let { id } = useParams();

  const [crypto, setCrypto] = useState({});
  const [wrongPage, setWrongPage] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.nomics.com/v1/currencies?key=f40c6b7456c197028c38acdd0a2b6c23&ids=${id}`
      )
      .then((res) => {
        if (res.data.length === 0) {
          setWrongPage(true);
        } else {
          setCrypto(...res.data);
        }
        console.log(...res.data);
      })
      .catch((error) => console.log(error));
  }, [10000]);

  return (
    <div className="coin-page">
      {wrongPage ? (
        <Page404 />
      ) : (
        <div>
          <div className="home-page-button">
            <Link to="/">
              <HomeIcon />
            </Link>
          </div>
          <div className="coin-page__graph">
            <Chart symbol={`${id}USDT`} />
          </div>
          <div className="coin-page__content">
            <div className="coin-page__content__left-part">
              <TechnicalAnalysis symbol={`${id}USDT`} />
            </div>
            <div className="coin-page__content__right-part">
              <div className="description">{crypto.description}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoinPage;
