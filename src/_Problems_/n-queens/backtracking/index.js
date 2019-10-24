function solveNQueensWithBacktrackingAlgorithm(QUEENS_COUNT = 10) {
  const CHESSBOARD = [];
  const UPBOARD_DIAGONAL = [];
  const DOWNBOARD_DIAGONAL = [];
  const QUEENS = [];

    if (QUEENS_COUNT < 4) {
        return 'You cant solve N Queens Problem with N < 4';
    }

  function generateDiagonalBoards() {
    for (let i = 0; i < QUEENS_COUNT; i += 1) {
      DOWNBOARD_DIAGONAL.push([]);
      UPBOARD_DIAGONAL.push([]);

      for (let j = 0; j < QUEENS_COUNT; j += 1) {
        DOWNBOARD_DIAGONAL[i].push(QUEENS_COUNT + j - i);
        UPBOARD_DIAGONAL[i].unshift(QUEENS_COUNT + j - i);
      }
    }
  }

  function generateBoard() {
    for (let i = 0; i < QUEENS_COUNT; i += 1) {
      CHESSBOARD.push([]);
      for (let j = 0; j < QUEENS_COUNT; j += 1) {
        CHESSBOARD[i].push(0);
      }
    }
    generateDiagonalBoards();
  }

  function popQueen() {
    QUEENS.pop();
  }

  function checkXAxis(x) {
    for (let i = 0; i < QUEENS_COUNT; i += 1) {
      if (CHESSBOARD[x][i] !== 0) {
        return false;
      }
    }
    return true;
  }

  function checkYAxis(y) {
    for (let i = 0; i < QUEENS_COUNT; i += 1) {
      if (CHESSBOARD[i][y] !== 0) {
        return false;
      }
    }
    return true;
  }

  function checkZAxis(x, y) {
    const upDiagonals = QUEENS.map(diagonalPos => diagonalPos.up_diagonal === UPBOARD_DIAGONAL[x][y]);
    const downDiagonals = QUEENS.map(diagonalPos => diagonalPos.down_diagonal === DOWNBOARD_DIAGONAL[x][y]);
    return !(upDiagonals.includes(true) || downDiagonals.includes(true));
  }

  function checkIfSafe(x, y) {
    return !!(checkXAxis(x) && checkYAxis(y) && checkZAxis(x, y));
  }

  function setQueen(x, y) {
    if (QUEENS.length === QUEENS_COUNT) {
      return true;
    }
    if (checkIfSafe(x, y)) {
      QUEENS.push({
        x,
        y,
        up_diagonal: UPBOARD_DIAGONAL[x][y],
        down_diagonal: DOWNBOARD_DIAGONAL[x][y],
      });

      CHESSBOARD[x][y] = 1;
      setQueen(0, y + 1);
    } else if (x < QUEENS_COUNT - 1) {
      setQueen(x + 1, y);
    } else {
      let lastQueen = {
        x: QUEENS[QUEENS.length - 1].x,
        y: QUEENS[QUEENS.length - 1].y,
      };
      popQueen();
      CHESSBOARD[lastQueen.x][lastQueen.y] = 0;

      if (lastQueen.x + 1 === QUEENS_COUNT) {
        lastQueen = {
          x: QUEENS[QUEENS.length - 1].x,
          y: QUEENS[QUEENS.length - 1].y,
        };
        popQueen();
        CHESSBOARD[lastQueen.x][lastQueen.y] = 0;
        setQueen(lastQueen.x + 1, lastQueen.y);
      } else {
        setQueen(lastQueen.x + 1, lastQueen.y);
      }
    }
    return true;
  }

  function backtracking(col) {
    const column = col;
    setQueen(0, column);
  }

  generateBoard();
  backtracking(0);

  return CHESSBOARD;
}
module.exports = {
  solveNQueensWithBacktrackingAlgorithm,
};
