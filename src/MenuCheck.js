import Menu from "./constant/Menu.js";

const MenuCheck = {
  menuResult: {},
  isOnlyDrink() {
    const drinkCheck = ["제로콜라", "레드와인", "샴페인"];
    let counter = 0;
    for (const [key, value] of Object.entries(this.menuResult)) {
      if (drinkCheck.includes(key)) {
        counter++;
      }
      if (counter == Object.keys(this.menuResult).length) {
        return true;
      }
    }
  },
  isExistMenu() {
    for (const [key, value] of Object.entries(this.menuResult)) {
      if (!Menu.hasOwnProperty(key)) {
        return true;
      }
    }
  },
  isNum() {
    for (const [key, value] of Object.entries(this.menuResult)) {
      return isNaN(value);
    }
  },
  typeCheck() {
    this.isOnlyDrink();
    this.isExistMenu();
    this.isNum();
  },
  menuCheck(menus) {
    const menu = menus.split(",");
    menu.forEach((menuItem) => {
      const [name, quantity] = menuItem.split("-");
      this.menuResult[name] = parseInt(quantity, 10);
    });
    return this.menuResult;
  },
};

export default MenuCheck;
