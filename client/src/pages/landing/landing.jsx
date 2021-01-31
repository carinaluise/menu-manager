import React from 'react';
import axios from 'axios';
import './landing.styles.css';

import MenuManagerPage from '../../components/menu-manager/menu-manager';

class LandingPage extends React.Component {
    constructor(){
        super()
        this.state={
            email: "",
            password: "",
            userAuth: false,
            error: false,
        }
    }
 
handleChange = (event) => this.setState({
    [event.target.name]: event.target.value
});

handleSubmit = (event)=> {
    event.preventDefault();

    const {email, password} = this.state;
    const data ={
        email,
        password,
    };

    axios
         axios.post('/users', data)
            .then(res => {
                if(res.data.message === "user authenticated"){
                    this.setState({userAuth: true})
                }  else{
                    this.setState({error: true})
                }
            })
            .catch(err =>{
                this.setState({error: true})
            })
        this.setState({
            email: "",
            password: ""
        })
    }

render(){
    const {email, password, userAuth, error} = this.state;
        

     if(userAuth){
         
        return(<MenuManagerPage></MenuManagerPage>) 
     } else {
    
     return(
        <div id="landing">
       
        <h1>Log in as Admin</h1>
        {error ? <h3> Problem with credientials please try again!</h3> : null}

        <form onSubmit={this.handleSubmit}>
        <input placeholder="email" type="text" name="email" value={email} onChange={this.handleChange}></input>
        <input  placeholder="password" type="password" name="password" value={password} onChange={this.handleChange}></input>
        <button type="submit">Login</button>
        </form>
        </div>)
        } 
    }  
}


export default LandingPage;