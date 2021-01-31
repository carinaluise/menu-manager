import axios from 'axios';
import React from 'react';
import './navigation.styles.css'
import Navbar from 'react-bootstrap/Navbar';

class Navigation extends React.Component{
    constructor(){
        super()
        this.state ={
            sides: [],
            desserts: [],
            specials: []
        }
    }

    componentDidMount(){
        
        axios.all([
            axios.get('/sides'),
            axios.get('/desserts'),
            axios.get('/specials')
        ])
            .then(axios.spread((sides, desserts, specials) => {
                this.setState({sides: sides.data, desserts: desserts.data, specials : specials.data})
            }))
            .catch(err =>{
                console.log(err)
            })
    }

   
    render(){
    return(<div id="navigation" className="sticky-top">
    
        <a href="/#starters">STARTERS</a>
        <a href="/#mains">MAINS</a>
        <a href="/#drinks">DRINKS</a>
        {this.state.sides.length > 0 ? <a href="/#sides">SIDES</a> : null}
        {this.state.desserts.length > 0 ? <a href="/#desserts">DESSERTS</a> : null}
        {this.state.specials.length > 0 ? <a href="/#specials">SPECIALS</a> : null}

    </div>)
    }
}

export default Navigation;