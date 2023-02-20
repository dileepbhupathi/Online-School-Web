import React from "react";
import { FreeOnlineCourseList } from "../FreeOnlineCoursesList/FreeOnlineCourseList";
import "./FreeOnlineCourses.scss";

export const FreeOnlineCourses = () => {
  return (
    <div className="free-online-course-container">
      <h1 className="free-online-course-title">Free Online Courses</h1>
      <p className="free-oline-course-caption">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <FreeOnlineCourseList/>
      <p className="free-online-course-anchor">
        Images from{" "}
        <a
          href="https://www.freepik.com/photos/woman"
          className="free-online-freepik-anchor"
        >
          Freepik
        </a>
      </p>
    </div>
  );
};
