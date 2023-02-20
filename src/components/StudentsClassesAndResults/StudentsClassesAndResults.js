import { Button } from "antd";
import React from "react";
import "./StudentsClassesAndResults.scss";

export const StudentsClassesAndResults = () => {
  return (
    <div className="students-class-results-container">
      <div className="student-class-results-content-container">
        <h1 className="student-class-result-title">
          For every student, every classroom. Real results
        </h1>
        <p className="sudent-class-result-caption">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident
        </p>
        <p className="student-class-result-anchor">
          Images from{" "}
          <a
            href="https://www.freepik.com/photos/woman"
            className="students-class-result-freepik-anchor"
          >
            Freepik
          </a>
        </p>
        <div className="students-classes-and-results-button-container">
          <Button className="students-classes-and-results-button">
            Learners
          </Button>
          <Button className="students-classes-and-results-button">
            Teachers
          </Button>
          <Button className="students-classes-and-results-button">
            Classes
          </Button>
        </div>
      </div>
      <div className="stuents-class-result-image-container">
        <img
          src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/499374d6f5295d4a8f9d3947/jhjhjh.jpg"
          alt="/"
          className="students-class-result-section-image"
        />
      </div>
    </div>
  );
};
