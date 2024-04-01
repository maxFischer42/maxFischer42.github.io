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
                        <li><a href="/portfolio.html">Portfolio</a></li>
                        <li><a href="/projects.html">Projects</a></li>
                        <li><a href="/games.html">Games</a></li>
                        <li><a href="/objective.html">Objective</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}