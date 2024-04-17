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

export class Page extends Component {
    render() {

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
}

