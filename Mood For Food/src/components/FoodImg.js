import React, { Component } from "react"
import ImgInfo from "./ImgInfo"
import Source from "./Source"

class FoodImg extends Component {
    render() {
        return (
            <div style={{textAlign: "center"}}>
                <img className="burgerImg" src={this.props.source}></img>
                <ImgInfo storeVote={this.props.storeVote} source={this.props.source} id={this.props.id} vote={this.props.vote} />
            </div>
        )
    }
}

export default FoodImg