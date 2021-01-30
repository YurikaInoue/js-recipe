//imgタグを入れる箱
const images = document.getElementById("images")
//犬種と画像枚数のセレクトボックス
const selectBreed = document.getElementById("select-breed")
const selectNumber = document.getElementById("select-number")
//指定に応じて画像を表示するボタン
const execute = document.getElementById("execute")

//犬種の配列を取得して、選択肢に追加する
const addBreed = function() {
  fetch("https://dog.ceo/api/breeds/list/all")
  .then((res) => {
    return res.json() // 結果を json として読み込む
  })
  .then((data) => { //dataはjson形式のデータ
    const breeds = Object.keys(data.message) // 犬種の配列を取得
    //犬種の数だけoption要素を作成・追加
    for(let breed of breeds) { //breedsもjson形式のデータ
      const option = document.createElement("option")
      option.textContent = breed
      selectBreed.append(option) //!selectBreedを.thenの外で出力すると空!(になってた)
    }
    console.dir(selectBreed) //値が入っている事を確認
    
    //初期表示
    //初期選択
    selectBreed.children[2].setAttribute("selected", "")
    selectNumber.children[2].setAttribute("selected", "")
    //画像を表示
    addSource(selectBreed.value, selectNumber.value)
  })
}

//selectNumberの選択肢を作る
const addNumber = function() {
  for(let i=1; i<=50; i++) {
    const option = document.createElement("option")
    option.textContent = i
    selectNumber.append(option)
  }
}
addNumber()

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
    //console.dir(images) //#images
    //各img要素に対して、srcの値を順に登録していく
    for(let i=0; i<number; i++) {
      images.children[i].src = data.message[i]
    }
  })
}

addBreed()
console.dir(selectBreed)
console.dir(selectBreed.children)

//ボタンで画像を表示する
execute.onclick = function() {
  images.textContent = ""
  addSource(selectBreed.value, selectNumber.value)
}
