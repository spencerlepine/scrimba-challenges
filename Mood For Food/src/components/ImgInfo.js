import React, { Component } from "react"
import Source from "./Source"

class ImgInfo extends Component {
    render() {
        return (
            <div className="imgInfo">
                <Source link={this.props.imgLink} />
                <div className="voter">
                    <p>Yum! 😋</p>
                </div>
                <div className="voter">
                    <p>Yuck! 🤢</p>
                </div>
            </div>
        )
    }
}

export default ImgInfo