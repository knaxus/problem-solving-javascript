/**
 * h is calculate by Euclidean Distance.
 * Complexity can be imporved by using Min-heap.
 * Worse case time complexity is O(E), where E is the number of edges in the graph.
 * Read more: [http://theory.stanford.edu/~amitp/GameProgramming/AStarComparison.html]
*/
function AStar(s, e, row, col, inputGrid) {
  const Row = row;
  const Col = col;
  const start = s;
  const end = e;

  function cell() {
    this.cellValue = null;
    this.parent_i = -1;
    this.parent_j = -1;
    this.h = Number.MAX_SAFE_INTEGER;
    this.g = Number.MAX_SAFE_INTEGER;
    this.f = Number.MAX_SAFE_INTEGER;
  }

  function pair(i, j, f) {
    this.i = i;
    this.j = j;
    this.f = f;
  }

  const grid = [];

  for (let i = 0; i < Row; i += 1) {
    grid[i] = [];
    for (let j = 0; j < Col; j += 1) {
      grid[i][j] = new cell();
      grid[i][j].cellValue = inputGrid[i][j];
    }
  }


  const isValid = (i, j) => i >= 0 && j >= 0 && i < Row && j < Col;

  const isDestination = (i, j) => end.i === i && end.j === j;

  const isBlocked = (i, j) => grid[i][j].cellValue === 0;

  const euclideanDistance = (i, j) => Math.abs(i - end.i) * Math.abs(i - end.i)
  + Math.abs(j - end.j) * Math.abs(j - end.j);

  const trace = () => {
    const endRow = end.i;
    const endCol = end.j;
    const startRow = start.i;
    const startCol = start.j;

    let i = endRow;
    let j = endCol;
    const path = [];

    while (!(i === startRow && j === startCol)) {
      path.push([i, j]);

      const nextI = grid[i][j].parent_i;
      const nextJ = grid[i][j].parent_j;
      i = nextI;
      j = nextJ;
    }
    path.push([i, j]);

    for (let i = 0; i < path.length; i += 1) {
      console.log(path[i]);
    }
  };

  const neighbourExplorer = (i, j, parentI, parentJ, openList, openListMap,
    closedListMap, distanceFromParent) => {
    if (!isValid(i, j)) {
      return false;
    }

    if (isBlocked(i, j)) {
      return false;
    }

    if (isDestination(i, j)) {
      grid[i][j].parent_i = parentI;
      grid[i][j].parent_j = parentJ;
      trace();
      return true;
    }


    const g = grid[parentI][parentJ].g + distanceFromParent;
    const h = euclideanDistance(i, j);
    const f = g + h;

    if ((openListMap[[i, j]] && openListMap[[i, j]] > f)
    || (closedListMap[[i, j]] && closedListMap[[i, j]] > f)
    || (!closedListMap[[i, j]] && !openListMap[[i, j]])) {
      openListMap[[i, j]] = f;
      grid[i][j].parent_i = parentI;
      grid[i][j].parent_j = parentJ;
      grid[i][j].g = g;
      grid[i][j].h = h;
      grid[i][j].f = g + h;

      const item = new pair(i, j, f);
      // can be improved by using Min-Heap DataStructure
      if (!openList.length) {
        openList.push(item);
      }
      let k = 0;
      let temp = item;
      for (; k < openList.length; k += 1) {
        if (openList[k].f > item.f) {
          [temp, openList[k]] = [openList[k], temp];
        }
      }
      openList[k] = temp;
    }
    return false;
  };

  const search = () => {
    if (!isValid(start.i, start.j) || !isValid(end.i, end.j)) {
      return false;
    }

    let i = start.i;
    let j = start.j;
    const openList = [];
    const openListMap = new Map();
    const closedListMap = new Map();
    let foundDest = false;

    // Initialize start point
    grid[i][j].h = 0;
    grid[i][j].g = 0;
    grid[i][j].f = 0;

    openList.push(new pair(i, j, 0.0));

    openListMap[[i, j]] = 0;

    while (openList.length > 0) {
      const currentCell = openList.shift();
      i = currentCell.i;
      j = currentCell.j;
      const currentF = currentCell.f;
      closedListMap[[i, j]] = currentF;
      const parentI = i;
      const parentJ = j;

      foundDest = neighbourExplorer(i - 1, j, parentI, parentJ, openList, openListMap, closedListMap, 1); // for North
      if (foundDest) { break; }
      foundDest = neighbourExplorer(i, j - 1, parentI, parentJ, openList, openListMap, closedListMap, 1); // for West
      if (foundDest) { break; }
      foundDest = neighbourExplorer(i + 1, j, parentI, parentJ, openList, openListMap, closedListMap, 1); // for South
      if (foundDest) { break; }
      foundDest = neighbourExplorer(i, j + 1, parentI, parentJ, openList, openListMap, closedListMap, 1); // for East
      if (foundDest) { break; }
      foundDest = neighbourExplorer(i - 1, j - 1, parentI, parentJ, openList, openListMap, closedListMap, 1); // for N.W
      if (foundDest) { break; }
      foundDest = neighbourExplorer(i - 1, j + 1, parentI, parentJ, openList, openListMap, closedListMap, 1);// for S.W
      if (foundDest) { break; }
      foundDest = neighbourExplorer(i + 1, j + 1, parentI, parentJ, openList, openListMap, closedListMap, 1);// for S.E
      if (foundDest) { break; }
      foundDest = neighbourExplorer(i + 1, j - 1, parentI, parentJ, openList, openListMap, closedListMap, 1);// for N.E
      if (foundDest) { break; }
    }


    if (!foundDest) {
      return false;
    }
    return true;
  };
  search();
}


// const inputGrid = [
//   [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
//   [1, 1, 1, 0, 1, 1, 1, 0, 1, 1],
//   [1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
//   [0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
//   [1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
//   [1, 0, 1, 1, 1, 1, 0, 1, 0, 0],
//   [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
//   [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
//   [1, 1, 1, 0, 0, 0, 1, 0, 0, 1],
// ];

const inputGrid = [
  [1, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1],
];

const ROW = inputGrid.length;
const COL = inputGrid[0].length;
const start = {
  i: 0,
  j: 0,
};
const end = {
  i: 3,
  j: 5,
};

AStar(start, end, ROW, COL, inputGrid);


module.exports = {
  AStar,
};
