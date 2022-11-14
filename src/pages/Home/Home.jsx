import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
    const posts = useLoaderData();

    return (
        <main>
            <h1>Danh sách bài viết</h1>

            <div>
                {posts.map((post) => (
                    <Link key={post.id} to={"/posts/" + post.id}>
                        <div>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
};

Home.loader = async () => {
    return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
    );
};

export default Home;
