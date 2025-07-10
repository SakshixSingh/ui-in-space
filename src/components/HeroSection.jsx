

import React from "react";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center px-4">
      <div className="row w-100 align-items-center">
        {/*  Spline Robot */}
        <div className="col-md-6 mb-4 mb-md-0">
          <div style={{ width: "100%", height: "600px" }}>
            <Spline scene="https://prod.spline.design/mqkyx5UWzNO3kdCr/scene.splinecode" />
          </div>
        </div>

        {/* Robo Text */}
        <div className="col-md-6 text-center text-md-start">
          <h1
            className="display-4 fw-bold text-float"
            style={{ animationDelay: "0s", animationFillMode: "both" }}
          >
            Yo. I'm Robo.
          </h1>
          <p
            className="lead text-float"
            style={{ animationDelay: "0.3s", animationFillMode: "both" }}
          >
            I blink. I float. I crash sometimes — like your code.
          </p>
          <p
            className="lead text-float"
            style={{ animationDelay: "0.6s", animationFillMode: "both" }}
          >
            Just a Robo vibing in space. Sakshi built me . Blame her.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
