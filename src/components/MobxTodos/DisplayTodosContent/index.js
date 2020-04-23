import React, { Component } from 'react'
import { observer } from "mobx-react";

import { TodosContentDiv, Button, Input, Checkbox } from "./DisplayTodosStyle";

@observer
class DisplayTodosContent extends Component {
    updateTodo = (event) => {
        const { updateTodo } = this.props.content;
        updateTodo(event.target.value);
    }
    onClickRemoveTodo = () => {
        const { deleteTodo } = this.props;
        deleteTodo(this.props.content);
    }
    render() {
        const { title } = this.props.content;
        const { changeStatusOfTodo } = this.props.content;
        const { isCompleted } = this.props.content;
        return (
            <TodosContentDiv>
                <Checkbox type="checkbox" defaultChecked={isCompleted} onClick={changeStatusOfTodo} />
                <Input defaultValue={title} status={isCompleted} disabled={isCompleted} onBlur={this.updateTodo} />
                <Button onClick={this.onClickRemoveTodo}>X</Button>
            </TodosContentDiv>
        )
    }
}

export default DisplayTodosContent;