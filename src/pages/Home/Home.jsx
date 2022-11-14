import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import  Carosel  from "../../components/Carosel/Carosel";
const Home = () => {
    const posts = useLoaderData();

    return (
        <main>
            <Carosel/>
            <h3 className="text-center mt-4">Deals Of The Day</h3>
            <div className="list-product d-flex">
                <div className="product col-4">
                    <img src="https://parkofideas.com/luchiana/demo/wp-content/uploads/2020/10/luchiana-3022279061-260x230.jpg" alt=""  className="w-100"/>
                    <div className="info d-flex justify-content-evenly">
                    <i className="bi bi-handbag"></i>
                    <i className="bi bi-plus-lg"></i>
                    <i className="bi bi-eye"></i>
                    </div>
                </div>
                <div className="product col-4">
                    <img src="https://parkofideas.com/luchiana/demo/wp-content/uploads/2020/10/luchiana-3022279061-260x230.jpg" alt="" className="w-100"/>
                    <div className="info d-flex justify-content-evenly">
                    <i className="bi bi-handbag"></i>
                    <i className="bi bi-plus-lg"></i>
                    <i className="bi bi-eye"></i>
                    </div>
                </div>
                <div className="product col-4">
                    <img src="https://parkofideas.com/luchiana/demo/wp-content/uploads/2020/10/luchiana-3022279061-260x230.jpg" alt="" className="w-100"/>
                    <div className="info d-flex justify-content-evenly">
                    <i className="bi bi-handbag"></i>
                    <i className="bi bi-plus-lg"></i>
                    <i className="bi bi-eye"></i>
                    </div>
                </div>
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
