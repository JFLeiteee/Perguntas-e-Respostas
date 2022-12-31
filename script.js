const btn = document.querySelectorAll(".btn");
const answer = document.querySelectorAll(".answer");
const correct = document.querySelector(".corrects");
const result = document.querySelector(".result");
const wrong = document.querySelector(".wrongs");
let correto = 0;
let errado = 0;

for(let i = 0; i <= 16; i++) {
    btn[i].addEventListener("click", function (e) {
        console.log(btn[i].dataset.resposta)
        
        // let respostas = ["Alvarez Cabral", "Yuri Gagarin", "206", "Mercúrio"];
        if(btn[i].dataset.resposta == "correta") {
            btn[i].classList.add("correct");
            btn[i].style.cursor = "not-allowed"
            correto += 1;
            result.getElementsByTagName("span")[0].innerHTML = correto;
        }
        else {
            btn[i].classList.add("wrong");
            btn[i].style.cursor = "not-allowed"
            errado += 1;
            result.getElementsByTagName("span")[1].innerHTML = errado;
        }

    })
}