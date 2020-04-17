import React from 'react';
import { observable } from 'mobx';

class Cell {
    @observable isHidden;
    constructor() {
        this.id = 0;
        this.isHidden = false
    }

}

const cell = new Cell();
export default cell;