function print_contact()  {
    alert (' skype: helper  \n telegram: @helper \n tel:ПЕЛЬМЕНИ РЯДОМ БЕРЕГИТЕСЬ АААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААА')
}
function colCOOLator() {
let x=parseInt( prompt('введите пельмень'))
let y=parseInt( prompt('введите число'))
let press_f=x+y
alert('это сложение_Ы'+press_f)
let press_q=x-y
alert('это вычитание_Ы'+press_q)
let press_e=x*y
alert('это умножение_Ы'+press_e)
let press_s=x/y
alert('это деление_Ы'+press_s)
}
function pel() {
let x="два слова"
x=x.toUpperCase()
alert("значинее ха пельмени"+x)
}
function pelm() {
let y = document.getElementById("pelm")
if (window.getComputedStyle(y).opacity!="0") {
y.style.opacity="0"}
else{
y.style.opacity="1"
}
}
function change_style() {
let y = document.getElementById("main")
if (y.style.backgroundColor=="rgb(255, 255, 255)") {
y.style.backgroundColor="green"
}
else {
y.style.backgroundColor="rgb(255, 255, 255)"
}}
const onyx=document.querySelector(".onyx")
const ps=document.querySelector(".ps")
const lena=document.querySelector(".lena")
const olyx=document.querySelector(".olyx")
ps.addEventListener("click", function(){
onyx.classList.add("onyx_1")
olyx.classList.add("olyx_1")
})
lena.addEventListener("click", function(){
onyx.classList.remove("onyx_1")
olyx.classList.remove("olyx_1")
})
function star_vs_unshaded_stars(y)
{
let x= ["star1","star2","star3","star4","star5"]
for (let i=0;i<=y;i++) {
   let b=x[i]
   let y=document.getElementById(b)
   y.src="другую папку/star1.png"
}
}
function valid_pelmen() {
    let name = document.getElementById("name")
    let surname = document.getElementById("surname")
    let mail = document.getElementById("mail")
    let telephone = document.getElementById("telephone")
    if(name.validity.rangeUnderflow){
        document.getElementById("namee").innerHTML = "Имя слишком короткое"
    }
}
    // document.getElementById("namee").innerHTML = "Имя " + name.value

// function change_style2() {
// let y = document.getElementById("onyx")
// if (y.style.display=="none")
// y.style.display="block";
// else {
// y.style.display="none"
// }
// }