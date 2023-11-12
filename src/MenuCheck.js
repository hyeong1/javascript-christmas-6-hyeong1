const MenuCheck = {
  menuResult: {},
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
