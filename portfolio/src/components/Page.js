import * as React from 'react';
import { Component } from 'react';
import { Header } from './Header';
import { Section } from './Section';
import data from './SectionInfo';

export class Page extends Component {
    render() {

        var sections = data.sections.map((section) => 
            <Section
                title={section}
                dark={true}
                id={section}
            />);

        return(
            <div className="App">
                <Header />
                {sections}
                <div>
                    {data["about"]}
                </div>
            </div>
        )
    }
}

