import React from 'react';
import './App.css';
import TodoItem from "./TodoItem"
import todosData from './todosData';

class App extends React.Component {
    constructor() {
      super()
      this.state = {
        todos: todosData
      }
      this.handleClick = this.handleClick.bind(this)
    }

    // created a method to make the input changes when completed or not ie to modify the datas in the state indirectly
    handleClick(id) {
      this.setState(prevState => {
        const updatedState = prevState.todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed
            }
          } 
          return todo
        })
        return {
          todos: updatedState
        }
      })
    }
  render() {
    //created a variable where i map the data collected from my state to generate a new array of data
    const todoList = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleClick={this.handleClick}/>)
    return (
      <div className="Todo">
          <div className="TodoContainer">
            <h1>My Todo List for the day</h1>
              {todoList}
            </div>
      </div>
    )
  }
}

export default App
