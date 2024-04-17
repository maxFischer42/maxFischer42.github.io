import React from "react";
import { Component } from "react";
import { Skills } from "./SkillsSection";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { Card } from "antd"

export class About extends Component {
    render() {
        return(
            <div>
                <div className="about_left">
                    <div className="about_content">
                        <h2> Hi, I'm Max Fischer </h2><br/>
                        <h3>I'm a Software Engineer and independent Game Designer</h3><br/>
                        <h3>I've been programming for the last ten years, be it general applications, homework assignments, or games.</h3><br/>
                        <h3>This site is a collection of some of my best work.</h3><br/>
                        <div className="about_links">
                            <Card className="about_link_card" title={<label className="about_link_card_title">Links</label>}>
                                <IoLogoLinkedin />
                                <a href="https://www.linkedin.com/in/max-fischer72/">LinkedIn </a>
                                <br/>
                                <IoLogoGithub />
                                <a href="https://github.com/maxFischer42">Github </a>
                                <br/>
                                <a href="https://monadokami.itch.io">Itch.io</a>
                                <br/>
                                <a href="https://docs.google.com/document/d/1Jvi1ZUb_PqNzOiD7BCuycFscLG6u_ZKt/edit?usp=sharing&ouid=104650230237681519173&rtpof=true&sd=true">Resume</a>
                                <br/>
                                <a href="https://docs.google.com/document/d/1OXkFU_Graw45ha01WAM6k9p5sSl14nRNoXgyhVRjYKI/edit?usp=sharing">Resume/CV</a>                            
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