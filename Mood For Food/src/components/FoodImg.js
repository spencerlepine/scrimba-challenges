import React, { Component } from "react"
 
// Display a food image

class FoodImg extends Component {
    render() {
        return (
            <img className="burgerImg" src={this.props.source}></img>
        )
    }
}

export default FoodImg