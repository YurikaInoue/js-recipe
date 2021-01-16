//ブラウザの要素を取得
const figure = document.getElementById("figure")

//イベントハンドラの定義
figure.onclick = function () {
    if(figure.classList.contains("square")) {
        figure.classList.remove("square")
        figure.classList.add("rounded")

    } else if(figure.classList.contains("rounded")) {
        figure.classList.remove("rounded")
        figure.classList.add("triangle")

    } else if(figure.classList.contains("triangle")) {
        figure.classList.remove("triangle")
        figure.classList.add("square")
    }
    
}
//三角形のCSSを変更する
//triangleクラスの要素を取得
const triangle = document.querySelector(".triangle")
//triangleのCSSを変更する関数
const triangleCSS = function(a) {
    triangle.style.borderRight = `${a}px solid transparent`
    triangle.style.borderLeft = `${a}px solid transparent`
    triangle.style.borderBottom = `${a * Math.sqrt(3)}px`
}
triangleCSS(50)

console.dir(figure)
console.dir(figure.style)
console.dir(triangle.style)
