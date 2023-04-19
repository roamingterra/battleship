function Ship(length) {
  let hitsTaken = 0;
  return {
    hit: function () {
      hitsTaken++;
    },
    isSunk: function () {
      if (hitsTaken === length) return true;
      else return false;
    },
  };
}

export { Ship };
