import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

const HeroSection = () => {
    return (
        <div className="hero-container">
            <video src="/public/videos/video-1.mp4" autoPlay loop muted />
            <h1>GET READY TO EXLORE</h1>
            <p>what are you waiting for?</p>
            <div className="hero-btns">
                <Button
                    className="btns"
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                >
                    Jump Right In
                </Button>
                <Button
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                >
                    Watch Trailer <i className="far fa-play-circle" />
                </Button>
            </div>
        </div>
    );
};

export default HeroSection;
