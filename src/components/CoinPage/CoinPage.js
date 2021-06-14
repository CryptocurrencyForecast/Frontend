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

const CoinPage = () => {
  let { id } = useParams();

  const [crypto, setCrypto] = useState({});
  const [wrongPage, setWrongPage] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://cryptocurrencyforecast.herokuapp.com/nomics/${id}`)
      .then((res) => {
        if (res.data.length === 0) {
          setWrongPage(true);
        } else {
          setCrypto(...res.data);
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
          <div className="home-page-button">
            <Link to="/">
              <HomeIcon />
            </Link>
          </div>
          <div className="coin-page__graph">
            <Chart symbol={`${id}USD`} />
          </div>
          <div className="coin-page__content">
            <div className="coin-page__content__left-part">
              <TechnicalAnalysis symbol={`${id}USD`} />
              <If
                condition={
                  crypto.twitter_url ||
                  crypto.facebook_url ||
                  crypto.github_url ||
                  crypto.reddit_url
                }
              >
                <div className="social block">
                  <If condition={crypto.twitter_url}>
                    <div className="social__name">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/fr/thumb/c/c8/Twitter_Bird.svg/300px-Twitter_Bird.svg.png"
                        alt="twitter logo"
                      />
                      <a
                        href={crypto.twitter_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Twitter
                      </a>
                    </div>
                  </If>
                  <If condition={crypto.facebook_url}>
                    <div className="social__name">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                        alt="facebook logo"
                      />
                      <a
                        href={crypto.facebook_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Facebook
                      </a>
                    </div>
                  </If>
                  <If condition={crypto.github_url}>
                    <div className="social__name">
                      <img
                        src="https://mtlantoine.github.io/CV/assets/pic/svg/github.svg"
                        alt="github logo"
                      />
                      <a
                        href={crypto.github_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Github
                      </a>
                    </div>
                  </If>
                  <If condition={crypto.reddit_url}>
                    <div className="social__name">
                      <img
                        src="https://www.elementaryos-fr.org/wp-content/uploads/2019/08/logo-reddit.png"
                        alt="reddit logo"
                      />
                      <a
                        href={crypto.reddit_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Reddit
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
                <div className="catch-sentence">
                  Ils parlent du {crypto.id} !!
                </div>
                <PostList ticker={crypto.id} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoinPage;
