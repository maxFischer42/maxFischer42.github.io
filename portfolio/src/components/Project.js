import React from "react";
import { Component } from "react";
import { Card, Carousel } from "antd";
import { IoLogoGithub } from "react-icons/io";
import data from "./current_projects"
import { ColoredLine } from "./Shapes"

export class Project extends Component{
    constructor(props) {
        super(props);
        this.state = {
            stateMode: this.props.mode,
        }
    }

    getLinks(id) {
        return(
            <div>
                {data.projects[id].links.github != null ? <><IoLogoGithub /><a href={data.projects[id].links.github}> Git: </a><br/></> : <></>}
                {data.projects[id].links.itch != null ? <a href={data.projects[id].links.itch}> Itch: </a> : <></>}
            </div>
        )
    }

    getImages(id) {

        const imgs = [];
        for(let i = 0; i < data.projects[id].images.length; i++) {
            imgs.push(
                <div className="carousel_style">
                    <img src={data.projects[id].images[i]} className="carousel_img"/>
                </div>
            )
        }

        return(
            <Carousel>
                {imgs}
            </Carousel>
        )
    }

    getProject() {
        const rows = [];
        for(let id = 0; id < data.projects.length; id++) {
            if(data.projects[id].past != this.props.mode) continue;
            rows.push(
                <div>
                <div className="row">
                    <div className="column_left">
                    <Card>
                        <h1 className="project_title">{data.projects[id].name}</h1>
                        <h3 className="project_type"> {data.projects[id].type}</h3>
                        <p className="project_description">{data.projects[id].description}</p>
                        <Card title="Links"className="project_links">{this.getLinks(id)}</Card><br/>
                    </Card>   
                    </div>             
                    <div className="column_right" ><div className="project_images">{this.getImages(id)}</div></div>                    
                </div>
                
                    {ColoredLine("white", 2)}
                </div>
            );
        }

        return(
            <div>{rows}</div>
        )
    }

    render() {

        var mode = this.props.mode == "project" ? 0 : 1;
        var count = mode == 0 ? data.project_count : data.past_project_count;
        //var projects = data.projects[mode][3][0];

//        var v = this.getProject()
        /*
        Project Array Definition
         -- Name
         -- Type
         -- Description
         -- Images[]
         -- Links:
                {
                    github,
                    itch
                }
        */

        return(
            <div className="project_content">
                {this.getProject()}
            </div>
        )
    }
}