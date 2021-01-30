const { doc } = require("prettier")

//ヒカキンさんのコード
const input = document.getElementById("input")
const button = document.getElementById("button")
const display = document.getElementById("display")

let array = []
​
// テキストの保存
const saveText = function(textData) {
  array.push(textData)
  localStorage.array = JSON.stringify(array)
}
​
// 保存したテキストの削除
const removeText = function(textData) {
  const index = array.findIndex(function(item) {
    return item.id === textData.id
  })
  array.splice(index, 1)
  localStorage.array = JSON.stringify(array)
}
​
// カードを画面に追加する
const addCard = function(textData) {
  const card = document.createElement("div")
​
  const textSpan = document.createElement("span")
  textSpan.textContent = textData.text
  card.append(textSpan)
​
  const deleteButton = document.createElement("button")
  deleteButton.textContent = "削除"
  deleteButton.onclick = function() {
    card.remove()
    removeText(textData)
  }
  card.append(deleteButton)
​
  display.append(card)
}
​
button.onclick = function() {
  const textData = { text: input.value, id: Date.now() }
  saveText(textData)
  addCard(textData)
}
​
// 初期表示
if (localStorage.array) {
  array = JSON.parse(localStorage.array)
  for (let i = 0; i < array.length; i++) {
    addCard(array[i])
  }
}

//localStorage.removeItem("array")