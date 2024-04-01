import '../style.css';
import React, { Component } from 'react';
import { Button, Input } from 'antd';
import { Explore } from "./Explore";
import { NavMenu } from './NavMenu';
import { Link } from 'react-router-dom';
import { BusinessCard } from './BusinessCard';
import { Logo } from './Logo';
import { WebHeader } from './WebHeader';
import { PortfolioCard } from './PortfolioCard';

export class Portfolio extends Component {

  render() {
    return (
      <div>
        <PortfolioCard 
          portfolioTitle = "Relics" 
          portfolioImages={[
            "https://img.itch.zone/aW1hZ2UvMjI5NDEzNC8xMzU5NTI1NS5wbmc=/original/YDZXJw.png",
            "https://img.itch.zone/aW1hZ2UvMjI5NDEzNC8xMzU5NTI1OS5wbmc=/original/XB03xC.png",
            "https://img.itch.zone/aW1hZ2UvMjI5NDEzNC8xMzU5NTI2MC5wbmc=/original/JnRqll.png",
            "https://img.itch.zone/aW1hZ2UvMjI5NDEzNC8xMzU5NTI1Ni5wbmc=/original/XeHT2A.png"]} 
          portfolioSubTitle="Ludum Dare 54 Project" 
          portfolioGitHub="https://github.com/maxFischer42/LudumDare54"
          portfolioItch="https://monadokami.itch.io/relics"
        />
      </div>
    );
  }
}