import React from 'react';
import { observer } from 'mobx-react';

import todoStore from "../../stores/TodoStore";

import { Headding, Tododiv, Userinputtag } from './mobxtodosstyles.js';
import DisplayTodoList from "./DisplayTodoList/index";

@observer
class TodoApp extends React.Component {
    handleOnclick = (event) => {
        const { addingTodo } = todoStore;
        if (event.keyCode === 13) {
            if (event.target.value !== "") {
                const userEnteredTodo = event.target.value;
                addingTodo(userEnteredTodo);
                event.target.value = "";
            }
            else {
                alert("Please Enter Valied Todo....");
            }
        }
    }
    render() {
        return (
            <Tododiv>
                <Headding>Todos</Headding>
                <Userinputtag type="text" type="text" placeholder="What You Want to do ?..." onKeyDown={this.handleOnclick} />
                <DisplayTodoList todosList={todoStore.todos} deleteTodo={todoStore.deleteTodo} />
            </Tododiv>
        )
    }
}

export { TodoApp };