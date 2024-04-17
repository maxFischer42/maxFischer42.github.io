import React from "react";
import { Card } from "antd"
import { Component } from "react";
import "../style.css"
import data from "./experience"
import { ColoredLine } from "./Shapes"

export class ExperienceCard extends Component {
    render() {
        return(
            <div className="card_div">
                <Card className="info_card">
                    <label className="company_title">{this.props.company}</label>, {this.props.location}<br/>
                    {ColoredLine("white", 2, "95%")}
                    <label className="job_date">{this.props.start} - {this.props.end}<br/> </label><br/>
                    <label className="company_position">{this.props.title}</label><br/>
                    <p>{this.props.description}</p>
                </Card>
            </div>
        );
    }
}

export class Experience extends Component {
    
    render() {
        var experiences = data.experiences.map(exp => {
            return(
                <>
                    <ExperienceCard
                        company={exp[0]}
                        location={exp[1]}
                        start={exp[2]}
                        end={exp[3]}
                        title={exp[4]}
                        description={exp[5]}
                    />    
                    <br/>
                </>            
        )});

        return(
            <div className="experience_section">
                {experiences}
            </div>
            );
    }
}