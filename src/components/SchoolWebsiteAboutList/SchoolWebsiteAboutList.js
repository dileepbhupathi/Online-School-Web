import { Card } from "antd";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import "./SchoolWebsiteAboutList.scss";

export const SchoolWebsiteAboutList = () => {
  const [yOffSet, setYoffSet] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        if (window.pageYOffset > 4550) {
          setYoffSet(true);
          console.log("working");
        } else {
          setYoffSet(false);
        }
      },
      []
    );
  });

  return (
    <div className="school-website-about-list-cards-container">
      <Card className="school-website-about-list-cards">
        <h1 className="school-website-about-list-card-count">
          {yOffSet ? (
            <CountUp
              scrollInHeight={150}
              className="account-balance"
              start={0}
              end={50}
              duration={2.75}
              useEasing={true}
              useGrouping={true}
              // separator=" "
              // decimal=","
            />
          ) : null}
          k
        </h1>
        <p className="school-website-about-list-card-caption">happy customers</p>
      </Card>
      <Card className="school-website-about-list-cards card2">
        <h1 className="school-website-about-list-card-count">
          {yOffSet ? (
            <CountUp
              scrollInHeight={150}
              className="account-balance"
              start={0}
              end={60}
              duration={2.75}
              useEasing={true}
              useGrouping={true}
              separator=" "
              decimal=","
            />
          ) : null}
          %
        </h1>
        <p className="school-website-about-list-card-caption"> Sample Headline</p>
      </Card>
      <Card className="school-website-about-list-cards card3">
        <h1 className="school-website-about-list-card-count">
          {yOffSet ? (
            <CountUp
              scrollInHeight={150}
              className="account-balance"
              start={0}
              end={100}
              duration={2.75}
              useEasing={true}
              useGrouping={true}
              separator=" "
              decimal=","
            />
          ) : null}
        </h1>
        <p className="school-website-about-list-card-caption">our courses</p>
      </Card>
      <Card className="school-website-about-list-cards card4">
        <h1 className="school-website-about-list-card-count">
          {yOffSet ? (
            <CountUp
              scrollInHeight={150}
              className="account-balance"
              start={0}
              end={1230}
              duration={2.75}
              useEasing={true}
              useGrouping={true}
              separator=" "
              decimal=","
            />
          ) : null}
        </h1>
        <p className="school-website-about-list-card-caption">learners worldwide</p>
      </Card>
    </div>
  );
};
