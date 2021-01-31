
import React from 'react';
import MenuTable from '../table/table';
import axios from 'axios'
import './menu-manager.styles.css';


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

componentDidUpdate(){
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

    const {mains, starters, drinks, sides, desserts, dessertsS, specials, specialsS} = this.state;
    let optionalDesserts;
    let optionalSpecials;

    if(dessertsS === true | desserts.length > 0){
    optionalDesserts = <MenuTable key="desserts" url="desserts" category="Desserts" items={desserts}></MenuTable>
    } else {
    optionalDesserts = null;
    }
    if(specialsS === true | specials.length > 0){
    optionalSpecials = <MenuTable key="specials" url="specials" category="Specials" items={specials}></MenuTable>
    } else {
    optionalSpecials = null;
    }
    return(<div id="menu-manager">
        <a href="/">back to menu</a>
        <h1>MENU MANAGER</h1>
        <MenuTable key="mains" url="mains" category="Main Dishes" items={mains}></MenuTable>
        <MenuTable key="starters" url="starters" category="Starter Dishes" items={starters}></MenuTable>
        <MenuTable key="drinks" url="drinks" category="Drinks" items={drinks}></MenuTable>
        <MenuTable key="sides" url="sides" category="Sides" items={sides}></MenuTable>
        {optionalDesserts}
        {optionalSpecials}

    {desserts.length === 0 ? <button className="cat-button" onClick={this.handleClick} name="dessertsS"> + New Desserts Category</button> : null}
    {specials.length ===0 ? <button className="cat-button" onClick={this.handleClick} name="specialsS"> + New Specials Category</button> : null}
    </div>)
    }
}

export default MenuManagerPage;



































// import React from 'react';
// import MenuTable from '../table/table';
// import axios from 'axios'


// class MenuManagerPage extends React.Component {
//     constructor(){
//         super()
//         this.state={
//             menu: []
//             // mains: [],
//             // starters: [],
//             // drinks: [],
//             // sides: [],
//             // sidesS : false,
//             // desserts: [],
//             // dessertsS: false,
//             // specials: [],
//             // specialsS: false     
//         }

//         this.handleClick = this.handleClick.bind(this);
//     }

//     componentDidMount(){
        
//         axios.all([
//             axios.get('/mains'),
//             axios.get('/starters'),
//             axios.get('/drinks'),
//             axios.get('/sides'),
//             axios.get('/desserts'),
//             axios.get('/specials')
//         ])
//             .then(axios.spread((mains, starters, drinks, sides, desserts, specials) => {
//                 // this.setState({mains: mains.data , starters: starters.data, drinks: drinks.data, sides: sides.data, desserts: desserts.data, specials : specials.data})
//                 this.setState({menu:[mains.data, starters.data, drinks.data]})
//             }))
//             .catch(err =>{
//                 console.log(err)
//             })
//     }
//     componentDidUpdate(){
        
//         axios.all([
//             axios.get('/mains'),
//             axios.get('/starters'),
//             axios.get('/drinks'),
//             axios.get('/sides'),
//             axios.get('/desserts'),
//             axios.get('/specials')
//         ])
//             .then(axios.spread((mains, starters, drinks, sides, desserts, specials) => {
//                 // this.setState({mains: mains.data , starters: starters.data, drinks: drinks.data, sides: sides.data, desserts: desserts.data, specials : specials.data})
//                 this.setState({menu:[mains.data, starters.data, drinks.data]})
//             }))
//             .catch(err =>{
//                 console.log(err)
//             })
//     }

//     handleClick(e){
//         console.log(e.target.name)
//         this.setState({[e.target.name] : true});
//     }


//     render(){
//         console.log(this.state.menu)
//         return(<div>
//             {this.state.menu.map((category )=>{
//                 return(category.map(item =>{
//                     return(<h1 key={item.name}>{item.name}</h1>)
//                 }))
//             })}
//         </div>)


//     }
// }

// export default MenuManagerPage;





//    const {mains, starters, drinks, sides, sidesS, desserts, dessertsS, specials, specialsS} = this.state;
//    let optionalSides;
//    let optionalDesserts;
//    let optionalSpecials;

//    if(sidesS === true | sides.length > 0){
//      optionalSides =  <MenuTable key="sides" url="sides" category="Sides" items={sides}></MenuTable>
//    } else {
//     optionalSides = null;
//    }
//    if(dessertsS === true | desserts.length > 0){
//     optionalDesserts =  <MenuTable key="desserts" url="desserts" category="Desserts" items={desserts}></MenuTable>
//   } else {
//    optionalDesserts = null;
//   }
//   if(specialsS === true | specials.length > 0){
//     optionalSpecials =  <MenuTable key="specials" url="specials" category="Specials" items={specials}></MenuTable>
//   } else {
//    optionalSpecials = null;
//   }
     
    
    // return(<div>
    // <a href="/menu">Menu</a>
    
    // <MenuTable key="mains" url="mains" category="Main Dishes" items={mains}></MenuTable>
    // <MenuTable key="starters" url="starters" category="Starter Dishes" items={starters}></MenuTable>
    // <MenuTable key="drinks" url="drinks" category="Drinks" items={drinks}></MenuTable>
    // {optionalSides}
    // {optionalDesserts}
    // {optionalSpecials}
  

    // <button onClick={this.handleClick} name="sidesS"> + New Sides Category</button>
    // <button onClick={this.handleClick} name="dessertsS"> + New Desserts Category</button>
    // <button onClick={this.handleClick} name="specialsS"> + New Specials Category</button>
    
    // </div>)