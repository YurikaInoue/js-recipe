const input = document.getElementById("input")
const button = document.getElementById("button")
const display = document.getElementById("display")

// 状態を表現する変数
let list = []

//listに要素を追加して保存
const saveText = function(textData) {
    list.push(textData)
    localStorage.list = JSON.stringify(list)
}

//listから要素を削除して保存
const removeText = function(textData) {
    const id = list.findIndex((item) => {
        return item.id === textData.id
    })
    list.splice(id, 1)
    localStorage.list = JSON.stringify(list)
}

//カードの作成
const addCard = function(textData) {
    //カードの箱
    const card = document.createElement("div")
    //文字列を入れるspan
    const textSpan = document.createElement("span")
    textSpan.textContent = textData.text
    card.append(textSpan)
    //削除ボタンの作成
    const button = document.createElement("button")
    button.textContent = "削除"
    //削除ボタンの処理の登録
    button.onclick = function() {
        removeText(textData)
        card.remove()
    }
    card.append(button)
    display.append(card)
}

//入力内容の提出
const addData  = function () {
    //入力内容をオブジェクトとして定義
    const textData = {text:input.value, id:Date.now()}
    //localStorage.listの値の更新
    saveText(textData)
    //画面への表示
    addCard(textData)
    input.value = ""
};

button.onclick = addData

//Enterキーでも送信できるように
input.onkeypress = function(e) {
    if(e.key === "Enter") {
        addData()
    }
}

//初期表示
if (localStorage.list) {
    // 状態の更新 list: [] -> ["こんにちは"]
    list = JSON.parse(localStorage.list)
  
    // 状態の変化を画面に表示する
    for (let textData of list) {
      addCard(textData)
    }
}

console.dir(list)
  //localStorage.removeItem("list")