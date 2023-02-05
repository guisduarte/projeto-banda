
//Atribuindo evento de click no botão Mostrar Mais/Menos através de um laço de repetição com For.

const botao = document.querySelectorAll(".btn");
const texto = document.querySelectorAll(".card-texto-2");

for(let i = 0; i < 6; i++){
    botao[i].addEventListener("click", function() {
        if(texto[i].style.display === 'none' && botao[i].innerHTML === "Mostrar Mais"){
            texto[i].style.display = 'flex'; botao[i].innerHTML = "Mostrar Menos"
        }else{
            texto[i].style.display = 'none'; botao[i].innerHTML = "Mostrar Mais"
        }
    })
}

