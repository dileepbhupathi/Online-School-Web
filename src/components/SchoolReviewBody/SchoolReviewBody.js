import { Card } from "antd";
import React from "react";
import { SchoolCourseData } from "../../constants/SchoolReviewData";
import "./SchoolReviewBody.scss";

export const SchoolReviewBody = () => {
  return (
    <div className="school-review-body-container">
      <h1 className="shool-review-caption">
        Start learning from the world’s best institutions
      </h1>
      <div className="school-course-list-container">
        {SchoolCourseData.map((each) => (
          <Card className="school-review-course-container">
            <h1 className="school-review-course-count">{each.number}</h1>
            <h3 className="school-review-course-title">{each.title}</h3>
            <p className="school-review-course-context">{each.context}</p>
          </Card>
        ))}
      </div>
      <p className="school-review-freepik-anchor">
        Images from{" "}
        <a
          href="https://www.freepik.com/photos/woman"
          className="freepik-anchors"
        >
          Freepik
        </a>
      </p>
    </div>
  );
};
