
const botao = document.querySelectorAll(".btn");
const texto = document.querySelectorAll(".card-texto-2");

// Utilizando o método forEach.
botao.forEach((btn, i) => {
    btn.addEventListener("click", function() {
      if (texto[i].style.display === "none" || btn.innerHTML === "Mostrar Mais") {
        texto[i].style.display = "flex";
        btn.innerHTML = "Mostrar Menos";
      } else {
        texto[i].style.display = "none";
        btn.innerHTML = "Mostrar Mais";
      }
    });
  });

  // Com um Loop de repetição For.
/*
    for(let i = 0; i < botao.length; i++){
        botao[i].addEventListener("click", function() {
            if(texto[i].style.display === 'none' || botao[i].innerHTML === "Mostrar Mais"){
                texto[i].style.display = 'flex'; botao[i].innerHTML = "Mostrar Menos"
            }else{
                texto[i].style.display = 'none'; botao[i].innerHTML = "Mostrar Mais"
            }
        })
    } 
*/

