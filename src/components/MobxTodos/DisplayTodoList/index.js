import React, { Component } from 'react'
import { observer } from "mobx-react";

import DisplayTodosContent from "../DisplayTodosContent/index";

import { EachTodoDiv } from "./DisplayEachTodoStyle";

@observer
class DisplayTodoList extends Component {
    renderTodo = () => {
        const { todosList: todos, deleteTodo } = this.props;
        return todos.map((item) => <DisplayTodosContent key={item.id} content={item} deleteTodo={deleteTodo} />);
    }

    render() {
        return (
            <EachTodoDiv>
                {this.renderTodo()}
            </EachTodoDiv>
        )
    }
}

export default DisplayTodoList;
