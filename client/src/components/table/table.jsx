import React from 'react';
import './table.styles.css';
import axios from 'axios'


class MenuTable extends React.Component{
    constructor(){
        super()
        this.state ={

        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }


  handleDelete(Id){
    axios.delete(`/${this.props.url}/${Id}`)
    .then(res => {
        console.log(res)
    })
    .catch(err =>{
        console.log(err)
    })
    }

    handleUpdate(Id, Data){
        axios.patch(`/${this.props.url}/${Id}`, Data)
        .then(res => {
            console.log(res)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    // handleAdd(){
    //     window.prompt("Item name", "Price", "Description");
    //     // axios.post(`/${this.props.url}`, Data)
    //     // .then(res => {
    //     //     console.log(res)
    //     // })
    //     // .catch(err =>{
    //     //     console.log(err)
    //     // })
    // }
    


    render(){

    const {category , items} = this.props;
    return(
            <div>
                <table className="table custom-table">
                    <thead>
                        <tr>
                            <th>{category.toUpperCase()}</th>
                        </tr>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            {category != "Drinks" ? <th>Description</th> : <th></th>}
                          
                            
                        </tr>
                    </thead>
                    <tbody>
                    {items.map(item=>{
                      const Id = item._id;
                        return(
                            <tr>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <td>{item.description}</td>
                            <td><button onClick={() => this.handleDelete(Id)}>delete</button></td>
                            <td><button onClick={() => this.handleUpdate(Id, Data)}>update</button></td>
        
                        </tr>
                        )
                    })}
                    <tr></tr>
                    <td><button onClick={this.handleAdd}> + Add new Item</button></td>

                    
                    </tbody>
                </table>
            </div>
        )
    }
 
}
    



export default MenuTable;













