import React from "react";
import { Component } from "react";
import data from "./skills"
import "../style.css"
import { Card } from 'antd'

export class SkillTab extends Component {

    render() {
        var skills = data[this.props.set].map(exp => {
            return(
                <li className="skill_item">
                    {exp}
                </li>       
        )});

        return(
            <Card title={<h1 className="skill_card_title">{this.props.title}</h1>} className="skill_card">
                <ul className="skill_table">
                    {skills}
                </ul>
            </Card>
        )
    }

}

export class Skills extends Component {

    render() {
        return(
            <div className="skill_cards">              
                <SkillTab set="skills" title="Proficient Skills"/><br/>
                <SkillTab set="familiar" title="Familiar Skills"/>
            </div>
        );
    }
}