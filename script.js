let items = document.querySelectorAll('.item')
let turn = '0'
let player1 = document.querySelector('.player1')
let player2 = document.querySelector('.player2')
let button = document.querySelector('#btn')
let over = false;
let clicks = 0;
function checkTurn(elem) {
  if (turn == '0') {
    elem.innerHTML = '0'
    turn = 'X'
    player2.innerHTML = 'Turn For "X"'
    player1.innerHTML = ''
  }
  else {
    elem.innerHTML = 'X'
    turn = '0'
    player2.innerHTML = ''
    player1.innerHTML = 'Turn For "0"'
  }
}

let checkWin = () => {
  if(clicks==9&& !over){
    player1.innerHTML='No One Wins !!';
    player2.innerHTML='No One Wins !!';
  }
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
    [0, 3, 6]
  ]
  for (let i = 0; i < wins.length; i++) {
    if (items[wins[i][0]].innerHTML == items[wins[i][1]].innerHTML && items[wins[i][0]].innerHTML == items[wins[i][2]].innerHTML && items[wins[i][0]].innerHTML !== '') {
      if (items[wins[i][0]].innerHTML == 0) {
        player1.innerHTML = ' "0" Wins'
        player2.innerHTML = ''
        over = true;
      }
      else {
        player2.innerHTML = ' "X" Wins'
        player1.innerHTML = ''
        over = true;
      }
    }
  }
}
function gameLohic() {
  Array.from(items).forEach(element => {
    element.addEventListener('click', function addEl() {
      if (element.innerHTML == '') {
        clicks++;
        element.classList.add('itemText')
        if (!over) {
          checkTurn(element);
          checkWin();
        }
      }
      else {
        console.log('already clicked')
      }
    })
  })
}
function whole() {
  document.getElementsByClassName('main')[0].style.visibility = 'initial'
  gameLohic();
  button.innerHTML = 'Replay'
  turn = '0'
  player1.innerHTML = 'Turn For "0"'
  player2.innerHTML = ''
  over = false;
  clicks=0;
  Array.from(items).forEach(element => {
    element.innerHTML = ''
  })
}
