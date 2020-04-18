import React from 'react';
import { observable } from 'mobx';

class Cell {
    @observable isHidden;
    constructor(object) {
        this.id = object.id;
        this.isHidden = object.isHidden;
    }
}

export default Cell;