# Mood for Food Challenge

[screenshot]

**Theme:** Ceate an app that connects to the Foodish API and use the data somewhere.

**Description:** I have created a React app that displays a random Burger image from the Foodish API. 
- Press the button to generate/retrieve a NEW burger image. 
- Vote (locally) wether you would eat it!
 
# Explanation:
### App Structure:
The `<App />` component is used to display everything and handle events. 

Components rendered include:
- `<Title />`  - (app header)
- `<FetchPicture />`  - (button elem)
- `<FoodImg />`  - (burger img)

App also contains three methods:
- `foodishFetch` : execute the fetch call
- `storeVote` : save the users vote to the state of `<App />`
- `retreiveVote` : access the `state.votes` array

### Foodish API:
Send a request for a random burger image to the Foodish API:

    async foodishFetch() {
	    const response =  await fetch('https://foodish-api.herokuapp.com/api/images/burger')
	    .then((success) => { return success })
	    .catch((error) => { return error });
	    
	    const json =  await response.json();
	    this.setState({ imgLink: json.image,  imgId: parseLink(json.image)})
    }

### Voting system:
- Render the 'Yum' and 'Yuck' buttons
- Check to see if the user already voted on this burger
- Update the background colors of the div
- Store new votes in `<App />` state

### API data:
- Button is pressed -> initiate *fetch* call
- Receive object: `{ image:  'foodish-api/burger123.jpg'}`
- Save the link in `<App />` state
- Parse the burger image Id from the link (plus store it)
- Send link and Id as `props` to child elements
