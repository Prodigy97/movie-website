import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

const Cards = () => {
    return (
        <div className="cards">
            <h1>check out these epic contents!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="/images/img-4.jpg"
                            text="Explore the hidden waterfall deep within the Amazon Jungle"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem
                            src="/images/img-5.jpg"
                            text="Travel through the waters of Eternity by a spiritual understanding"
                            label="Luxury"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="/images/img-9.jpg"
                            text="Explore the hidden waterfall deep within the Amazon Jungle"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem
                            src="/images/img-2.jpg"
                            text="Travel through the waters of Eternity by a spiritual understanding"
                            label="Luxury"
                            path="/services"
                        />
                        <CardItem
                            src="/images/img-3.jpg"
                            text="Travel through the waters of Eternity by a spiritual understanding"
                            label="Luxury"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cards;
