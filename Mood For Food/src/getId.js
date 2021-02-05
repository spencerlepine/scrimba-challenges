function parseLink(imgLink) {
    // Parse out the ID of the food image
    const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let id = '';
    let index = 0;
    
    // Skip past '0.jpg'
    for (let i = imgLink.length-5; i > 0; i--) {
        if (nums.includes(imgLink[i]) == false) {
            index = i;
            break
        }
    }
    
    // Start from the farthest left, since there should be letters to the left
    for (let a = index + 1; a < imgLink.length-4; a++) {
        id += imgLink[a]
    }

    return parseInt(id);
}

export default parseLink
