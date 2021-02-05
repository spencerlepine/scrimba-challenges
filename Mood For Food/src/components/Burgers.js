import React from "react"

function Burgers() {
    const burgerCount = 40;
    const burgerList = []
    for (let i = 0; i < burgerCount; i++) {
        burgerList.push(<div key={i} className="burger"><p>🍔</p></div>)
    }

    return (
        <div className="burgerLine">
            <div className="burger">
                <p>🍔</p>
            </div>
            {burgerList}
        </div>
    )
}

export default Burgers