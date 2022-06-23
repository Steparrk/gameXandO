let players = ['x', 'o'];
let activePlayer = 0;
let arrayVertical = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
let arrayDiagonal = [
  ['', '', ''],
  ['', '', '']
];
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function startGame() {
  
  for(i = 0; i<board.length; i++){
    for(t = 0; t<board[i].length; t++){
      board[i][t] = '';
  }
  }
  
  renderBoard(board);
  
}

function click(row, col) {
  
  board[row][col] =players[activePlayer];
  
  
  function sumCombo(array) {
    for(let t = 0; t<array.length; t++){
      for(let k = 0; k<array[t].length; k++){
        arrayVertical[t][k] = board[k][t];
        arrayDiagonal[0][k] = board[k][k];
      
      }
    }
        arrayDiagonal[1][0] = board[0][2];
        arrayDiagonal[1][1] = board[1][1];
        arrayDiagonal[1][2] = board[2][0];
    }

  function checkSymbol(symbol) {
    return symbol == players[activePlayer];
  }
  function checkComboArray(array) {
    for(i = 0; i<array.length; i++){
      if(array[i].every(checkSymbol)){
      showWinner(players[activePlayer].toUpperCase());
      }
    }
   }
  
  sumCombo(board);

  checkComboArray(board);
  checkComboArray(arrayVertical);
  checkComboArray(arrayDiagonal);

  renderBoard(board);
  
  if(activePlayer == 0) {
    activePlayer = 1;
  }else{
    activePlayer = 0;
  }
  
}
