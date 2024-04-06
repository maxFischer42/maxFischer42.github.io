import React from "react";
import { Component } from "react";
import data from "./skills"
import "../style.css"

export class SkillTab extends Component {

    render() {
        var skills = data[this.props.set].map(exp => {
            return(
                <li className="skill_item">
                    {exp}
                </li>       
        )});

        return(
            <div>
                <ul className="skill_table">
                    {skills}
                </ul>
            </div>
        )
    }

}

export class Skills extends Component {

    render() {
        return(
            <div>
                <h2>Proficient Skills</h2>                
                <SkillTab set="skills"/>
                <h2>Familiar Skills</h2>
                <SkillTab set="familiar"/>
            </div>
        );
    }
}