const display = document.getElementById("display")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")

let count = 0

const countUp = function() {
  // count を更新
  count ++
  //console.log(count)
  // count を秒単位にして表示
  display.textContent = count/10**2
  //console.log(count/10**2)
}

let id = null

button1.onclick = function() {
  if (id === null) { // start
    id = setInterval(countUp, 10)
    button1.textContent = "stop"
  } else { // stop
    clearInterval(id)
    id = null
    button1.textContent = "restart"
  }
}
//リセットボタンの処理
button2.onclick = function() {
  //ストップボタンを押してない時
  if(id !== null) {
    clearInterval(id)
    id = null
  }
  count = 0
  display.textContent = count
  button1.textContent = "start"
}

button1.onmousedown = function() {
    button1.classList.add("mousedown")
}