import React, { Component } from "react"
import Title from "./components/Title"
import FetchPicture from "./components/FetchPicture"
import FoodImg from "./components/FoodImg"
import ImgInfo from "./components/ImgInfo"
import Burgers from "./components/Burgers"
import parseLink from "./getId"

class App extends Component {
    constructor() {
        super();
        this.state = {
            imgLink: 'https://i.pinimg.com/originals/10/b2/f6/10b2f6d95195994fca386842dae53bb2.png',
            imgId: ''
        }
        this.foodishFetch = this.foodishFetch.bind(this)
    }
    
    async foodishFetch() {
        const r = parseLink('123.jpg');
        console.log(r);
        
        const response = await fetch('https://foodish-api.herokuapp.com/api/images/burger')
        .then((success) => { return success })
        .catch((error) => { return error });
        
        const json = await response.json();
        this.setState({ imgLink: json.image }) // imgId: getId(json.image)
        //console.log(getId(json.image));
    }
    
    componentDidMount() {
        this.foodishFetch()
    }
    
    render() {
        return (
            <div>
                <div className="mainContent">
                    <Title />
                    <FetchPicture apiCall={this.foodishFetch} />
                    <br />
                    <FoodImg source={this.state.imgLink} />
                    <ImgInfo imgLink={this.state.imgLink} /> 
                </div>
                <Burgers />
            </div>
        )
    }
}

export default App