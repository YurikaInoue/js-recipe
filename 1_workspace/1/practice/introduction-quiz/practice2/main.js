const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const display = document.getElementById("display");
const image = document.getElementById("image");

button1.onclick = function() {
    display.textContent = "おしい！";
    button1.style.border = "none";
    image.attributes.item(0).nodeValue = "https://www.koneko-breeder.com/breeder/data/uta0530/cat_img_1_79a513df08a9e68967bad65fde4a44920ca69bd8.jpg";

button2.onclick = function() {
    display.textContent = "残念！";
    button2.style.border = "none";
    image.attributes.item(0).nodeValue = "https://cdn.mofmo.jp/v3/640/imeditor_storage/1/article/1048752710.jpg";
};

button3.onclick = function() {
    display.textContent = "大正解！";
    button3.style.border = "none";
    image.attributes.item(0).nodeValue = "https://lh3.googleusercontent.com/proxy/IREfoyFl6kUSGR6uThB6Sr4EuRmIrxLENAoyv-CL8VFGauViPjamoSv79TrmMTauEZLVAa8uJB2eYwxQFdKa";
};


const Yurika = {
    name: {
        first: "Yurika",
        last: "Inoue"
    },
    age: "secret",
    college: "TUFS",
    greet: function() {
        console.log("Hi!There!");
    }
};