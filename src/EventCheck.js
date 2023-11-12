const EventCheck = {
  isGetFree(price) {
    if (price >= 120000) {
      return "샴폐인 1개";
    }
    if (price < 120000) {
      return "없음";
    }
  },
};

export default EventCheck;
