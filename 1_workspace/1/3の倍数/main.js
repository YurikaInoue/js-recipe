// 引数 number を受け取る関数
const genkiFunction = function(number) {
  // n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
  for (let n=1; n<=number; n++) {
    if (n % 3 === 0) {
      console.log(`${n}!!!!!!!`)
    } else {
      console.log(n)
    }
  }
}
genkiFunction()

//FizzBuzz
const FizzBuzz = function(number) {
  for(let n=1; n<=number; n++) {
    if(n%3===0 && n%5!==0) {
      console.log("Fizz")
    } else if(n%5===0 && n%3!==0) {
      console.log("Buzz")
    } else if (n%15===0) {
      console.log("FizzBuzz")
    } else {
      console.log(n)
    }
  }
}
FizzBuzz()

//発展２　3が大好き
//数値を文字列に変換
const threeLover = function(number) {
  for(let i=0; i<=number; i++) {
    if (String(i).indexOf("3") !== -1) {
      console.log(`${i}!!!!!!!`)
    } else {
      console.log(i)
    }
  }
}
threeLover()

//数値の各桁を取得する方法(さっきーさん)
/*const include3 = function(inputNumber) {
  // 3で割り切れるなら終了
  if (inputNumber % 3 === 0) {
    console.log(`${inputNumber}!!!!!!`)
    return
  }
​
  // 3が含まれているかをチェック
  let judge = false // 3が含まれているならtrue、含まれていないならfalse
​
  let number = inputNumber // 各桁を見る課程でinputNumberを壊すので、一旦退避させる
​
  // 各桁を見る
  while (number !== 0) {
    const keta = number % 10
    if (keta === 3) {
      judge = true
      break
    }
    number /= 10
  }
​
  if (judge) {
    console.log(`${inputNumber}!!!!!!`)
  } else {
    console.log(inputNumber)
  }
};
​
// include3を1から24まで動かす
for (let i = 1; i <= 24; i++) {
  include3(i)
}*/

//元気な秒針
//タイマーを１つ作り〇秒後に破棄
/*let i = 0
const genki3 = function(number) {
  if(i < number) {
    i++
    if (i % 3 === 0) {
      console.log(`${i}!!!!!!!`)
    } else {
      console.log(i)
    }
  }
}*/

//const timer = function(number) {
  //const id = setInterval(genki3(24), 1000)
  /*if(i >= number) {
    clearInterval(id)
  }
}
timer()*/

//最初のタイマー作成後、一秒ごとに新しいのを破棄・作成し、〇秒後に最後のを破棄
const genki3 = function(number) {
  for(let i=1; i <= number; i++) {
    if (i % 3 === 0) {
      console.log(`${i}!!!!!!!`)
    } else {
      console.log(i)
    }
    
    //setInterval()
  }
}
//genki3(24)

//トミーさんの(いじったやつ←だめ)
/*let i =0
const clock = function(number) {
   i++ //プラス１
   //ifの位置に注意
   if(i <= number) {
    if(i % 3 === 0){
      console.log(`${i}!!!!!!!`)
    }else{
      console.log(i)
    }
  }
}

setInterval(clock(24),1000)*/

//setIntervalのコールバックに引数を渡せない？
let i =0
const clock = function() {
   i++ //プラス１
   //ifの位置に注意
   if(i <= 10) {
    if(i % 3 === 0){
      console.log(`${i}!!!!!!!`)
    }else{
      console.log(i)
    }
  }
}
setInterval(clock, 1000)
//タイマーを止めるには？
//↑だとコンソールに表示されないだけでi++の処理は繰り返される