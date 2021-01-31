import React from 'react';
import MenuOpening from '../../components/menu-opening/menu-opening';
import Starters from '../../components/starters/starters';
import Mains from '../../components/mains/mains';
import Drinks from '../../components/drinks/drinks';
import Sides from '../../components/sides/sides';
import Desserts from '../../components/desserts/desserts';
import Specials from '../../components/specials/specials';
import axios from 'axios';
import HeaderNavigation from '../../components/header-navigation/header-navigation';
import MenuNavigation from '../../components/menu-navigation/menu-navigation';

import './menu.styles.css';

class MenuPage extends React.Component{
    constructor(){
        super()
        this.state={
            mains: [],
            starters: [],
            drinks: [],
            sides: [],
            desserts: [],
            specials: [],
        }
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




    render(){
    return(<div id="menu-page">
        
        <HeaderNavigation></HeaderNavigation>
        <MenuOpening></MenuOpening>
        <MenuNavigation></MenuNavigation>
        <Starters menu={this.state}></Starters>
        <Mains menu={this.state}></Mains>
        <Sides menu={this.state}></Sides>
        <Drinks menu={this.state}></Drinks>
        {this.state.specials.length > 0 ? <Specials menu={this.state}></Specials> : null}
        {this.state.desserts.length > 0 ? <Desserts menu={this.state}></Desserts> : null} 
        </div>
        )



    }
}

export default MenuPage;