import React, { Component } from 'react';
import TodoItem from './TodoItem';


export default class TodoList extends Component {
    render() {
        return (
            <ul className="center col s6 offset-s6 halign">
                <h3 className="center black-text" >
                    Todo List
                    <TodoItem/>
                </h3>
                <button type="button" class="btn red center">
                    Clear List
                </button>

            </ul>
        );
    }
}
