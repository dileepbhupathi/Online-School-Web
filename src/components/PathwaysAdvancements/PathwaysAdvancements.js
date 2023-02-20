import React from "react";
import { PathwaysAdvancementProg } from "../PathwaysAdvancementProg/PathwaysAdvancementProg";
import "./PathwaysAdvancements.scss";

export const PathwaysAdvancements = () => {
  return (
    <div className="pathways-advancement-container">
      <h1 className="pathways-advancement-title">Pathways for your advancement</h1>
      <PathwaysAdvancementProg/>
      <p className="pathway-advancement-anchor">
        Images from{" "}
        <a
          href="https://www.freepik.com/photos/woman"
          className="pathway-freepik-anchor"
        >
          Freepik
        </a>
      </p>
    </div>
  );
};
