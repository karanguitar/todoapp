import React from 'react';
import TodoItem from './TodoItem'
import Reveal from 'react-reveal/Reveal';



const Todos = ({tasks, deleteTodo}) => {

    const todoList = tasks.length ? (
        tasks.map(task =>{
            return(
                <Reveal effect="fadeInUp" effectOut="bounceOutRight">
                <TodoItem task={task.task} title={task.title} id={task.id} key={task.id} deleteTodo={deleteTodo}/>
                </Reveal>
            )
        })
    ) : (
        <p className="center">You have no todos left!</p>
    )



    return (
        <div className="center">
           <h1>Tasks</h1>  
                 
            {todoList}
        </div>
        
    );
}

export default Todos;
