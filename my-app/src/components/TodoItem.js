import React, { Component } from 'react';
import Proptypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => { 
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        } 
        } 
    
    markComplete = (e) => {
        console.log(this.props);
    }
    
    render() {
        
        const { id, title } = this.props.todo
        return (
            <div style ={this.getStyle()}>
              <p>
              <input type="checkbox" onChange={() => this.props.markComplete(this, id)} /> {' '}
              { title }
              </p>  
            </div>
        );
    }
}
// PropTypes      

TodoItem.propTypes = {
    todo: Proptypes.object.isRequired
}
export default TodoItem