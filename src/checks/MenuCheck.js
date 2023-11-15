import Menu from "../constant/Menu.js";

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
    return false;
  },
  isExistMenu() {
    for (const [key, value] of Object.entries(this.menuResult)) {
      if (!Menu.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  },
  isNum() {
    for (const [key, value] of Object.entries(this.menuResult)) {
      if (value < 1) {
        return false;
      }
      return isNaN(value);
    }
  },
  typeCheck() {
    if (this.isOnlyDrink() || !this.isExistMenu() || this.isNum()) {
      throw new Error("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
    }
  },
  menuCheck(menus) {
    const menu = menus.split(",");
    menu.forEach((menuItem) => {
      const [name, quantity] = menuItem.split("-");
      this.menuResult[name] = parseInt(quantity, 10);
    });
    this.typeCheck();
    return this.menuResult;
  },
};

export default MenuCheck;
