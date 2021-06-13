import React, { useState, useEffect } from "react";
import Post from "../Reddit/Post";
import axios from "axios";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";

function PostList({ ticker }) {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    axios
      .get("https://cryptocurrencyforecast.herokuapp.com/last-posts/" + ticker)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.error(error);
        return axios.request(error.config);
      });
  });

  return (
    <div>
      {posts.length > 0 ? (
        <ul className="post-list">
          {posts.map((post, index) => {
            return (
              <Post
                key={index}
                ticker={post.ticker}
                title={post.title}
                url={post.url}
              />
            );
          })}
        </ul>
      ) : (
        <ul className="post-list">
          <li className="message-item">
            <div className="message">
              <SentimentVeryDissatisfiedIcon />
              <div className="message__content">
                Aucun commentaire trouvé :/
              </div>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
}

export default PostList;
