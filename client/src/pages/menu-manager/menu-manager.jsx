import React from 'react';
import MenuTable from '../../components/table/table';
import Category from '../../components/category/category';
import axios from 'axios'


class MenuManagerPage extends React.Component {
    constructor(){
        super()
        this.state={
            mains: [],
            starters: [],
            drinks: [],
            sides: [],
            sidesS : false,
            desserts: [],
            dessertsS: false,
            specials: [],
            specialsS: false     
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        
        axios.all([
            axios.get('/mains'),
            axios.get('/starters'),
            axios.get('/drinks'),
            axios.get('/sides'),
            axios.get('/desserts'),
            axios.get('/specials')
        ])
            .then(axios.spread((mains, starters, drinks, sides, desserts, specials) => {
                this.setState({mains: mains.data , starters: starters.data, drinks: drinks.data, sides: sides.data, desserts: desserts.data, specials : specials.data})
            }))
            .catch(err =>{
                console.log(err)
            })
    }

    handleClick(e){
        console.log(e.target.name)
        this.setState({[e.target.name] : true});
    }


    render(){

   const {mains, starters, drinks, sides, sidesS, desserts, dessertsS, specials, specialsS} = this.state;
   let optionalSides;
   let optionalDesserts;
   let optionalSpecials;

   if(sidesS === true | sides.length > 0){
     optionalSides =  <MenuTable url="sides" category="Sides" items={sides}></MenuTable>
   } else {
    optionalSides = null;
   }
   if(dessertsS === true | desserts.length > 0){
    optionalDesserts =  <MenuTable url="desserts" category="Desserts" items={desserts}></MenuTable>
  } else {
   optionalDesserts = null;
  }
  if(specialsS === true | specials.length > 0){
    optionalSpecials =  <MenuTable url="specials" category="Specials" items={specials}></MenuTable>
  } else {
   optionalSpecials = null;
  }
   
  
    
    return(<div>
    
    <MenuTable url="mains" category="Main Dishes" items={mains}></MenuTable>
    <MenuTable url="starters" category="Starter Dishes" items={starters}></MenuTable>
    <MenuTable url="drinks" category="Drinks" items={drinks}></MenuTable>
    {optionalSides}
    {optionalDesserts}
    {optionalSpecials}
  

    <button onClick={this.handleClick} name="sidesS"> + New Sides Category</button>
    <button onClick={this.handleClick} name="dessertsS"> + New Desserts Category</button>
    <button onClick={this.handleClick} name="specialsS"> + New Specials Category</button>
    
    </div>)
    }
}

export default MenuManagerPage;