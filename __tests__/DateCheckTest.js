import DateCheck from "../src/checks/DateCheck";

describe("날짜 체크 클래스 테스트", () => {
  test("1일은 주말, 디데이할인 적용", () => {
    const one = DateCheck.dateCheck(1);
    expect(one.isWeekend && one.isDday).toBe(true);
  });

  test("25일은 평일, 디데이할인, 특별할인 적용", () => {
    const twentyFive = DateCheck.dateCheck(25);
    expect(twentyFive.isWeek && twentyFive.isDday && twentyFive.isStar).toBe(
      true
    );
  });

  test("1~31일 범위가 아닌 숫자가 입력되면 예외가 발생한다.", () => {
    expect(() => {
      DateCheck.dateCheck(0);
    }).toThrow("[ERROR]");
  });

  test("숫자가 아닌 문자가 입력되면 예외가 발생한다.", () => {
    expect(() => {
      DateCheck.dateCheck("assf");
    }).toThrow("[ERROR]");
  });
});
