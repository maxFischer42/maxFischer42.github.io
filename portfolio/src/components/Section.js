import React from "react";
import { Component } from "react";
import data from './SectionInfo'

function getSection(id) {
    switch(id) {
        case "About":
            return <About/>
        case "Experience":
            return <Experience/>
    }
}

export function Section({ title, subtitle, dark, id }) {

  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        {}
            {getSection(id)}
      </div>
    </div>
  );
}

export class About extends Component {
    render() {
        return(
            <h2>
                Hello <br/>
                I am Max Fischer, <br/>
                I am a Software Developer<br/>
            </h2>
        );
    }
}

export class Experience extends Component {
    render() {
        return(
            <h2>
                Hello <br/>
                I am Max Fischer, <br/>
                I am a Software Developer<br/>
            </h2>
        );
    }
}

export class Skills extends Component {
    render() {
        return(
            <h2>
                Hello <br/>
                I am Max Fischer, <br/>
                I am a Software Developer<br/>
            </h2>
        );
    }
}

export class Education extends Component {
    render() {
        return(
            <h2>
                Hello <br/>
                I am Max Fischer, <br/>
                I am a Software Developer<br/>
            </h2>
        );
    }
}

export class CurrentProjects extends Component {
    render() {
        return(
            <h2>
                Hello <br/>
                I am Max Fischer, <br/>
                I am a Software Developer<br/>
            </h2>
        );
    }
}

export class PastProjects extends Component {
    render() {
        return(
            <h2>
                Hello <br/>
                I am Max Fischer, <br/>
                I am a Software Developer<br/>
            </h2>
        );
    }
}