import React from 'react';
import { observer, inject } from 'mobx-react';
import todoApp from '../../stores/TodoStore';
import { Headding, Tododiv, Userinput } from './mobxtodosstyles.js'

@observer
class TodoApp extends React.Component {
    render() {
        return (
            <Tododiv>
                <Headding>Todos</Headding>
                <input type="text" style={{ "border": "1px solid grey" }} />
            </Tododiv>
        )
    }
}

export { TodoApp };