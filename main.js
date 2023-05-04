const botao = document.querySelectorAll(".btn");
const texto = document.querySelectorAll(".card-texto>span");

// Utilizando o método forEach.
botao.forEach((btn, i) => {
  btn.innerHTML = "Mostrar Mais";
  texto[i].style.display = "none";
  
    btn.addEventListener("click", function() {
      if (texto[i].style.display === "none" && btn.innerHTML === "Mostrar Mais") {
        texto[i].style.display = "flex";
        btn.innerHTML = "Mostrar Menos";
      } else {
        texto[i].style.display = "none";
        btn.innerHTML = "Mostrar Mais";
      }
    });
  });

  // Com estrutura de repetição For.
/*
    for(let i = 0; i < botao.length; i++){   
      botao[i].innerHTML = "Mostrar Mais";
      texto[i].style.display = "none";

        botao[i].addEventListener("click", function() {
            if(texto[i].style.display === 'none' && botao[i].innerHTML === "Mostrar Mais") {
                texto[i].style.display = 'flex'; 
                botao[i].innerHTML = "Mostrar Menos";
            }else {
                texto[i].style.display = 'none'; 
                botao[i].innerHTML = "Mostrar Mais";
            }
        })
    } 
*/

// Menu Hamburguer

const btnHamburguer = document.querySelector(".menu-hamburguer");
const menuEscondido = document.querySelector(".menu-escondido");

menuEscondido.style.display = "none";


btnHamburguer.addEventListener("click", () => {
  if (menuEscondido.style.display === "none" ) {
    menuEscondido.style.display = "block";
    btnHamburguer.style.backgroundColor = "var(--destaque-tabela)";
  } else {
    menuEscondido.style.display = "none";
    btnHamburguer.style.backgroundColor = "";
  }

} ) 

