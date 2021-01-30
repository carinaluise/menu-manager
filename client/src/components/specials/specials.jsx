import React from 'react';
import './specials.styles.css'

const Specials = ({menu}) => {

    return(<div id="specials">
    <div className="row-container">
        <div className="column-left">

        </div>
        <div className="column-right">
            <h4>Specials</h4>
            {menu.specials.map(special => {
                return(<div>
                <div className="info-container">
                    <h5>{special.name}</h5>
                    <p className="price">${special.price.toFixed(2)}</p>
                </div>
                    <p>{special.description}</p>
                
                </div>)
            })}

        </div>
    </div>
    </div>)
}

export default Specials;