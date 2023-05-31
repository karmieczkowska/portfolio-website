import "../styles/HeroSection2.css"

import React, { Component } from 'react'

class HeroSection2 extends Component {
    render() {
        return (
            <div className="hero-section">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default HeroSection2