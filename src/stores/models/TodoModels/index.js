import React from 'react';
import { observable } from 'mobx';

class Todomodel {
    @observable Todo = {
        id: Math.random(),
        title: "",
        isCompleted: false,
    }
}

export default Todomodel;