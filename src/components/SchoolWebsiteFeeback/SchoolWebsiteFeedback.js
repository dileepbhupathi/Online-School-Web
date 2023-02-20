import { Button } from "antd";
import React from "react";
import { SchoolWebsiteFeedbackList } from "../SchoolWebsiteFeedBackList/SchoolWebsiteFeedbackList";
import "./SchoolWebsiteFeedback.scss";

export const SchoolWebsiteFeedback = () => {
  return (
    <div className="school-web-feedback-container">
      <SchoolWebsiteFeedbackList />
      <div className="school-web-feedback-more-container">
        <Button className="school-website-feedback-button">More</Button>
        <p className="feedback-anchor">
          Images from{" "}
          <a
            href="https://www.freepik.com/photos/woman"
            className="school-website-about-freepik-anchor"
          >
            Freepik
          </a>
        </p>
      </div>
    </div>
  );
};
