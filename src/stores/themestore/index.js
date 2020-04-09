import { observable, action } from "mobx";

class ThemeStore {
    @observable themeOption;
    constructor() {
        this.themeOption = "light";
    }
    setCurrentTheme(theme) {
        if (theme === "light") {
            this.themeOption = "dark";
            console.log(theme);
        }
        else {
            this.themeOption = "light";
            console.log(theme);
        }
    }
}
const themeStore = new ThemeStore();
export default themeStore;