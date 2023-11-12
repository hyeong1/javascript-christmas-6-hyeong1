import { Console } from "@woowacourse/mission-utils";

import PriceCheck from "./PriceCheck.js";
import EventCheck from "./EventCheck.js";

const OutputView = {
  printEvent(date, menus) {
    Console.print(
      `12월 ${date[0]}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`
    );
    this.printMenu(menus);
    this.printPriceBeforeEvent(menus);
  },
  printMenu(menus) {
    Console.print("<주문 메뉴>");
    for (const [key, value] of Object.entries(menus)) {
      Console.print(`${key} ${value}개\n`);
    }
  },
  printPriceBeforeEvent(menus) {
    Console.print("<할인 전 총주문 금액>");
    const price = PriceCheck.priceBeforeEvent(menus);
    Console.print(price + "\n");
    this.printGetFree(price);
  },
  printGetFree(price) {
    Console.print("<증정 메뉴>");
    Console.print(EventCheck.isGetFree(price) + "\n");
  },
};

export default OutputView;
