import React from 'react';
import MenuTable from '../../components/table/table';
import axios from 'axios'

class MenuManagerPage extends React.Component {
    constructor(){
        super()
        this.state={
            mains: [],
            starters: [],
            drinks: []
        }
    }

    componentDidMount(){
        
        axios.all([
            axios.get('/mains'),
            axios.get('/starters'),
            axios.get('/drinks')
        ])
            .then(axios.spread((mains, starters, drinks) => {
                this.setState({mains: mains.data , starters: starters.data, drinks: drinks.data})
            }))
            .catch(err =>{
                console.log(err)
            })
    }

    render(){

   const {mains, starters, drinks} = this.state;
  
    
    return(<div>
    
    <MenuTable url="mains" category="Main Dishes" items={mains}></MenuTable>
    <MenuTable url="starters" category="Starter Dishes" items={starters}></MenuTable>
    <MenuTable url="drinks" category="Drinks" items={drinks}></MenuTable>
    
    
    </div>)
    }
}

export default MenuManagerPage;