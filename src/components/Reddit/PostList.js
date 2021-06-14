import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Post from "../Reddit/Post";
import axios from "axios";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";

function PostList() {
  let { id } = useParams();

  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    axios
      .get(`https://cryptocurrencyforecast.herokuapp.com/last-posts/${id}`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.error(error);
        return axios.request(error.config);
      });
  }, [10000]);

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
