import React from 'react';
import './sides.styles.css';

const Sides = ({menu}) => {

    return(<div id="sides">
    <div className="row-container">
    <div className="column-left">
            <h4>Sides</h4>
            {menu.sides.map(side => {
                return(<div>
                <div className="info-container">
                    <h5>{side.name}</h5>
                    <p className="price">${side.price.toFixed(2)}</p>
                </div>
                    <p className="description">{side.description}</p>
                
                </div>)
            })}

        </div>
        <div className="column-right">

        </div>
        
    </div>
    </div>)
}

export default Sides;