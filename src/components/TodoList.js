import React from 'react';
import TodoItem from './TodoItem'

const Todos = ({tasks}) => {

    const todoList = tasks.length ? (
        tasks.map(task =>{
            return(

                <TodoItem task={task.task} title={task.title} key={task.id}/>
            )
        })
    ) : (
        <p className="center">You have no todos left!</p>
    )

    return (
        <div className="center">
           <h1>Tasks</h1>

            <div>{todoList}</div>
           
           
        </div>
        
    );
}

export default Todos;
