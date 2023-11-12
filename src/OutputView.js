import { Console } from "@woowacourse/mission-utils";

import PriceCheck from "./PriceCheck.js";
import EventCheck from "./EventCheck.js";

const OutputView = {
  price: 0,
  printEvent(date, menus) {
    Console.print(
      `12월 ${date[0]}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`
    );
    this.printMenu(menus);
    this.printPriceBeforeEvent(menus);
    this.printGetFree();
    this.printTotalEvent(date, menus);
  },
  printMenu(menus) {
    Console.print("<주문 메뉴>");
    for (const [key, value] of Object.entries(menus)) {
      Console.print(`${key} ${value}개`);
    }
    Console.print("");
  },
  printPriceBeforeEvent(menus) {
    Console.print("<할인 전 총주문 금액>");
    this.price = PriceCheck.priceBeforeEvent(menus);
    Console.print(this.price + "원\n");
  },
  printGetFree() {
    Console.print("<증정 메뉴>");
    if (EventCheck.isGetFree(this.price)) {
      Console.print("샴페인 1개\n");
    }
    if (!EventCheck.isGetFree(this.price)) {
      Console.print("없음\n");
    }
  },
  printTotalEvent(date, menu) {
    Console.print("<혜택 내역>");
    if (EventCheck.isDday(date)) {
      Console.print(`크리스마스 디데이 할인: -${EventCheck.isDday(date)}원`);
    }
    if (EventCheck.isWeek(date, menu)) {
      Console.print(`평일 할인: -${EventCheck.isWeek(date, menu)}원`);
    }
    if (EventCheck.isWeekend(date, menu)) {
      Console.print(`주말 할인: -${EventCheck.isWeekend(date, menu)}원`);
    }
  },
};

export default OutputView;
