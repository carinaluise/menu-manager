import React from 'react';
import './table.styles.css';
import axios from 'axios'


class MenuTable extends React.Component{
    constructor(){
        super()
        this.state ={
            name: "",
            price: 0,
            description: "",
            update: false
        }

       
       
        this.handleDelete = this.handleDelete.bind(this);
        // this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    // handleUpdate(Id, Data){
    //     axios.patch(`/${this.props.url}/${Id}`, Data)
    //     .then(res => {
    //         console.log(res)
    //     })
    //     .catch(err =>{
    //         console.log(err)
    //     })
    // }

    handleChange = (event) => this.setState({
        [event.target.name]: event.target.value
    });

    handleSubmit = (event)=> {
        event.preventDefault();

        const {name, price, description} = this.state;
        const data ={
            name,
            price,
            description
        };

        axios
             axios.post(`/${this.props.url}`, data)
                .then(res => {
                    this.setState({update: true})
                })
                .catch(err =>{
                    console.log(err)
                })
        }
    


    render(){

    const {category , items} = this.props;
    const {name, price, description, update} = this.state;

    return(
            <div>
                <table className="table custom-table">
                {update ? <tr>Updated!</tr> : null}
                    <thead>
                        <tr>
                            <th>{category.toUpperCase()}</th>
                        </tr>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            {category != "Drinks" ? <th>Description</th> : <th></th>}
                            <th>Picture</th>
                          
                            
                        </tr>
                    </thead>
                    <tbody>
                    {items.map((item)=>{
                      const Id = item._id;
                        return(
                            <tr>
                            <td >{item.name}</td>
                            <td >{item.price.toFixed(2)}</td>
                            <td >{item.description}</td>
                            <td></td>
                            <td><button onClick={() => this.handleDelete(Id)}>delete</button></td>
                            {/* <td><button onClick={() => this.handleUpdate(Id, Data)}>update</button></td> */}
                            </tr>
                        )
                    })} 
                    </tbody>
                </table>

                
                <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" value={name} onChange={this.handleChange}></input>
                <input type="text" name="price" value={price} onChange={this.handleChange}></input>
                <input type="text" name="description" value={description} onChange={this.handleChange}></input>
              
                <button type="submit"> + Add new Item</button>
                </form>


            </div>
        )
    }
 
}
    



export default MenuTable;













