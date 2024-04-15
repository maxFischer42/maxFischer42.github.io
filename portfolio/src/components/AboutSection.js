import React from "react";
import { Component } from "react";
import { Skills } from "./SkillsSection";

export class About extends Component {
    render() {
        return(
            <div>
                <div className="about_left">
                    <div className="about_content">
                        <h2> Hi, I'm Max Fischer </h2><br/>
                        <h3>I'm a Software Engineer and Game Designer</h3>

                    </div>
                </div>
                <div className="about_right">
                    <Skills/>
                </div>
            </div>
        );
    }
}