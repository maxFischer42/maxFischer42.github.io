import React from "react";
import { Component } from "react";
import { Skills } from "./SkillsSection";
import { IoLogoGithub } from "react-icons/io";
import { Card } from "antd"

export class About extends Component {
    render() {
        return(
            <div>
                <div className="about_left">
                    <div className="about_content">
                        <h2> Hi, I'm Max Fischer </h2><br/>
                        <h3>I'm a Software Engineer and independant Game Designer</h3><br/>
                        <h3>I've been programming for the last ten years, be it general applications, homework assignments, or games.</h3><br/>
                        <h3>This site is a collection of some of my best work.</h3><br/>
                        <div className="about_links">
                            <Card className="about_link_card" title={<label className="about_link_card_title">Links</label>}>
                                <IoLogoGithub />
                                <a href="https://github.com/maxFischer42">Github </a>
                                <br/>
                                <a href="https://monadokami.itch.io">Itch.io</a>
                                <br/>
                            </Card>
                        </div>
                        <br/>

                    </div>
                </div>
                <div className="about_right">
                    <Skills/>
                </div>
                <br/>
            </div>
        );
    }
}