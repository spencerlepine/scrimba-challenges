import React, { Component } from "react"

class FetchPicture extends Component {
    render() {
        return (
            <div className="burgerBtn">       
                <button onClick={this.props.apiCall}>
                     More Burgers!
                </button>
            </div>
        )
    }
}

export default FetchPicture