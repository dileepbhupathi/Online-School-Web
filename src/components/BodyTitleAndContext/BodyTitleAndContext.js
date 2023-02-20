import { Button } from "antd";
import React from "react";
import "./BodyTitleAndContext.scss";

export const BodyTitleAndContext = () => {
  return (
    <div className="body-title-container">
      <div className="body-content-container">
      <h1 className="body-title">Online School</h1>
      <p className="body-context">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident
      </p>
      <p className="body-freepik-anchor-text">
        Images from{" "}
        <a
          href="https://www.freepik.com/photos/woman"
          className="freepik-anchors"
        >
          Freepik
        </a>
      </p>
      <Button className="learn-more-button">Learn more</Button>
      </div>
      <div className="body-title-image-container">
        <img
          src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/40e8e9c179ff526591487090/5555-min.png"
          alt="/"
          className="body-title-image"
        />
      </div>
    </div>
  );
};
