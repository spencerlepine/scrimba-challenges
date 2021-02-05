import React, { Component } from "react"
import Source from "./Source"
import Voter from "./Voter"

class ImgInfo extends Component {
    render() { 
        return (
            <div className="imgInfo">
                <Voter id={this.props.id} vote={this.props.vote} storeVote={this.props.storeVote} />
                <Source link={this.props.source} />
            </div>
        )
    }
}

export default ImgInfo