const isValidWalk = walk => {
  let walkerPos = {
    x: 0,
    y: 0
  };
  while (walk.length === 10) {
    walk.map(elem => {
      switch (elem) {
        case "n":
          walkerPos.x++;
          break;
        case "s":
          walkerPos.x--;
          break;
        case "w":
          walkerPos.y++;
          break;
        case "e":
          walkerPos.y--;
          break;
        default:
          return false;
      }
    });
    if (walkerPos.x == 0 && walkerPos.y == 0) {
      return true;
    } else return false;
  }
};
