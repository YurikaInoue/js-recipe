const cat1 = document.getElementById("cat1");
const cat2 = document.getElementById("cat2");
const cat3 = document.getElementById("cat3");
const text1 = document.getElementById("text1");
const button1_1 = document.getElementById("button1_1");
const button1_2 = document.getElementById("button1_2");
const button1_3 = document.getElementById("button1_3");

cat2.style.display = "none";
cat3.style.display = "none";

button1_1.onclick = function() {
    cat1.classList.add("border");
    text1.textContent = "大正解！おでこの模様がさかさまのティアラみたいでしょ？！";
    if(cat1.style.display==="none") {
        cat1.style.display = "block";
        cat2.style.display = "none";
        cat3.style.display = "none";
    }
};

button1_2.onclick = function() {
    cat1.style.display = "none";
    cat2.style.display = "block";
    cat3.style.display = "none";
    text1.textContent = "残念！おしい？ビッキーはこの子です↑";
};

button1_3.onclick = function() {
    cat1.style.display = "none";
    cat2.style.display = "none";
    cat3.style.display = "block";
    text1.textContent = "とらじは某まんがの主人公です！縞々なのは一緒！";
};
//第2問
const human = document.getElementById("human");
const place1 = document.getElementById("place1");
const place2 = document.getElementById("place2");
const place3 = document.getElementById("place3");
const text2 = document.getElementById("text2");
const button2_1 = document.getElementById("button2_1");
const button2_2 = document.getElementById("button2_2");
const button2_3 = document.getElementById("button2_3");

place1.style.display = "none";
place2.style.display = "none";
place3.style.display = "none";

button2_1.onclick = function() {
    text2.textContent = "残念！近いけど違います！（ゼミの先生は私を千葉県民だと思っているが）";
    human.style.display = "none";
    place1.style.display = "block";
    place2.style.display = "none";
    place3.style.display = "none";
};

button2_2.onclick = function() {
    text2.textContent = "大正解！神奈川の海老名です！遊びに来てね？！";
    place2.classList.add("border");
    human.style.display = "none";
    place1.style.display = "none";
    place2.style.display = "block";
    place3.style.display = "none";
};

button2_3.onclick = function() {
    text2.textContent = "残念！子供の頃の旅行で食べたざるそばが美味しかった・・！";
    human.style.display = "none";
    place1.style.display = "none";
    place2.style.display = "none";
    place3.style.display = "block";
};

//3問目
const food = document.getElementById("food");
const food1 = document.getElementById("food1");
const food2 = document.getElementById("food2");
const food3 = document.getElementById("food3");
const text3 = document.getElementById("text3");
const button3_1 = document.getElementById("button3_1");
const button3_2 = document.getElementById("button3_2");
const button3_3 = document.getElementById("button3_3");

food1.style.display = "none";
food2.style.display = "none";
food3.style.display = "none";

button3_1.onclick = function() {
    text3.textContent = "おしい！お好み焼き・たこ焼きは2番目に好きです！";
    food1.classList.add("border-silver");
    food.style.display = "none";
    food1.style.display = "block";
    food2.style.display = "none";
    food3.style.display = "none";
};

button3_2.onclick = function() {
    text3.textContent = "残念！かつ丼は嫌いじゃないけど普通かな？";
    food.style.display = "none";
    food1.style.display = "none";
    food2.style.display = "block";
    food3.style.display = "none";
};

button3_3.onclick = function() {
    text3.textContent = "大正解！インドカレーも洋食屋さんのも何でも大好き！";
    food3.classList.add("border-gold");
    food.style.display = "none";
    food1.style.display = "none";
    food2.style.display = "none";
    food3.style.display = "block";
};

//第4問目 <img>のsrcを変更する方法
/*const human1 = document.getElementById("human1");
const job1 = document.getElementById("job1");
const job2 = document.getElementById("job2");*/
const default4 = document.getElementById("default4");
const image4 = document.getElementById("image4");
const text4 = document.getElementById("text4");
const button4_1 = document.getElementById("button4_1");
const button4_2 = document.getElementById("button4_2");
const button4_3 = document.getElementById("button4_3");

button4_1.onclick = function() {
    text4.textContent = "おしい！似てるけど違う。";
    image4.attributes.item(1).nodeValue = "./images/private-teacher.jpg";
    default4.style.display = "none";
    image4.style.display = "block";
    //image4.classList.remove("border");
};

button4_2.onclick = function() {
    text4.textContent = "はい当たり◎ヒントありすぎだね！";
    //image4.attributes.item(1).nodeValue = "./images/Yurika2.jpg";
    default4.classList.add("border");
    //他のボタンを押して非表示になっている時
    default4.style.display = "block";
    image4.style.display = "none";
};

button4_3.onclick = function() {
    text4.textContent = "まあ雰囲気的にね。でも公民館じゃなくてアパートです。";
    image4.attributes.item(1).nodeValue = "./images/kominkan.jpg";
    default4.style.display = "none";
    image4.style.display = "block";
    //image4.classList.remove("border");
};

//imgタグのsrcの値
//console.dir(image4.attributes.item(1).nodeValue);

//5問目
const image5 = document.getElementById("image5");
const text5 = document.getElementById("text5");
const button5_1 = document.getElementById("button5_1");
const button5_2 = document.getElementById("button5_2");
const button5_3 = document.getElementById("button5_3");

button5_1.onclick = function() {
    text5.textContent = "残念！ちなみにこちらは英語テストの権威の根岸先生です(笑)";
    image5.attributes.item(1).nodeValue = "./images/Negishi-sensei.jpg";
    image5.classList.remove("border");
};

button5_2.onclick = function() {
    text5.textContent = "おしい！これは前にいたゼミです。（先生と相性悪くて移りました）";
    image5.attributes.item(1).nodeValue = "./images/linguistics.jpg";
    image5.classList.remove("border");
};

button5_3.onclick = function() {
    text5.textContent = "大正解！ちなみにこちらは先生のお気に入りの方です。";
    image5.attributes.item(1).nodeValue = "./images/Faulkner.jpg";
    image5.classList.add("border");
};