import React from "react";
import { Component } from "react";
import { Card } from "antd";
import data from "./current_projects"

export class Project extends Component{
    constructor(props) {
        super(props);
        this.state = {
            stateMode: this.props.mode,
        }
    }

    render() {

        var mode = this.props.mode == "project" ? 0 : 1;
        var projects = data[mode].map(exp =>
            <div>
                test {exp}
            </div>
            )

        return(
            <div>
                {projects}
            </div>
        )
    }
}