const isValidWalk = walk => {
  let walkerPos = {
    x: 5,
    y: 5
  }
  if (walk.length === 10) {
    walk.foreEach(elem => {
      switch (elem) {
        case 'n':
          walkerPos.x += 1;
          break;
        case 's':
          walkerPos.x -= 1;
          break;
        case 'w':
          walkerPos.y += 1;
          break;
        case 'e':
          walkerPos.y -= 1;
          break
        default: return false
      }
    })
    if (walkerPos.x === 5 && walkerPos.y === 5) {
      return true
    } else return false;
  } else return false;
}