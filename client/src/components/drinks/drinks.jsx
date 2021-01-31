import React from 'react';
import './drinks.styles.css';

const Drinks = ({menu}) => {

    return(<div id="drinks">
    
    
            <h4>Drinks</h4>
            <div className="flex-container">
            {menu.drinks.map(drink => {
                return(<div className="drink">
                    <h5>{drink.name}</h5>
                    <p className="price">${drink.price.toFixed(2)}</p>
                </div>)
            })}
            </div>

            {/* <img className="drinks-img" src="../../../menu-drinks-b.jpg"></img> */}

        </div>
   

        
        

    )
}

export default Drinks;