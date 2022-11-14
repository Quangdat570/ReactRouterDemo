import React from "react";
import { useLoaderData } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const PostDetail = () => {
    const post = useLoaderData();

    return (
        <div >
            <h1>{post.title}</h1>
            <div>{post.body}</div>
        </div>
    );
};

PostDetail.loader = async ({ params }) => {
    try {
        const post = await fetch(
            "https://jsonplaceholder.typicode.com/posts/" + params.postId
        ).then((res) => {
            if (!res.ok) throw new Error();
            else return res.json();
        });

        return post;
    } catch (err) {
        throw new Error("Lsdfsdfsf");
    }
};

export default PostDetail;
