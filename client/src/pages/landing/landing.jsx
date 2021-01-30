import React from 'react';

class LandingPage extends React.Component {
    constructor(){
        super()
        this.state={
            email: "",
            password: ""
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
        password
    };

    axios
         axios.post('/users', data)
            .then(res => {
                console.log(res)
            })
            .catch(err =>{
                console.log(err)
            })
    }

render(){
    const {email, password} = this.state;
        return(
        <div>
        <h1>Log in as Admin</h1>


        <form onSubmit={this.handleSubmit}>
        <input type="text" name="email" value={email} onChange={this.handleChange}></input>
        <input type="password" name="password" value={password} onChange={this.handleChange}></input>
        <button type="submit">Login</button>
        </form>


        </div>)
    }   
}

export default LandingPage;