import React from 'react';
import './starters.styles.css'


const Starters = ({menu}) => {
    console.log(menu)
    return(<div id="starters">
    <div className="row-container">
        <div className="column-left">
        <img className="foodpic" src="../../../menu-specials-b.jpg"></img>

        </div>
        <div className="column-right">
            <h4>Starters</h4>
            {menu.starters.map(starter => {
                return(<div>
                <div className="info-container">
                    <h5>{starter.name}</h5>
                    <p className="price">${starter.price.toFixed(2)}</p>
                </div>
                    <p>{starter.description}</p>
                
                </div>)
            })}

        </div>
    </div>
    </div>)
}

export default Starters;