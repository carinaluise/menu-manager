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
        }

       
       
        this.handleDelete = this.handleDelete.bind(this);
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
                    this.setState({
                        name: "",
                        price: "",
                        description: ""
                    })
                })
                .catch(err =>{
                    console.log(err)
                })
        }
    


    render(){

    const {category , items} = this.props;
    const {name, price, description} = this.state;

    return(
            <div>
                <table id="custom-table">
                    <thead>
                        <tr>
                            <th>{category.toUpperCase()}</th>
                        </tr>
                        <tr>
                            <th>Item</th>
                            <th>Price($)</th>
                            {category != "Drinks" && category != "Sides" ? <th>Description</th> : <th></th>}
                            {category != "Drinks" && category != "Sides" ? <th></th> : null}

                        </tr>
                    </thead>
                    <tbody>
                    {items.map((item)=>{
                      const Id = item._id;
                        return(
                            <tr>
                            <td >{item.name}</td>
                            <td >{item.price.toFixed(2)}</td>
                            {category != "Drinks" && category !="Sides" ? <td >{item.description}</td> : null}
                            <td><button className="custom-table-button" onClick={() => this.handleDelete(Id)}>delete</button></td>
                            </tr>
                        )
                    })} 
                    </tbody>
                </table>

                
                <form id="custom-table-form" onSubmit={this.handleSubmit}>
                <input placeholder="item name" className="custom-table-input" type="text" name="name" value={name} onChange={this.handleChange}></input>
                <input placeholder="item price" className="custom-table-input" type="text" name="price" value={price} onChange={this.handleChange}></input>
                {category != "Drinks" && category != "Sides" ? <input placeholder="item description" className="custom-table-input" type="text" name="description" value={description} onChange={this.handleChange}></input> : null}
                
              
                <button type="submit"> + Add </button>
                </form>


            </div>
        )
    }
 
}
    



export default MenuTable;













