import React from 'react';
import './react-todos.css';
let arrayOfTodos = [];
class Todos extends React.Component {
  constructor() {
    super();
    this.state = {
      todoslist: [],
    };
  }
  onUserClickedEnter = (event) => {
    if (event.keyCode === 13 && event.target.value !== '') {
      const todoObject = {
        todoDesciption: event.target.value,
        todoState: false
      };
      arrayOfTodos.push(todoObject);
      console.log(arrayOfTodos);
      this.setState({ todoslist: arrayOfTodos });
      event.target.value = '';
    }
  }

  render() {
    return (
      <div className="todos-body">
        <h1 className="headding">todos</h1>
        <div>
        <input type="text" className="user-input" placeholder="What you want to do?" onKeyDown={this.onUserClickedEnter}/>
        {/*<Newtodo list={this.state.todoslist} />*/}
        </div>
    </div>
    );
  }
}
// class Newtodo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       list: props.list,
//     };
//   }
//   render(){

//   }
// }
export { Todos };
