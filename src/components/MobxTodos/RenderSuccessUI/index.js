import React from 'react';
import { observer, inject } from 'mobx-react';

import { Headding, Tododiv, Userinputtag } from '../mobxtodosstyles.js';
import DisplayTodoList from "../DisplayTodoList/index";
// import { action } from "mobx";

@inject('todoStore')
@observer
class RenderSuccessUI extends React.Component {
    handleOnclick = (event) => {
        const { addingTodo } = this.props.todoStore;
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
                <DisplayTodoList todosList={this.props.todoStore.todos} deleteTodo={this.props.todoStore.deleteTodo} />
            </Tododiv>
        )
    }
}

export { RenderSuccessUI };