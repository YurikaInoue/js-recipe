//window.localStorage.text = "こんにちは"
//localStorage.removeItem("text")

//Week３小テスト

//const str = "0101101"

const toMorseCode = function(str) {
    //slice()で1文字ずつ切り取り、配列arrayに入れる
    const array = []
    for(let i=0; i<str.length; i++) {
        if(i < str.length-1) {
            array.push(str.slice(i, i+1))
        } else {
            array.push(str.slice(i))
        }   
    }
    console.log(array) //配列化に成功！

    /*console.log(array[0]) //0
    array[0] = "・"
    console.log(array[0]) // ・ */

    //0か1かで処理を分けて値を更新する //for(let item of array)では不可だった（なぜ？）
    for(let i=0; i<array.length; i++) {
        if(array[i] === "0") {
            array[i] = "・"
        } else if(array[i] === "1") {
            array[i] = "-"
        }
    }
    console.log(array) //更新されたarray

    //配列を再び文字列に戻す
    let newStr = ""
    for(let item of array) {
        newStr = newStr + item
    }
    console.log(newStr) //成功！

    return newStr
} 

console.log(toMorseCode("0101101"))

//小テストWeek3
//const str ="12-34-5"
const addAllNumbers = function(str) {
    //"-"でsplitする
    console.dir(str.split("-")) //成功！
    //.map(Number)で全要素を数値化
    const numbers = str.split("-").map(Number)
    console.log(numbers) //成功！
    //各要素を足し合わせる
    let sum = 0
    for(let i=0; i<numbers.length; i++) {
        sum = sum + numbers[i]
    }
    console.log(sum)
    return sum
}
    
console.log(addAllNumbers("12-34-5")) //成功！