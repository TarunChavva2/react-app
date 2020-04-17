import { observable } from "mobx";

class Theme {
    @observable selectedTheme;
    constructor() {
        this.observable = "DARK";
    }
}