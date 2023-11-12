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
};

export default EventCheck;
