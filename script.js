const btn = document.querySelectorAll(".btn");
const answer = document.querySelectorAll(".answer");
let correct = 0;

for(let i = 0; i <= 16; i++) {
    btn[i].addEventListener("click", function (e) {

        let respostas = ["Alvarez Cabral", "Yuri Gagarin", "206", "Mercúrio" ]

        verificar();

        function verificar() { 
            if(!btn[i].innerHTML){
                return;
            }
            else {
            for(let p = 0; p <= 3; p++) {
                if(btn[i].innerHTML != respostas[p]){
                    btn[i].classList.add("wrong");
                }
                else {
                    btn[i].classList.add("correct");
                    return;
                }
            }
            }
        }
    })
}