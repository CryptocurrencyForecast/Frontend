import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CoinPage.scss";
import Page404 from "../404/404";
import Chart from "../Chart/Chart";
import PostList from "../Reddit/PostList";
import TechnicalAnalysis from "../TechnicalAnalysis/TechnicalAnalysis";
import { If } from "react-if";

const CoinPage = () => {
  let { id } = useParams();

  const [crypto, setCrypto] = useState({});
  const [wrongPage, setWrongPage] = useState(false);

  useEffect(() => {
    axios
      .get(`https://cryptocurrencyforecast.herokuapp.com/marketcap/${id}`)
      .then((res) => {
        if (res.data.length === 0) {
          setWrongPage(true);
        } else {
          setCrypto(res.data.data[id]);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="coin-page">
      {wrongPage ? (
        <Page404 />
      ) : (
        <div>
          <div className="crypto-title">
            <img className="image" src={crypto.logo} alt="message logo" />
            <div className="title">{crypto.name}</div>
          </div>
          <div className="coin-page__graph">
            <Chart symbol={`${id}USD`} />
          </div>
          <div className="coin-page__content">
            <div className="coin-page__content__left-part">
              <TechnicalAnalysis symbol={`${id}USD`} />
            </div>
            <div className="coin-page__content__right-part">
              <If condition={crypto.description}>
                <div className="description block">
                  <div className="description__content">
                    {crypto.description}
                  </div>
                </div>
              </If>
              <div className="social-messages block">
                <div className="catch-sentence">Ils parlent du {id} !!</div>
                <PostList />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoinPage;
