import { Console } from "@woowacourse/mission-utils";

import DateCheck from "./checks/DateCheck.js";
import MenuCheck from "./checks/MenuCheck.js";

const InputView = {
  printStart() {
    Console.print("안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.");
  },

  async readDate() {
    let input = await Console.readLineAsync(
      "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n"
    );
    let isValid = false;
    while (!isValid) {
      try {
        DateCheck.dateCheck(parseInt(input));
        isValid = true;
      } catch (error) {
        input = await Console.readLineAsync(error.message + "\n");
      }
    }
    console.log(parseInt(input));
    return [parseInt(input), DateCheck.dateCheck(parseInt(input))];
  },

  async readMenu() {
    let input = await Console.readLineAsync(
      "주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n"
    );
    let isValid = false;
    while (!isValid) {
      try {
        MenuCheck.menuCheck(input);
        isValid = true;
      } catch (error) {
        input = await Console.readLineAsync(error.message + "\n");
      }
    }
    return MenuCheck.menuCheck(input);
  },
};

export default InputView;
