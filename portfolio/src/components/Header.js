import * as React from 'react';
import { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import data from './SectionInfo';

export class Header extends Component {
    render() {
        var tags = data.sections.map((section) =>
            <li>   
                <Link
                    activeClass="active"
                    to={section}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={100}>
                        {section}
                </Link>
            </li>
        );

      return (
        <nav id="header">
          <div >
            <ul >                                 
                {tags}
            </ul>
          </div>
        </nav>
      );
    }
  }