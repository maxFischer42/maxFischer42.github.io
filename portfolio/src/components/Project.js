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

    getDescription(id) {
        const para = [];
        for(let i = 0; i < data.projects[id].description.length; i++) {
            para.push(
                <p>
                    {data.projects[id].description[i]}
                </p>
            )
        }

        return(
            <div>
                {para}
            </div>
        )
    }

    getLinks(id) {
        return(
            <div>
                {data.projects[id].links.github != null ? <><IoLogoGithub /><a href={data.projects[id].links.github}> Github </a><br/></> : <></>}
                {data.projects[id].links.itch != null ? <><a href={data.projects[id].links.itch}> Itch.io </a><br/></> : <></>}
                {data.projects[id].links.ld != null ? <><a href={data.projects[id].links.ld}> Ludum Dare Page </a><br/></> : <></>}
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
                    <Card className="card_style" title={<h1 className="card_style">{data.projects[id].name}</h1>}>
                        <h3 className="project_type"> {data.projects[id].type}</h3>
                        <h4 className="project_date"> {data.projects[id].date}</h4>                
                        <p className="project_description">{this.getDescription(id)}</p>
                        {data.projects[id].links != null ? (<><Card title={<h1 className="link_header">Links</h1>}className="link_card">{this.getLinks(id)}</Card><br/></>) : null}
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