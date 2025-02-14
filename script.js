document.addEventListener("DOMContentLoaded", function () {
    contarTempo();
});

function mostrarSurpresa() {
    document.getElementById("surpresa").style.display = "block";
}

function contarTempo() {
    const dataInicio = new Date('2022-11-19T00:00:00'); // Data do início do relacionamento
    const agora = new Date();

    const diff = agora - dataInicio; // Diferença em milissegundos
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24)); // Calcular dias
    const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Calcular horas
    const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)); // Calcular minutos

    const contador = `${dias} dias, ${horas} horas, ${minutos} minutos`;
    document.getElementById("contador").textContent = contador;
}

  document.addEventListener("DOMContentLoaded", function () {
    const accordionButton = document.querySelector(".accordion");
    const accordionContent = document.querySelector(".accordion-content");
  
    if (accordionButton && accordionContent) {
      accordionButton.addEventListener("click", function () {
        // Alterna a visibilidade do conteúdo
        if (accordionContent.style.display === "block") {
          accordionContent.style.display = "none";
        } else {
          accordionContent.style.display = "block";
        }
      });
    } else {
      console.error("Elemento não encontrado: Verifique se os seletores estão corretos.");
    }
  });
  