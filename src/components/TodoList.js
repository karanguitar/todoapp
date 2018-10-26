import React from 'react';
import TodoItem from './TodoItem'

const Todos = ({tasks, deleteTodo}) => {

    const todoList = tasks.length ? (
        tasks.map(task =>{
            return(

                <TodoItem task={task.task} title={task.title} id={task.id} key={task.id} deleteTodo={deleteTodo}/>
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
