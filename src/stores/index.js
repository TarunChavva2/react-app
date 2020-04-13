import React from 'react';
// import { observer } from 'mobx-react';
import { observable, toJS } from 'mobx';

class TodoApp {
   @observable todos = [];
   @observable todosInList = false;
   @observable clearCompletedButton = false;


}
const todoApp = new TodoApp();
export default todoApp
