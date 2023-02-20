import React from "react";
import { BodyTitleAndContext } from "../BodyTitleAndContext/BodyTitleAndContext";
import { ContactUs } from "../ContactUs/ContactUs";
import { FreeOnlineCourses } from "../FreeOnlineCourses/FreeOnlineCourses";
import { PathwaysAdvancements } from "../PathwaysAdvancements/PathwaysAdvancements";
import { SchoolReviewBody } from "../SchoolReviewBody/SchoolReviewBody";
import { SchoolWebsiteAbout } from "../SchoolWebsiteAbout/SchoolWebsiteAbout";
import { SchoolWebsiteFeedback } from "../SchoolWebsiteFeeback/SchoolWebsiteFeedback";
import { StudentsClassesAndResults } from "../StudentsClassesAndResults/StudentsClassesAndResults";
import './OnlineSchoolWebsiteBody.scss'

export const OnlineSchooleWebsiteBody = () => {
  return (
    <div className="body-container">
      <BodyTitleAndContext/>
      <SchoolReviewBody/>
      <PathwaysAdvancements/>
      <StudentsClassesAndResults/>
      <FreeOnlineCourses/>
      <SchoolWebsiteAbout/>
      <SchoolWebsiteFeedback/>
      <ContactUs/>
    </div>
  );
};
