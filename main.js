const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const bntTry = document.querySelector("#bntTry")
let menu = document.querySelector("main")

let listLuck = [
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si",
    "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida",
    "Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida",
    "Sem o fogo do entusiasmo, não há o calor da vitória",
    "As pessoas esquecerão o que você disse e o que você fez… mas nunca esquecerão como se sentiram",
    "Se você se sente só é porque construiu muros ao invés de pontes",
    "Muitas das grandes realizações do mundo foram feitas por homens cansados e desanimados que continuaram o seu trabalho",
    "Não acredite mais em pessoas especiais, mas em momentos especiais com pessoas normais",
    "Você sempre será a sua melhor companhia!"
]
function closedCookie(event){
    event.preventDefault()
    menu.style.height = "564px";
    toggleScreen()
    screen2.querySelector("#closedCookie").innerText = listLuck[random]
}

function toggleScreen (){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

bntTry.addEventListener('click', function(){
    toggleScreen()
    random = Math.floor(Math.random() * listLuck.length)
    menu.style.height = "424px";
}
)
let random = Math.floor(Math.random() * listLuck.length)