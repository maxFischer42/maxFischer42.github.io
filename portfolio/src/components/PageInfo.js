import React from "react";
import { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export class PageInfo extends Component {
    render() {
        return(
            <p>
                This page is a ReactJS site that I developed myself to serve as my own portfolio.
                The repository for this page can be found in the <Link
                                                className="pather"
                                                activeClass="active"
                                                to="Past Projects"
                                                spy={true}
                                                smooth={true}
                                                offset={-70}
                                                duration={100}>
                                                    Past Projects section
                                            </Link>
            </p>
        );
    }
}