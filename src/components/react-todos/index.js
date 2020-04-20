import React from 'react';
import { observer } from 'mobx-react';
import { observable, toJS } from 'mobx';

import './todos.css';

let todosOfUser = [];

@observer class Todos extends React.Component {
  @observable todos = [];
  @observable todosInList = false;
  @observable clearcompletedButton = false;

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    const n = await data.json()
    todosOfUser = n
  }

  completedTask = (idOfTodo) => {
    todosOfUser[idOfTodo].completed ? todosOfUser[idOfTodo].completed = false : todosOfUser[idOfTodo].completed = true;
    this.todos = todosOfUser;
    if (todosOfUser.length === 0)
      this.todosInList = false;
  }

  removeTask = (indexOfTodo) => {
    this.todos = todosOfUser;
    if (todosOfUser.length === 0)
      this.todosInList = false;
  }

  handleEnterKey = (event) => {
    if (event.key === 'Enter') {
      if (event.target.value !== "") {
        const todoTask = {
          id: (this.todos).length + 1,
          title: event.target.value,
          completed: false,
        };
        todosOfUser.push(todoTask);
        this.todos = todosOfUser;
        event.target.value = "";
        this.todosInList = true;
      }
      else
        alert("Todos Should not be empty");
    }
  }

  allTodos = () => {
    this.todos = todosOfUser;
  }

  activeTodos = () => {
    const activeTodosList = todosOfUser.filter((eachEl) => {
      return (eachEl.completed !== true);
    });
    this.todos = activeTodosList;
  }

  todosLeft = () => {
    let todosCount = 0;
    todosOfUser.forEach((eachEl) => {
      if (eachEl.completed !== true)
        todosCount++;
    });
    return (todosCount);
  }

  completedTodos = () => {
    const completedTodosList = todosOfUser.filter((eachEl) => {
      return (eachEl.completed !== false);
    });
    this.todos = completedTodosList;
  }

  clearcompletedTodos = () => {
    todosOfUser = todosOfUser.filter((eachEl) => {
      return (eachEl.completed !== true);
    });
    this.todos = todosOfUser;

    if (todosOfUser.length === 0)
      this.todosInList = false;
  }

  renderTodoList = () => {
    const todoListItems = this.todos.map((eachEl) => {
      let eachElIndex = (this.todos).indexOf(eachEl);
      return (
        <li key={(eachEl.id)}
          className="items todo-li-items" >
          <i className={this.todos[eachElIndex].completed ? "fa fa-check-circle co" : "fa fa-circle-thin co"} onClick={() => this.completedTask(eachElIndex)
          }> </i>
          < input type="text" className={this.todos[eachElIndex].completed ? "text lineThrough" : "text"} defaultValue={eachEl.title} />
          <i className="fa fa-close de" onClick={() => this.removeTask(eachElIndex)}> </i>
        </li>
      );
    });
    return (todoListItems);
  }
  render() {
    return (
      <div className="todo-list-body-container" >
        <div className="main-todo-conatiner" >
          <div className="todo-list" >
            <h1 className="main-heading" > Todos </h1>
          </div>
          <div className="todo-list-container">
            <input className="adding-elements" type="text" placeholder="What need to be Done...!"
              onKeyDown={this.handleEnterKey} />
            <ul className="todo-ul-tag">
              {this.renderTodoList()}
            </ul>
            <div className={this.todosInList ? "footer-todo-list footer-display" : "footer-todo-list footer-none"} >
              <span>{this.todosLeft()} Todos left </span>
              <div>
                <button className="filter-buttons" onClick={this.allTodos} > All </button>
                <button className="filter-buttons" onClick={this.activeTodos} > Active </button>
                <button className="filter-buttons" onClick={this.completedTodos} > completed </button>
              </div>
              <button className="filter-buttons filter-clear-completed-buttons" onClick={this.clearcompletedTodos} > Clear completed </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export { Todos };




// fetch("https://restcountries.eu/rest/v2/all")
// .then(result => result.json())
// .then(this.getCountries);