function katesWayOut(input) {

    let rows = Number(input[0]);
    let maze = input.slice(1).map(row => row.split(""));
    let maxMoves = 0;
    let foundExit = false;

    let startRow, startCol;

    for (let r = 0; r < rows; r++) {

        for (let c = 0; c < maze[r].length; c++) {

            if (maze[r][c] === 'k') {

                startRow = r;
                startCol = c;

            }
        }
    }

    function isInside(row, col) {

        return row >= 0 && row < rows && col >= 0 && col < maze[row].length;

    }

    function isValid(row, col) {

        return isInside(row, col) && maze[row][col] === ' ';

    }

    function isExit(row, col) {

        return row === 0 || row === rows - 1 || col === 0 || col === maze[row].length - 1;

    }

    function dfs(row, col, moves, visited) {

        if (isExit(row, col) && (row !== startRow || col !== startCol)) {

            foundExit = true;
            let totalMoves = moves + 1;

            if (totalMoves > maxMoves) {

                maxMoves = totalMoves;

            }
        }

        let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

        for (let [dr, dc] of directions) {

            let newRow = row + dr;
            let newCol = col + dc;

            if (isValid(newRow, newCol) && !visited[newRow][newCol]) {

                visited[newRow][newCol] = true;
                dfs(newRow, newCol, moves + 1, visited);
                visited[newRow][newCol] = false;

            }
        }
    }

    let visited = Array.from({ length: rows }, (_, r) => Array(maze[r].length).fill(false));
    visited[startRow][startCol] = true;

    dfs(startRow, startCol, 0, visited);

    if (foundExit) {

        console.log(`Kate got out in ${maxMoves} moves`);

    } else {

        console.log("Kate cannot get out");

    }
}
katesWayOut([ 4, "######", "##  k#", "## ###", "## ###"]);
katesWayOut([ 5, "######", "##  k#", "## ###", "######", "## ###"]);