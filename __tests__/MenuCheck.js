import MenuCheck from "../src/checks/MenuCheck";

describe("메뉴 체크 테스트", () => {
  test("타파스 1개, 레드와인 1개 주문하면 65,500원", () => {
    const menus = { 타파스: 1, 레드와인: 1 };
    expect(PriceCheck.priceBeforeEvent(menus)).toBe(65500);
  });
});
