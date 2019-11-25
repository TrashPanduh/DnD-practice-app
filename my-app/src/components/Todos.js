import React, { Component } from 'react';
import TodoItem from './TodoItem';
import Proptypes from 'prop-types';

class Todos extends Component {
    markComplete = () => {
        console.log('Hello')
    }
  
    render() {
      return this.props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} />
        
      ));
  }
}

Todos.propTypes = {
    todos: Proptypes.array.isRequired
}

export default Todos;

