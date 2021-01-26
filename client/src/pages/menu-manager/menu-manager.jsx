import React from 'react';
import MenuTable from '../../components/table/table';

import axios from 'axios'

class MenuManagerPage extends React.Component {
    constructor(){
        super()
        this.state={
            categories: "",
            

        }
    }

    componentDidMount(){

        axios
            .get('/api')
            .then(res => {
                console.log(res.data)
                this.setState({categories: res.data[0].name})
                
            })
            .catch(err =>{
                console.log(err)
            })
    }

    render(){
        console.log(this.state.categories)
    return(<div>
    
    <MenuTable cat={this.state.categories}></MenuTable>
    
    
    
    
    
    
    
    
    
    </div>)
    }
}

export default MenuManagerPage;