import React, { useState, useEffect } from "react";
import Post from "../Reddit/Post";
import axios from "axios";

function PostList({ticker}) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get(
                "http://127.0.0.1:5000/last-posts/" + ticker
            )
            .then((res) => {
                setPosts(res.data);
            })
            .catch((error) => console.log(error));
    });

    return (
        <div className="post-list">
            {posts.map((post, index) => {
                return (
                    <Post
                        key={index}
                        ticker={post.ticker}
                        title={post.title}
                        url={post.url}
                    />)
            })}
        </div>
    );
}

export default PostList;
