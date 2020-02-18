// task #5
function getMark(rating) {
    if (rating >= 0 && rating <= 19) {
      return "F";
    } else if (rating >= 20 && rating <= 39) {
      return "E";
    } else if (rating >= 40 && rating <= 59) {
      return "D";
    } else if (rating >= 60 && rating <= 74) {
      return "C";
    } else if (rating >= 75 && rating <= 89) {
      return "B";
    } else if (rating >= 90 && rating <= 100) {
      return "A";
    } else {
      throw new Error("Rating should be in range of 0-100");
    }
  }
  