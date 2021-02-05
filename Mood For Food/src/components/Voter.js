import React, { Component } from "react"
        
class Voter extends Component {    
    constructor() {
        super()
        this.state = {
            'vote': 0,
            'id': -1
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick({ target }) { 
        let newVote = (target.innerText == 'Yum! 😋') ? 1 : -1;

        this.props.storeVote(newVote, this.props.id)
        
        this.setState({ vote: newVote, id: this.props.id })
    }
    
    componentDidMount() {
        this.setState({ vote: this.props.vote, id: this.props.id })
    }
    
    render() {
        let yumStyle = {};
        let yuckStyle = {};
        
        yumStyle = {backgroundColor: (this.state.vote == 1) ? "#B0FF64" : "#f6f6f6"}
        yuckStyle = {backgroundColor: (this.state.vote == -1) ? "#FF7C46" : "#f6f6f6"}
        
        // The image has changed
        if (this.state.id != this.props.id) {
            yumStyle = {backgroundColor: "#f6f6f6"}
            
            yuckStyle = {backgroundColor: "#f6f6f6"}
            
            // Use the vote to pick 1 IF THERE IS A VOTE
            yumStyle = {backgroundColor: (this.props.vote == 1) ? "#B0FF64" : "#f6f6f6"}
            yuckStyle = {backgroundColor: (this.props.vote == -1) ? "#FF7C46" : "#f6f6f6"}
        }
        
        return (
            <div className="voterBox">
                <div style={yumStyle} 
                     onClick={this.handleClick} className="voter">
                    <p>Yum! 😋</p>
                </div>
                <div style={yuckStyle} 
                     onClick={this.handleClick} className="voter">
                    <p>Yuck! 🤢</p>
                </div>
            </div>
        )
    }
}

export default Voter