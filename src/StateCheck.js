const DateCheck = {
  dateState: {
    isWeek: false,
    isWeekend: false,
    isStar: false,
    isDday: false,
  },
  weekend: [1, 2, 8, 9, 15, 16, 22, 23, 29, 30],
  star: [3, 10, 17, 24, 25, 31],

  dateCheck(date) {
    if (!this.weekend.includes(date)) {
      this.dateState.isWeek = true;
    }
    if (this.weekend.includes(date)) {
      this.dateState.isWeekend = true;
    }
    if (this.star.includes(date)) {
      this.dateState.isStar = true;
    }
    if (date < 26) {
      this.dateState.isDday = true;
    }
    return this.dateState;
  },
};

export default DateCheck;
