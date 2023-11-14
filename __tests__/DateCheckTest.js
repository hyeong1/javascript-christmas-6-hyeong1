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

  //   test("1~31일 범위가 아닌 숫자가 입력되면 예외가 발생한다.", () => {
  //     expect(() => {
  //       DateCheck.dateCheck(0);
  //     }).toThrow("[ERROR]");
  //   });
});

// describe("로또 클래스 테스트", () => {
//   test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
//     expect(() => {
//       new Lotto([1, 2, 3, 4, 5, 6, 7]);
//     }).toThrow("[ERROR]");
//   });

//   // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
//   test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
//     expect(() => {
//       new Lotto([1, 2, 3, 4, 5, 5]);
//     }).toThrow("[ERROR]");
//   });

//   // 아래에 추가 테스트 작성 가능
//   test("로또 번호에 1~45 범위를 벗어나는 숫자가 있으면 예외가 발생한다.", () => {
//     expect(() => {
//       new Lotto([0, 1, 2, 3, 4, 5]);
//     }).toThrow("[ERROR]");
//   });
// });
