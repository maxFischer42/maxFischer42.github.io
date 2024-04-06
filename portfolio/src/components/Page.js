import * as React from 'react';
import { Component } from 'react';
import { Header } from './Header';
import { Section } from './Section';
import data from './SectionInfo';
import { ColoredLine } from './Shapes';
import { Sidebar } from './Sidebar';

export class Page extends Component {
    render() {

        var sections = data.sections.map((section) => 
            <>
                <Section
                    title={section}
                    dark={true}
                    id={section}
                />
                {ColoredLine("white", 1)}
            </>);

        return(
            <div className="wrapper">
                <Header />
                <Sidebar/>
                {sections}
                <div>
                    {data["about"]}
                </div>
            </div>
        )
    }
}

