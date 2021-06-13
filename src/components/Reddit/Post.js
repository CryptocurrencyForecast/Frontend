import React from "react";
import FeedbackIcon from "@material-ui/icons/Feedback";

const Post = ({ ticker, title, url }) => {
  return (
    <li className="message-item">
      <div className="message">
        <FeedbackIcon />
        <div className="message__content">{title}</div>
      </div>
      <div className="see-more">
        <a href={url} target="_blank" rel="noreferrer">
          Voir plus
        </a>
      </div>
    </li>
  );
};

export default Post;
