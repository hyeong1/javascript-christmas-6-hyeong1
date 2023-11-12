import Menu from "../constant/Menu.js";

const PriceCheck = {
  priceBeforeEvent(menus) {
    let price = 0;
    for (const [key, value] of Object.entries(menus)) {
      price += Menu[key] * value;
    }
    return price;
  },
};

export default PriceCheck;
