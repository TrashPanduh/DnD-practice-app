import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Strength",
        value: 12,
        completed: false
      },
      {
        id: 2,
        title: "Dexterity",
        value: 18,
        completed: false   
      },     
      {
        id: 3,
        title: "Constitution",
        value: 17,
        completed: false
      },
      {
        id: 4,
        title: "Intelligence",
        value: 12,
        completed: false
      },
      {
        id: 5,
        title: "Wisdom",
        value: 13,
        completed: false
      },
      {
        id: 6,
        title: "Charisma",
        value: 15,
        completed: false
      },
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed}
        return todo;
    }) });
  }
  markComplete = () => {console.log('From app.js')}
  render() {
    console.log(this.state.todos)
  
    return(
      <div className="App">
        <h1>Attributes</h1>
        <Todos todos={this.state.todos} markComplete={this.markComplete}  />
        
        { /* create an uordered list from the state array */ }
        <ul>
          {
            this.state.todos
              .filter(todo => todo.completed)
              .map(todo => {
                return <li>{todo.title}</li>
              })
          }
        </ul>
      </div>
  );
  }
}

export default App;
