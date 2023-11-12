const EventCheck = {
  isGetFree(price) {
    if (price >= 120000) {
      return true;
    }
    if (price < 120000) {
      return false;
    }
  },
  isDday(date) {
    if (date[1].isDday) {
      return 100 * (date[0] - 1) + 1000;
    }
    if (!date[1].isDday) {
      return false;
    }
  },
  isWeek(date, menu) {
    const dessert = ["초코케이크", "아이스크림"];
    let counter = 0;
    if (!date[1].isWeek) {
      return false;
    }
    for (const [key, value] of Object.entries(menu)) {
      if (dessert.includes(key)) {
        counter++;
        counter *= value;
      }
    }
    if (counter !== 0) {
      return counter * 2023;
    }
    if (counter === 0) {
      return false;
    }
  },
  isWeekend(date, menu) {
    const main = [
      "티본스테이크",
      "바비큐립",
      "해산물파스타",
      "크리스마스파스타",
    ];
    let counter = 0;
    if (!date[1].isWeekend) {
      return false;
    }
    for (const [key, value] of Object.entries(menu)) {
      if (main.includes(key)) {
        counter++;
        counter *= value;
      }
    }
    if (counter !== 0) {
      return counter * 1000;
    }
    if (counter === 0) {
      return false;
    }
  },
  isStar(date) {
    if (!date[1].isStar) {
      return false;
    }
    if (date[1].isStar) {
      return 1000;
    }
  },
  checkBadge(sale) {
    if (sale < 5000) {
      return false;
    }
    if (sale >= 5000 && sale < 10000) {
      return "별";
    }
    if (sale >= 10000 && sale < 20000) {
      return "트리";
    }
    if (sale >= 20000) {
      return "산타";
    }
  },
};

export default EventCheck;
