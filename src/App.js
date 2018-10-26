import React, { Component } from 'react';
import Todos from './components/TodoList'

class App extends Component {
  
  state={
    tasks: [
      {
        id: 1,
        title: "Clean",
        task: "Clean my room!",
        done: false 
      },
      {
        id: 2,
        title: "Read",
        task: "Read a book about dinosaurs",
        done: false 
      },
      {
        id: 3,
        title: "Buil",
        task: "Build a large triangle",
        done: false 
      },
    ]
  }

  render() {
      return (
        <div className="App">

          <Todos tasks={this.state.tasks} />
        </div>
      );
    }
  }


export default App;
