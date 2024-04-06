import React from "react";
import { Component } from "react";
import { About } from "./AboutSection"
import { Experience } from "./ExperienceSection";
import { Skills } from "./SkillsSection";
import { Education } from "./EducationSection";
import { CurrentProjects } from "./CurrentProject";
import { PastProjects } from "./PastProjects";
import data from './SectionInfo'

function getSection(id) {
    switch(id) {
        case "About":
            return <About/>
        case "Experience":
            return <Experience/>
        case "Skills":
            return <Skills/>
        case "Education":
            return <Education/>
        case "CurrentProjects":
            return <CurrentProjects/>
        case "PastProjects":
            return <PastProjects/>
    }
}

export function Section({ title, subtitle, dark, id }) {

  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
            {getSection(id)}
      </div>
    </div>
  );
}






