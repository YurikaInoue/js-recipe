//imgタグを入れる箱
const images = document.getElementById("images-container")
//犬種と画像枚数のセレクトボックス
const selectBreed = document.getElementById("select-breed")
const selectNumber = document.getElementById("select-number")
//指定に応じて画像を表示するボタン
const execute = document.getElementById("execute")

//犬種の配列を取得して、選択肢に追加する
fetch("https://dog.ceo/api/breeds/list/all")
  .then((res) => {
    return res.json() // 結果を json として読み込む
  })
  .then((data) => {
    const breeds = Object.keys(data.message) // 犬種の配列を取得
    //犬種の数だけoption要素を作成・追加
    for(breed of breeds) {
      const option = document.createElement("option")
      option.textContent = breed
      selectBreed.append(option)
    }
  })

//selectNumberの選択肢を作る
for(let i=1; i<=50; i++) {
  const option = document.createElement("option")
  option.textContent = i
  selectNumber.append(option)
}

//指定枚数分のimg要素を作る処理
const createImages = function(number) {
  for(let i=1; i<= number; i++) {
    const image = document.createElement("img")
    image.alt = "おねんね中"
    images.append(image)
  }
}

//imgにsrcの値を登録する処理
const addSource = function(breed, number) {
  // 指定したサーバーにデータを取りに行く
  fetch(`https://dog.ceo/api/breed/${breed}/images/random/${number}`)
  .then((res) => {
    return res.json() // 結果を json として読み込む
  })
  .then((data) => {
    createImages(number) // 枚数分img要素を作成
    //各img要素に対して、srcの値を順に登録していく
    for(let i=0; i<number; i++) {
      images.children[i].src = data.message[i]
    }
  })
}

//ボタンで画像を表示する
execute.onclick = function() {
  images.textContent = ""
  addSource(selectBreed.value, selectNumber.value)
}

//初期表示//上手く行かない
//初期選択
selectBreed.children[0].setAttribute("selected")
selectNumber.children[2].setAttribute("selected")
//画像を表示
addSource(selectBreed.value, selectNumber.value)
