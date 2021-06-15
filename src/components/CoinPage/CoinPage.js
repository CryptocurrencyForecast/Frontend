import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import axios from "axios";
import "./CoinPage.scss";
import Page404 from "../404/404";
import Chart from "../Chart/Chart";
import PostList from "../Reddit/PostList";
import TechnicalAnalysis from "../TechnicalAnalysis/TechnicalAnalysis";
import { If } from "react-if";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {AccountBalanceWallet} from "@material-ui/icons";
import ListItemText from "@material-ui/core/ListItemText";

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
          <div>
            <img src={crypto.logo} alt="message logo"/>
            <div>{id}</div>
          </div>
          <div className="coin-page__graph">
            <Chart symbol={`${id}USD`} />
          </div>
          <div className="coin-page__content">
            <div className="coin-page__content__left-part">
              <TechnicalAnalysis symbol={`${id}USD`} />
              <If
                condition={
                  crypto.urls ||
                  crypto.urls ||
                  crypto.urls ||
                  crypto.urls ||
                  crypto.urls ||
                  crypto.urls
                }
              >
                <div className="social block">
                  <If condition={crypto.urls}>
                    <div className="social__name">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/fr/thumb/c/c8/Twitter_Bird.svg/300px-Twitter_Bird.svg.png"
                        alt="twitter logo"
                      />
                      <a
                        href={crypto.urls}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Twitter
                      </a>
                    </div>
                  </If>
                  <If condition={crypto.urls}>
                    <div className="social__name">
                      <img
                        src="https://mtlantoine.github.io/CV/assets/pic/svg/github.svg"
                        alt="github logo"
                      />
                      <a
                        href={crypto.urls}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Github
                      </a>
                    </div>
                  </If>
                  <If condition={crypto.urls}>
                    <div className="social__name">
                      <img
                        src="https://www.elementaryos-fr.org/wp-content/uploads/2019/08/logo-reddit.png"
                        alt="reddit logo"
                      />
                      <a
                        href={crypto.urls}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Reddit
                      </a>
                    </div>
                  </If>
                  <If condition={crypto.urls}>
                    <div className="social__name">
                      <img
                        src="https://cpgcanhelp.com/wp-content/uploads/2018/03/Technical-Writing.png"
                        alt="technical doc logo"
                      />
                      <a
                        href={crypto.urls}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Technical documentation
                      </a>
                    </div>
                  </If>
                  <If condition={crypto.urls}>
                    <div className="social__name">
                      <img
                        src="http://www.cds07.fr/wp-content/uploads/sites/7/2020/03/website-logo-png.png"
                        alt="website logo"
                      />
                      <a
                        href={crypto.urls}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Website
                      </a>
                    </div>
                  </If>
                  <If condition={crypto.urls}>
                    <div className="social__name">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Google_Messages_logo.svg/2500px-Google_Messages_logo.svg.png"
                        alt="message logo"
                      />
                      <a
                        href={crypto.urls}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Message
                      </a>
                    </div>
                  </If>
                </div>
              </If>
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
