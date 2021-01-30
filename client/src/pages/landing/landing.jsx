import React from 'react';
import axios from 'axios';

import MenuManagerPage from '../../components/menu-manager/menu-manager';

class LandingPage extends React.Component {
    constructor(){
        super()
        this.state={
            email: "",
            password: "",
            userAuth: false,
            error: false
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
    }

render(){
    const {email, password, userAuth, error} = this.state;
        

     if(userAuth){
         
        return(<MenuManagerPage></MenuManagerPage>) 
     } else {
    
     return(
        <div>
        {error ? <h1> Problem with credientials please try again!</h1> : null}
        <h1>Log in as Admin</h1>


        <form onSubmit={this.handleSubmit}>
        <input type="text" name="email" value={email} onChange={this.handleChange}></input>
        <input type="password" name="password" value={password} onChange={this.handleChange}></input>
        <button type="submit">Login</button>
        </form>
        </div>)
        } 
    }  
}


export default LandingPage;