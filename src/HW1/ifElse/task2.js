// task #2
function getQuarter(x, y) {
    if (x > 0 && y > 0) {
      return 1;
    } else if (x < 0 && y > 0) {
      return 2;
    } else if (x < 0 && y < 0) {
      return 3;
    } else {
      return 4;
    }
  }

  var qwe = getQuarter(3, 5)
  