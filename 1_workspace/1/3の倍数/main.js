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

//3が大好き
const threeLover = function(number) {
  for(let i=1; i<=number; i++) {
    if(i.contains(3)) {

    }
  }
}