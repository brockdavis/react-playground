import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';


class App extends Component {
  state = {
    persons:[
      {name:'Brock',age:30},
      {name:'Brandon',age:30},
      {name:'Laura',age:30}
    ]
  }

  switchNameHandler = () =>{
    //DO NOT DO THIS this.state.persons[0].name = "John";
    this.setState({persons:[
      {name:'John',age:30},
      {name:'Brandon',age:30},
      {name:'Laura',age:30}
    ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    );
  }
}

export default App;
