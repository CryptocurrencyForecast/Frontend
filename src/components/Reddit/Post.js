import React from "react";

const Post = ({ticker, title, url}) => {
    return (
        <div>
            <p>{ticker}</p>
            <a href={url}><h1>{title}</h1></a>
        </div>
    );
};

export default Post;
