//ブラウザから要素の取得
const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const doubleButton = document.getElementById("double-button")

let count = 0

// ボタン要素のonclickハンドラに関数を代入する
plusButton.onclick = function(){
  // count を更新
  count++
  // count を表示
  display.textContent = count
}

//-1ボタンの操作
minusButton.onclick = function(){
  // count を更新
  count--
  // count を表示
  display.textContent = count
}

//x2ボタンの操作
doubleButton.onclick = function(){
  // count を更新
  count = count * 2
  // count を表示
  display.textContent = count
}