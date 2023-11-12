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
    if (date[0] < 26) {
      return 100 * (date[0] - 1) + 1000;
    }
    if (date[0] > 25) {
      return false;
    }
  },
};

export default EventCheck;
