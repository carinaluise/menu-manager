import React from 'react';
import './desserts.styles.css';

const Desserts = ({menu}) => {

    return(<div id="desserts">
    <div className="row-container">
    <div className="column-left">
            <h4>Desserts</h4>
            {menu.desserts.map(dessert => {
                return(<div>
                <div className="info-container">
                    <h5>{dessert.name}</h5>
                    <p className="price">${dessert.price.toFixed(2)}</p>
                </div>
                    <p className="description">{dessert.description}</p>
                
                </div>)
            })}

        </div>
        <div className="column-right">
        <img className="foodpic" src="../../../menu-desserts-b.jpg"></img>

        </div>
        
    </div>
    </div>)
}

export default Desserts;

