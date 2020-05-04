import CartStore from "./CartStore";
import productStore from "../../Products/stores";

const cartStore = new CartStore(productStore);

export default cartStore;