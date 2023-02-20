import { Card } from "antd";
import React from "react";
import "./FreeOnlineCourseList.scss";
import { FreeOnlineCoursesData } from "../../constants/FreeOnlineCoursesData";

export const FreeOnlineCourseList = () => {
  return (
    <div className="free-online-course-list-container">
      {FreeOnlineCoursesData.map((each) => (
        <Card className="free-online-course-list-item">
          <img
            src={each.image}
            alt="Free course images"
            className="free-course-list-image"
          />
          <div className="free-online-course-list-details-container">
            <h1 className="free-online-course-list-item-title">{each.title}</h1>
            <p className="free-online-course-list-item-caption">
              {each.caption}
            </p>
            <a
              href="https://nicepage.com/html-templates/preview/online-school-3636971?device=desktop"
              className="free-online-course-list-item-anchor"
            >
              {each.more}
            </a>
          </div>
        </Card>
      ))}
    </div>
  );
};
