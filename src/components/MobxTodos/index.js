import React from 'react';
import { observer, inject } from 'mobx-react';

import LoadingWrapperWithFailure from "../common/LoadingWrapperWithFailure/index";
import { RenderSuccessUI } from "./RenderSuccessUI";

// import { Headding, Tododiv, Userinputtag } from './mobxtodosstyles.js';
// import DisplayTodoList from "./DisplayTodoList/index";
import { action } from "mobx";

@inject('todoStore')
@observer
class TodoApp extends React.Component {
    componentDidMount() {
        this.doNetworkCalls();
    }
    doNetworkCalls = () => {
        this.props.todoStore.getTodoList();
    }

    render() {
        const { getTodoListAPIStatus, getTodoListAPIError } = this.props.todoStore;
        return (
            <LoadingWrapperWithFailure
                apiStatus={getTodoListAPIStatus}
                apiError={getTodoListAPIError}
                onRetryClick={this.doNetworkCalls}
                renderSuccessUI={RenderSuccessUI}
            />
        )
    }
}

export { TodoApp };