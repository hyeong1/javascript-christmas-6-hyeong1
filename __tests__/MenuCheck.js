import MenuCheck from "../src/checks/MenuCheck";

describe("메뉴 체크 테스트", () => {
  test("음료만 주문", () => {
    MenuCheck.menuResult = { 샴페인: 1, 레드와인: 1 };
    expect(MenuCheck.isOnlyDrink()).toBe(true);
  });

  test("메뉴에 없는 메뉴 주문", () => {
    MenuCheck.menuResult = { 삼계탕: 1, 레드와인: 1 };
    expect(MenuCheck.isExistMenu()).toBe(false);
  });

  test("메뉴 수량에 0 입력", () => {
    MenuCheck.menuResult = { 샴페인: 0, 초코케이크: 1 };
    expect(MenuCheck.isNum()).toBe(false);
  });

  test("메뉴 20개 초과 주문", () => {
    MenuCheck.menuResult = { 초코케이크: 15, 레드와인: 7 };
    expect(MenuCheck.isUnder20()).toBe(false);
  });
});
