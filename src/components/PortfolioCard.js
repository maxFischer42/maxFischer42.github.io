import '../style.css';
import React, { Component } from 'react';
import { Button, Input, Carousel, Card } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

const contentStyle = {
    margin: 0,
    height: '320px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    align: 'center',
  };

export class PortfolioCard extends Component {

    constructor(props) {
        super(props);
        /*
            portfolioTitle
            portfolioSubTitle
            portfolioImages
            portfolioItch
            portfolioGitHub
        */
    }

    render() {
        var img = this.props.portfolioImages ? 
            [this.props.portfolioImages[0], 
            this.props.portfolioImages[1], 
            this.props.portfolioImages[2], 
            this.props.portfolioImages[3]] : null;
        return(
            <Card title={this.props.portfolioTitle}>
                {this.props.portfolioImages ? <PortfolioImages images={img}/> : <div></div>}
                {this.props.portfolioSubTitle ? <h6>{this.props.portfolioSubTitle}</h6> : <div></div>}
                {this.props.portfolioGitHub ? <div><GithubOutlined /><a href={this.props.portfolioGitHub}> Github</a></div> : null}
                {this.props.portfolioItch ? <div><a href={this.props.portfolioItch}> Itch</a></div> : null}
            </Card>
        );
    }
}

export class PortfolioImages extends Component {
    constructor(props) {
        super(props);
        /*
            images[]
        */
    }

    render() {
        return(
            <Carousel>
                <div>
                    <img src={this.props.images[0]} style={contentStyle}/>
                </div>
                <div>
                    <img src={this.props.images[1]} style={contentStyle}/>
                </div>
                <div>
                    <img src={this.props.images[2]} style={contentStyle}/>
                </div>
                <div>
                    <img src={this.props.images[3]} style={contentStyle}/>
                </div>
            </Carousel>
        );
    }
}