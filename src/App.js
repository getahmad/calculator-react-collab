import React, { Component } from 'react';
import Calculator from "./components/Calculator"
import "./css/style.css"
// import Display from "./components/Display"

class App extends Component {

   render (){
     return(
       <div>
         <h1>Calculator</h1>
         <Calculator/>
       </div>

     )
  }

}

export default App;

