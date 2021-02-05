function parseLink(imgLink) {
    // Parse out the ID of the food image
    const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let id = '';
    
    // Skip past '_.jpg'
    for (let i = imgLink.length-5; i > 0; i--) {
        if (!nums.includes(imgLink[i])) {
            for (let a = i+1; a < imgLink.length-5; a++) {
                id.push(imgLink[a]);
            }
            break
        }
    }
    
    return int(id);
}

export default parseLink
