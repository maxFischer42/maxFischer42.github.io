import React from "react";
import { Component } from "react";
import { Card } from "antd"
import data from "./education"
import { ColoredLine } from "./Shapes"

export class EducationCard extends Component {
    render() {
        return(
            <div className="card_div">
                <Card className="info_card">
                    <label className="school_title">{this.props.school}</label>, {this.props.location}<br/>
                    {ColoredLine("white", 2, "95%")}
                    {this.props.goal !== "" ? (<label className="school_goal">{this.props.goal}<br/></label>) : null}
                    <label className="school_date">{this.props.time}<br/> </label><br/>
                    <p>{this.props.description}</p>
                </Card>
            </div>
        );
    }
}

export class Education extends Component {
    render() {
        var education = data.education.map(exp => {
            return(
                <>
                    <EducationCard
                        school={exp[0]}
                        location={exp[1]}
                        goal={exp[2]}
                        time={exp[3]}
                        description={exp[4]}
                    />    
                    <br/>
                </>            
        )});

        return(
            <div className="experience_section">
                {education}
            </div>
            );
    }
}