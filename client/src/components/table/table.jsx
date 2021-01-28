import React from 'react';
import './table.styles.css';
import axios from 'axios';

const MenuTable = ({menuData}) => {
    console.log(menuData);
    return(<div>
    
    
    {menuData.map(category =>{

       return(
        <table className="table custom-table">
        <thead>
            <tr>
                <th>{category.name.toUpperCase()}</th>
            </tr>
            <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Ingredients</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {category.items.map(item =>{
               
                return(
                    <tr>
                        <td>{item.name}</td>
                        <td>${item.price}</td>
                        <td>{item.ingredients.join(", ")}</td>
                        <td><button>delete</button></td>
                    </tr>
                )
            })}
        </tbody>
        </table>        
       )
       
    })}      
    </div>)
}



export default MenuTable;