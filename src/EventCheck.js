const EventCheck = {
  isGetFree(price) {
    if (price >= 120000) {
      return true;
    }
    if (price < 120000) {
      return false;
    }
  },
};

export default EventCheck;
