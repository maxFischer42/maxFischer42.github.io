import React from "react";
import { Component } from "react";
import "../style.css";
import { Card } from "antd";

export class Contact extends Component {
    render() {
        return(
            <div>
                <p>
                <a className="email_style" href="mailto:contact.maxfischer@gmail.com?cc=maxfischer072@gmail.com">Business Email</a> <br/> <br/>
                <a className="email_style" href="mailto:maxfischer072@gmail.com">Additional Email</a> <br/>
                </p>
            </div>
        );
    }
}