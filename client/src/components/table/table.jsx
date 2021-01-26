import React from 'react';

const MenuTable = ({cat}) => {
 
    return(<div>
        <table>
            <tr>
                <th>Item Name</th>
                <th>Item Id</th>
                <th>Item Price</th>
                <th>{cat}</th>
            </tr>
            <tr>
            <td></td>
            {/* // MAP THROUGH PROPS/DATA and place in <td></td> */}
            </tr>   
        </table>
    </div>)
}



export default MenuTable;