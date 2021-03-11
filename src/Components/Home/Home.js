import React from "react";
import Leagues from "../Leagues/Leagues";
import "./Home.css";

const Home = () => {
    return (
        <>
            {/* Header Banner */}
            <div
                className="banner-div"
                style={{
                    backgroundImage: `url(" https://tse3.mm.bing.net/th?id=OIP._9u8gujJ06AckvcvE488uwHaCp&pid=Api&P=0&w=441&h=158"), linear-gradient(rgba(242,241,239,0.5),rgba(242,241,239,0.5))`,
                    backgroundBlendMode: "overlay",
                    borderRadius: "5px",
                }}
            >
                <h1>Juegos del Universo</h1>
                <h5>
                    <i> All the Tournaments and Leagues of the World</i>
                </h5>
                <h3>Explore all the leagues of the world</h3>
            </div>
            {/* Main Part of the website */}
            <div className="main-part">
                <Leagues />
            </div>
        </>
    );
};

export default Home;
