import * as React from 'react';
import { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import data from './SectionInfo';
import "../style.css";
import { Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"

export class SidebarButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setValue: this.props.value,
        }
    }

    render() {
        var icon = this.props.status ?  <MenuFoldOutlined className="icon"/> : <MenuUnfoldOutlined className="icon"/>;
        return(
            <div>
                <Button onClick={this.props.callback}>{icon}</Button>
                
            </div>
        );
    }
}


export class SidebarOpen extends Component {
    render() {
        var tags = data.sections.map((section) =>
            <li>   
                <Link
                    className="pather"
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
        <nav id="sidebar" >
            <div className='background'>
                <ul >                                 
                    {tags}
                </ul>
            </div>
        </nav>
      );
    }
    
}

export class SidebarClosed extends Component {
    render() {
        return(
            <div>

            </div>
        );
    }
}

export class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
        }
        this.updateMenu = this.updateMenu.bind(this);
    }

    updateMenu() {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }

    render() {
        var menu = this.state.isOpen ? <SidebarOpen/> : <SidebarClosed/>
        return(
            <div className="sidebar">
                {menu}
                <SidebarButton status={this.state.isOpen} value={!this.state.isOpen} callback={this.updateMenu}/>
            </div>
        );
    }
}