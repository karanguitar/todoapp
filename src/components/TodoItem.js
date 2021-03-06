import React from 'react';
import Reveal from 'react-reveal/Reveal';

const TodoItem = ({task, title, id, deleteTodo}) => {


    return (
        
        <div className="row">
            <div className="">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                <span className="card-title">{title}</span>
                <p>{task}</p>
                </div>
                <div className="card-action">
                    <button className="btn red" onClick={()=>{deleteTodo(id)}}>Delete</button>
                </div>
            </div>
            </div>
        </div>
    );
}

export default TodoItem;
