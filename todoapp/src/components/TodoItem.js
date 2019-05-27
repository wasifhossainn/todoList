import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        return (
            <li className="collection-item">
            <h6>title</h6>
            <div className="todo-icon">
        <span className="mx-2 text-success">
                    <i className="fas fa-pen"></i>
        </span>
        
        <span className="mx-2 text-success">
                    <i className="fas fa-trash"></i>
        </span>


            </div>
            
            </li>
        );
    }
}

export default TodoItem;