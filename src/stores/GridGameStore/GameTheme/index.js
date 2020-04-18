import { observable } from "mobx";

class Theme {
    @observable selectedTheme;
    constructor() {
        this.observable = "DARK";
    }
    onChangeSelectedTheme(theme) {
        if (theme === "DARK") {
            this.themeOption = "DARK";
            console.log(theme);
        }
        else {
            this.themeOption = "LIGHT";
            console.log(theme);
        }
    }
}