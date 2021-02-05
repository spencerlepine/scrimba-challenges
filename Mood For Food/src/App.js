import React, { Component } from "react"
import Title from "./components/Title"
import FetchPicture from "./components/FetchPicture"
import FoodImg from "./components/FoodImg"
import ImgInfo from "./components/ImgInfo"
import Burgers from "./components/Burgers"
import parseLink from "./getId"
import templateVotes from "./templateVotes"

// To-do: 
//    - make parseLink work
//    - begin voting system
//    - store data in json file after vote (burger000)
//   - mutliple foods? Dropdown menu?
// Greta thunberg gif
// make sure it stores 0
// get rid of currentVote

class App extends Component {
    constructor() {
        super();
        this.state = {
            imgLink: 'https://i.pinimg.com/originals/10/b2/f6/10b2f6d95195994fca386842dae53bb2.png',
            imgId: '',
            votes: templateVotes
        }
        this.foodishFetch = this.foodishFetch.bind(this)
        this.storeVote = this.storeVote.bind(this)
        this.retrieveVote = this.retrieveVote.bind(this)
    }
    
    async foodishFetch() {
        const response = await fetch('https://foodish-api.herokuapp.com/api/images/burger')
        .then((success) => { return success })
        .catch((error) => { return error });
        
        const json = await response.json();
        console.log("Found an image, setting state now")
        this.setState({ imgLink: json.image, imgId: parseLink(json.image)})
    }
    
    componentDidMount() {
        this.foodishFetch()
    }
    
    storeVote(vote, id) {
        // Write 'vote' to 'this.props.burgerId'
        this.setState((prevState) => {
            let allVotes = prevState.votes
            allVotes[id-1] = vote

            return ({ votes: allVotes, currentVote: vote })
        })
    }
    
    retrieveVote(id) {
        return this.state.votes[id]
    }
    
    render() {        
        let thisId = this.state.imgId
        let imageElem = this.state.imgLink ?
            (<FoodImg source={this.state.imgLink} 
                    id={this.state.imgId}
                    storeVote={this.storeVote} 
                    retrieveVote={this.retrieveVote} 
                    vote={this.state.votes[thisId]} />) : (null)
                        
        return (
            <div>
                <div className="mainContent">
                    <Title />
                    <FetchPicture apiCall={ this.foodishFetch } />
                    <br />
                    {imageElem}
                </div>
                <Burgers />
            </div>
        )
    }
}

export default App