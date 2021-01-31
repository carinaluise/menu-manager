import axios from 'axios';
import React from 'react';
import './menu-navigation.styles.css'


class MenuNavigation extends React.Component{
    constructor(){
        super()
        this.state ={
            desserts: [],
            specials: []
        }
    }

    componentDidMount(){
        
        axios.all([
            axios.get('/desserts'),
            axios.get('/specials')
        ])
            .then(axios.spread((desserts, specials) => {
                this.setState({desserts: desserts.data, specials : specials.data})
            }))
            .catch(err =>{
                console.log(err)
            })
    }

   
    render(){
    return(<div id="navigation" className="sticky-top">
    
        <a href="/#starters">STARTERS</a>
        <a href="/#mains">MAINS</a>
        <a href="/#sides">SIDES</a>
        <a href="/#drinks">DRINKS</a>
        {this.state.specials.length > 0 ? <a href="/#specials">SPECIALS</a> : null}
        {this.state.desserts.length > 0 ? <a href="/#desserts">DESSERTS</a> : null}

    </div>)
    }
}

export default MenuNavigation;