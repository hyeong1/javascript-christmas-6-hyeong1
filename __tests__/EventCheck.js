import EventCheck from "../src/checks/EventCheck";

describe("이벤트 체크 테스트", () => {
  test("증정 이벤트 있음", () => {
    expect(EventCheck.isGetFree(150000)).toBe(true);
  });

  test("증정 이벤트 없음", () => {
    expect(EventCheck.isGetFree(52100)).toBe(false);
  });

  test("디데이 할인 적용", () => {
    const date = [16, { isDday: true }];
    expect(EventCheck.isDday(date)).toBe(2500);
  });

  test("평일 할인 적용", () => {
    const date = [4, { isWeek: true }];
    const menu = { 해산물파스타: 1, 초코케이크: 2 };
    expect(EventCheck.isWeek(date, menu)).toBe(4046);
  });

  test("주말 할인 적용", () => {
    const date = [1, { isWeekend: true }];
    const menu = { 해산물파스타: 1, 초코케이크: 2 };
    expect(EventCheck.isWeekend(date, menu)).toBe(1000);
  });

  test("특별 할인 적용", () => {
    const date = [3, { isStar: true }];
    expect(EventCheck.isStar(date)).toBe(1000);
  });

  test("특별 할인 적용 안되는 경우", () => {
    const date = [5, { isStar: false }];
    expect(EventCheck.isStar(date)).toBe(false);
  });

  test("12월 배지 출력", () => {
    expect(EventCheck.checkBadge(7000)).toBe("별");
    expect(EventCheck.checkBadge(15000)).toBe("트리");
    expect(EventCheck.checkBadge(25000)).toBe("산타");
  });
});
