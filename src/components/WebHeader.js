import React, { Component } from 'react';
import "../custom.css";

export class WebHeader extends Component {
    render() {
        return (
            <header className = "header">
                <label>Max Fischer</label>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/portfolio">Portfolio</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/games">Games</a></li>
                        <li><a href="/objective">Objective</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}