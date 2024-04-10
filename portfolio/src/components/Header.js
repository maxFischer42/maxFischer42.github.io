import * as React from 'react';
import { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import data from './SectionInfo';
import { Button } from "antd"
import "../style.css"

export class Header extends Component {
    render() {
        var tags = data.sections.map((section) =>
            <li className='header_item'>   
                <Link
                    className="pather"
                    activeClass="active"
                    to={section}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={100}>
                        <Button className='sidebar_button'>{section}</Button>
                </Link>
            </li>
        );

      return (
          <div className='header_content'>
            <ul className='header_list'>                                 
                {tags}
            </ul>
          </div>
      );
    }
  }