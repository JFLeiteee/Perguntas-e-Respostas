const btn = document.querySelectorAll(".btn");
const answer = document.querySelectorAll(".answer");

for(let i = 0; i <= 16; i++) {
    btn[i].addEventListener("click", function (e) {
        console.log(btn[i].dataset.resposta)
        
        // let respostas = ["Alvarez Cabral", "Yuri Gagarin", "206", "Mercúrio"];
        if(btn[i].dataset.resposta == "correta") {
            btn[i].classList.add("correct");
        }
        else {
            btn[i].classList.add("wrong");
        }
    })
}