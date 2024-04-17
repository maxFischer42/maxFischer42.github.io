import * as React from 'react';
import { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import data from './SectionInfo';
import "../style.css";
import { Button, Card } from 'antd';
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
                <Button className="button" onClick={this.props.callback}>{icon}</Button>
                
            </div>
        );
    }
}


export class SidebarOpen extends Component {
    render() {
        var tags = data.sections.map((section) =>
            <li className='sidebar_list_item'>           
                <div className='header_button_div'>        
                    <Link
                        className="pather"
                        activeClass="active"
                        to={section}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                            <Button className='sidebar_button'>{section}</Button>
                            
                    </Link>
                </div>
            </li>
        );

      return (
        <nav id="sidebar" >
            <div className='sidebar_div'>
            <Card className='background' title={<h1 className='sidebar_title'>Quick Travel</h1>}>
                <ul className="sidebar_list">                                 
                    {tags}
                </ul>
            </Card>
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
            <div>
                <div className="sidebar">
                    {menu}
                    <SidebarButton status={this.state.isOpen} value={!this.state.isOpen} callback={this.updateMenu}/>
                </div>
            </div>
        );
    }
}