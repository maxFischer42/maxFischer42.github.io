import * as React from 'react';
import { Component } from 'react';
import { Header } from './Header';
import { Section } from './Section';
import data from './SectionInfo';
import { ColoredLine } from './Shapes';
import { Sidebar } from './Sidebar';
import { PageInfo } from './PageInfo'
import { Link, animateScroll as scroll } from "react-scroll";
import { Button } from "antd"
import {isMobile} from 'react-device-detect';

export class Page extends Component {
    constructor(props) {
        super(props)
        this.state = {
            viewOnMobile: false,
        }
    }

    toggleOffMobileScreen = () => {
        this.setState({viewOnMobile: true});
    }

    handlePage() {
        var sections = data.sections.map((section) => 
            <>
                <div>
                    <Section
                        title={section}
                        dark={true}
                        id={section}
                    />
                </div>
                <br/>                
                {ColoredLine("white", 1, "100%")}
            </>);

        return(
            <div>
                <div className='gradient_background'/>
            <div>
                <Sidebar/>
                <div className="wrapper">                    
                    <Header />
                    <h1>Max Fischer Portfolio</h1>
                    {ColoredLine("white", 1, "1000px")}
                    <br/>
                    {sections}
                    <div>
                        {data["about"]}
                    </div>
                </div>   
                <Link
                    className="pather"
                    activeClass="active"
                    to="header"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={900}>
                        <Button className='back_to_top'>Back to top</Button>
                </Link>
            </div>            
            </div>
        )
    }

    handleMobileView() {
        if(isMobile) {
            if(this.state.viewOnMobile == false) {
                return(
                    <div className='mobile_warning'>
                        This page is intended to view on a Desktop device. Viewing on mobile devices will result in the page breaking.
                        <br/>
                        <Button onClick={this.toggleOffMobileScreen}>Continue</Button>
                    </div>
                )
            } else {
                return this.handlePage()
            }
        } else {
            return this.handlePage()
        }
    }

    render() {
        return(
            this.handleMobileView()
        )
    }
}

