import React from 'react';

const TodoItem = ({task, title}) => {


    return (
        <div className="row">
            <div className="">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                <span className="card-title">{title}</span>
                <p>{task}</p>
                </div>
                <div className="card-action">
                    <button>Hello</button>
                    <button>Bye</button>
                </div>
            </div>
            </div>
        </div>
    );
}

export default TodoItem;
