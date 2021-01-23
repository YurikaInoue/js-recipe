const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

//console.dir(inputElement.id)//input-todo

const submitInput = function() {
  // カードを作成する
  const card = createCard(inputElement.value)
  container.append(card)

  // 入力欄を空にする
  inputElement.value = ''
}

// 追加ボタンを押したときの処理を登録
addButton.onclick = submitInput

//発展１
//Enterキーを押したときの処理を登録
inputElement.onkeydown = function(e) {
  if(e.key === "Enter") {
    submitInput()
  }
}

//ハンドラの引数でイベントオブジェクトを受け取れる
//下の例では、引数eがkeydownイベントのオブジェクト
/*document.onkeydown = function(e) {
  console.dir(e.key)//押したキーの名前
}*/

// 共通の処理：テキストからカードを作成する
const createCard = function(text){
  // カードの枠を作る
  const card = document.createElement("div")
  card.className = "card"

  // テキストを表示する部分を作る
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  // 削除ボタンを作る
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  // 削除ボタンを押したときの処理を登録
  deleteButton.onclick = function(){
    // カードを削除する
    card.remove()
  }
  card.append(deleteButton)

  return card
}


//発展問題２（カードの追加）

////入力欄を作成して任意の親要素に追加する処理
const createInputContainer = function(container, listFooter) {
  //divタグ（入力欄の箱）作成
  const inputContainer = document.createElement("div")
  inputContainer.className = "input-container"

  //inputタグ作成
  const input = document.createElement("input")
  input.className = "input-todo"
  inputContainer.append(input)

  //メモ提出時の処理
  const submitInput = function() {
    const card = createCard(input.value)
    container.append(card)
    input.value = ""
  }

  //input上でEnterキーを押した時にも、メモを提出できるようにする
  input.onkeydown = function(e) {
    if(e.key === "Enter") {
      submitInput()
    }
  }

  //divタグ（追加ボタン）作成
  const inputButton = document.createElement("div")
  inputButton.className = "input-button"
  inputButton.textContent = "追加"
  
  //inputButtonをクリックしたときの処理
  inputButton.onclick = submitInput
  
  //ボタンを親要素に追加
  inputContainer.append(inputButton)

  //入力欄の箱を任意の親要素に追加
  listFooter.append(inputContainer)

}

//「大学」のリスト
const addCard = document.getElementById("add-card")
const listFooter1 = document.getElementById("list-footer1")
const container1 = document.getElementById("cards-container_1")

//「＋カードを追加」を押した時の処理
addCard.onclick = function() {
  //リストフッターに.input-containerがあるかで分岐
  if(listFooter1.children[1] === undefined) {
    createInputContainer(container1, listFooter1)
  } else {
    listFooter1.children[1].remove()
  }
}
//console.dir(listFooter1.children[0])
//console.dir(listFooter1.children[1])

//「家事」のリスト
const addCard2 = document.getElementById("add-card2")
const listFooter2 = document.getElementById("list-footer2")
const container2 = document.getElementById("cards-container_2")

//「＋カードを追加」を押した時の処理
addCard2.onclick = function() {
  //リストフッターに.input-containerがあるかで分岐
  if(listFooter2.children[1] === undefined) {
    createInputContainer(container2, listFooter2)
  } else {
    listFooter2.children[1].remove()
  }
}

//発展2-2 リストを追加する
//DOMからHTML要素を取得
const addList = document.getElementById("add-list")
const mainContainer = document.getElementById("main-container")

//addListをクリック時の処理を登録
//addList.onclick = createList//下で定義する

//新しいリストを作る処理
const createList = function() {
  //.list-containerのdivを作成
  const listContainer = document.createElement("div")
  listContainer.className = "list-container"

  //.list-headerのdivを作成
  const listHeader = document.createElement("div")
  listHeader.className = "list-header"
  //listHeader.textContent = ""
  //listContainer.append(listHeader)


  //listHeaderの値を入力する入力欄の箱を作る
  const inputHeaderContainer = document.createElement("div")
  inputHeaderContainer.className = "input-container"

  //input要素
  const inputHeader = document.createElement("input")
  inputHeader.className = "input-todo"
  inputHeaderContainer.append(inputHeader)

  //ボタン
  const headerButton = document.createElement("div")
  headerButton.className = "input-button"
  headerButton.textContent = "作成"
  inputHeaderContainer.append(headerButton)

  //ボタンの処理を登録
  headerButton.onclick = function() {
    listHeader.textContent = inputHeader.value
    
    //.cards-containerのdivを作成
    const cardsContainer = document.createElement("div")
    cardsContainer.className = "cards-container"
    listContainer.append(cardsContainer)

    //.list-footerのdivを作成
    const listFooter = document.createElement("div")
    listFooter.className = "list-footer"

    //.list-footerの子要素を作成
    const addCard = document.createElement("span")
    addCard.className = "add-card"
    addCard.textContent = "＋カードを追加"
    listFooter.append(addCard)

    //「＋カードを追加」を押した時の処理
    addCard.onclick = function() {
      //リストフッターに.input-containerがあるかで分岐
      if(listFooter.children[1] === undefined) {
        createInputContainer(cardsContainer, listFooter)
      } else {
        listFooter.children[1].remove()
      }
    }

    /*//addCardをクリック時の処理を登録
    addCard.onclick = function() {
      //listFooterに.input-containerのdivを作成
      const inputContainer = document.createElement("div")
      inputContainer.className = "input-container"

      //inputContainerの子要素を作成
      //input要素
      const input = document.createElement("input")
      input.className = "input-todo"
      inputContainer.append(input)

      //ボタン
      const inputButton = document.createElement("div")
      inputButton.className = "input-button"
      inputButton.textContent = "追加"

      //入力したメモをカード一覧に追加する処理
      const submitNote = function() {
        const card = createCard(input.value)
        cardsContainer.append(card)
        input.value = ""
      }

      //ボタンの処理を登録
      inputButton.onclick = submitNote

      //Enterキーにも同様の処理を登録
      input.onkeydown = function(e) {
        if(e.key === "Enter") {
          submitNote
        }
      }

      //ボタンを親要素に追加
      inputContainer.append(inputButton)

      //inputContainerをlistFooterに追加
      listFooter.append(inputContainer)
    }*/

    //listFooterをlistContainerに追加
    listContainer.append(listFooter)
  }


  //listHeaderの中にinputContainerを追加
  listHeader.append(inputHeaderContainer)
  listContainer.append(listHeader)
  mainContainer.append(listContainer)

}

addList.onclick = createList

  //.list-headerのdivを作成
  /*const listHeader = document.createElement("div")
  listHeader.className = "list-header"
  //listHeader.textContent = ""
  listContainer.append(listHeader)*/

  //.cards-containerのdivを作成
  /*const cardsContainer = document.createElement("div")
  cardsContainer.className = "cards-container"
  listContainer.append(cardsContainer)*/

  //.list-footerのdivを作成
  /*const listFooter = document.createElement("div")
  listFooter.className = "list-footer"

  //.list-footerの子要素を作成
  const addCard = document.createElement("span")
  addCard.className = "add-card"
  addCard.textContent = "＋カードを追加"
  listFooter.append(addCard)

  //listFooterをlistContainerに追加
  listContainer.append(listFooter)*/
