import React, { Component } from 'react';
import Axios from 'axios';
//import axios from 'axios';
//import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      data:[]
    }
  }

  addTax(event) {
   const item={
      "name":event.target.elements.name.value,
      "description":event.target.elements.description.value
     
    }
   // console.log(event.target.elements.name.value)
   event.preventDefault();
    Axios.put('http://salty-badlands-70835.herokuapp.com/api/TaxType/1',item)
    .then((res) =>{
      this.setState({data:res.data})
      console.log(this.state.data)
    }).catch(err =>{
      console.log('faild:',err)
    });

//console.log(event.target.elements.name.value)
  }
  render() {
   
    return (
     <div>
       <header><h1> <center>Testing Type </center></h1></header>
       <form onSubmit={this.addTax.bind(this)}>
       <h2> Name:</h2>  <input type="text" name="name"/>
         <h2> Description:</h2>  <input type="text" name="description"/><br></br>
         <button type="submit"  > Save</button> 
         <button  type="reset"> Cancel </button>
       </form>
       <hr></hr>
       <div>
             
         </div>     
     </div>
    );
  }
}

export default App;
