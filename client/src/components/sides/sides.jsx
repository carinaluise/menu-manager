import React from 'react';
import './sides.styles.css';

const Sides = ({menu}) => {

    return(<div id="sides">
    
    
            <h4>SIDES</h4>
            <div className="flex-container">
            {menu.sides.map(side => {
                return(<div className="side">
                    <h5>{side.name}</h5>
                    <p className="price">${side.price.toFixed(2)}</p>
                </div>)
            })}
            </div>

        </div>
   

        
        

    )
}

export default Sides;