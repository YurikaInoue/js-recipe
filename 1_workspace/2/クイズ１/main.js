//const { doc } = require("prettier")

const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
//選択肢ボタンを入れる箱
const choicesContainer = document.getElementById("choices-container")
const feedback = document.getElementById("feedback")
//次（または前）のクイズに行くボタン
const nextButton = document.getElementById("next-quiz")
const previousButton = document.getElementById("previous-quiz")
const comment = document.getElementById("comment")

// クイズの内容
const quizzes = [
  //クイズ1つ目
  {
    text: "この星の名前は何でしょう？",
    image: "Ganymede.jpg",
    choices: [
      {
        text: "ゴリアテ",
        feedback: "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。"
      },
      {
        text: "ゼニガメ",
        feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。"
      },
      {
        text: "ガニメデ",
        feedback: "正解！ガニメデは、木星の第三惑星だよ！"
      }
    ]
  },

]

//選択肢の数だけボタンを作ってコンテナに入れる処理
const createButton = function(quiz) {
  for(let i=1; i<=quiz.choices.length; i++) {
    const button = document.createElement("button")
    choicesContainer.append(button)
  }
}

// quiz を画面に表示する関数
const reloadQuiz = function(quiz) {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = "./images/" + quiz.image


  //選択肢の数だけボタンを作る
  createButton(quiz)
  //console.dir(choicesContainer.textContent)

  // 選択肢（ボタン）の中身を表示
  //for文で書き換えた場合
  for(let i=0; i<quiz.choices.length; i++) {
    choicesContainer.children[i].textContent = quiz.choices[i].text
  }
}

// number番目の選択肢を選択する処理
const choose = function(quiz,number) {
  // フィードバックを表示
  feedback.textContent = quiz.choices[number].feedback
}

//ハンドラの登録を行う関数
const registerHandler = function(quiz) {
  //ハンドラの登録をfor文で書く
  for(let i=0; i<quiz.choices.length; i++) {
    choicesContainer.children[i].onclick = function() {
      //i番目の選択肢を選択
      choose(quiz, i)
    }
  }
}

//クイズの表示とハンドラの登録を行う処理
const showQuiz = function(quiz) {
  //クイズの表示
  reloadQuiz(quiz)
  //ハンドラの登録
  registerHandler(quiz)
}
//上の関数を「次の(前の）クイズ」ボタンのハンドラの定義内で実行する

//1つ目のクイズを初期表示 
showQuiz(quizzes[0])

//配列quizzesの要素のインデックス番号
let i = 0

//「次へ」ボタンを押した時の処理
nextButton.onclick = function() {
  //if文で分岐
  //最後のクイズ以外の時
  if(i < quizzes.length-1) {
    i++
    showQuiz(quizzes[i])
    comment.textContent = ""
  } else { //最後のクイズの時
    comment.textContent = "※最後の問題です"
  }
}

//「前へ」ボタンを押した時の処理
previousButton.onclick = function() {
  //if文で分岐
  //最初のクイズ以外の時
  if(i > 0) {
    i--
    showQuiz(quizzes[i])
    comment.textContent = ""
  } else { //最初のクイズの時
    comment.textContent = "※最初の問題です"
  }
}
