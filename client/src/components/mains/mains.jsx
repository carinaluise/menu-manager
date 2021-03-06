import React from 'react';
import './mains.styles.css';
import Navigation from '../menu-navigation/menu-navigation';

const Mains = ({menu}) => {

    return(<div id="mains">
    <div className="row-container">
    <div className="column-left">
            <h4>Mains</h4>
            {menu.mains.map(main => {
                return(<div>
                <div className="info-container">
                    <h5>{main.name}</h5>
                    <p className="price">${main.price.toFixed(2)}</p>
                </div>
                    <p className="description">{main.description}</p>
                
                </div>)
            })}

        </div>
        <div className="column-right">
            <img className="foodpic" src="../../../foodpic-1b.jpg"></img>
        </div>
        
    </div>
    </div>)
}

export default Mains;

