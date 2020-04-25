import AuthStore from "./AuthStore";
import AuthService from "../services/AuthService/AuthAPI";

const authService = new AuthService();
const authStore = new AuthStore(authService);

export { authStore };