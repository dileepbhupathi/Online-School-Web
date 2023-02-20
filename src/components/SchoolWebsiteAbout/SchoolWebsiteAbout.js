import { Button } from "antd";
import React from "react";
import { SchoolWebsiteAboutList } from "../SchoolWebsiteAboutList/SchoolWebsiteAboutList";
import "./SchoolWebsiteAbout.scss";

export const SchoolWebsiteAbout = () => {
  return (
    <div className="school-website-about-container">
      <SchoolWebsiteAboutList />
      <div className="school-website-about-content-container">
        <h1 className="school-website-about-title">The highest quality online courses from institutions</h1>
        <p className="school-website-about-caption">Sample text. Click to select the Text Element.</p>
        <Button className="school-website-about-button">learn more</Button>
      </div>
    </div>
  );
};
