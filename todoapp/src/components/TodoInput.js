import React, { Component } from 'react';
import '@material-ui/core';


export default class TodoInput extends Component {
    render() {
        return (
            <div className="center col s6 offset-s6 halign">
                <form>
                    <div className="input-group center">
                        <div className="input-group-prepend center">
                            <div className="input-group-text bg-primary text-white mx-1">
                             
                            </div>
                        </div>
                        <input type="text" class="form-control"
                        
                        placeholder="Add A Todo Item"/>
                       
                          
                    </div>
                    <button type= "submit" class="btn waves-effect center"> Submit </button>
                </form>
            </div>
        );
    }
}
