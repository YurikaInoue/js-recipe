const input = document.getElementById("input")
const button = document.getElementById("button")
const back = document.getElementById("back")
const change = document.getElementById("change")
const container = document.getElementById("container")
const display = document.getElementById("display")
const canBox = document.getElementById("can-box")

let money = 0

button.onclick = function() {
    money += Number(input.value)
    display.textContent = money
    input.value = ""
}

back.onclick = function() {
    change.textContent = money
    money = 0
    display.textContent = money
}

const createBtn = (drink) => {
    const btnBox = document.createElement("div")
    btnBox.classList.add("btn-box")
    container.append(btnBox)

    const button = document.createElement("div")
    button.classList.add("button")
    button.textContent = drink.name
    button.style.backgroundColor = drink.bgcol
    btnBox.append(button) //ここまでは出来た

    const canPrice = document.createElement("div")
    canPrice.textContent = `${drink.price} 円`
    btnBox.append(canPrice)

    const canNum = document.createElement("div")
    canNum.textContent = `(${drink.number} 本)`
    btnBox.append(canNum)

    button.onclick = () => { //アロー関数にしたらできた
        if(money >= drink.price && drink.number !==0 ) {
            drink.number -= 1
            localStorage.drinks = JSON.stringify(drinks)
            canNum.textContent = `(${drink.number} 本)`
    
            money -= drink.price
            display.textContent = money

            const can = document.createElement("span")
            can.textContent = drink.icon
            canBox.append(can)
        }
    }
}



let drinks = []

class Drink {
    constructor(name, price, number, icon, bgcol) {
        this.name = name
        this.price = price
        this.number = number
        this.icon = icon
        this.bgcol = bgcol

        drinks.push(this)
        localStorage.drinks = JSON.stringify(drinks)

        //ボタンの作成ここから
        createBtn(this)
        //ボタンの作成ここまで
        
    }
}

//初期表示
if(localStorage.drinks) {
    drinks = JSON.parse(localStorage.drinks)
    //商品ボタンの作成
    for(const drink of drinks) {
        createBtn(drink)
    }
} else {
    new Drink("お茶", 100, 50, "🍵", "#4B8A08")
    new Drink("牛乳", 120, 50, "🥛", "#F5D0A9")
    new Drink("オレンジ", 120, 50, "🍊", "#FE9A2E")
    new Drink("リンゴ", 130, 50, "🍏", "#FF4000")
    new Drink("コーヒー", 110, 50, "☕", "#61380B")
}

console.dir(drinks)
//localStorage.removeItem("drinks")



