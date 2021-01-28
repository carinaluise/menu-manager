import React from 'react';
import MenuTable from '../../components/table/table';

import axios from 'axios'

class MenuManagerPage extends React.Component {
    constructor(){
        super()
        this.state={
            menuData: [],
            

        }
    }

    componentDidMount(){

        axios
            .get('/menu')
            .then(res => {
                this.setState({menuData: res.data})
                
            })
            .catch(err =>{
                console.log(err)
            })
    }

    render(){
       const {menuData} = this.state;
       
    return(<div>
    
    <MenuTable menuData={menuData}></MenuTable>
    
    
    
    
    
    
    
    
    
    </div>)
    }
}

export default MenuManagerPage;