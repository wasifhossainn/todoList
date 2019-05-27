import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from "./components/TodoList"

// import 'bootstrap/dist/css/bootstrap.min.css';
// import uuid from "uuid";

class App extends Component {
  render() {
    return (
      
      <nav className="blue">
      <div class="nav-wrapper blue">
        
      <a href="#" class="brand-logo center"> Todo List</a>
          <i class="material-icons">list</i>
          
          
          <div>
            <h2 class="black-text">
            </h2>
           </div>
       <div className="row center">
         <div class="col s8">
         <TodoInput/>
         </div>
         </div>
         <div className="row center">
         <div class="col s8 ">
         <TodoList/>
         </div>
         </div>
      </div>
      </nav>
            
      // <TodoInput/>
      // <TodoList/>
    );
  }
}

export default App;