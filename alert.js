document.addEventListener("DOMContentLoaded", function () {
    const orderButton = document.querySelector("#order-button"); // Botão de pedido
    const closedMessage = document.querySelector("#closed-message"); // Mensagem de fechado
    const whatsAppLink = "https://wa.me/5551999999999"; // Link do WhatsApp

    // Função para verificar se está dentro do horário de funcionamento
    function isWithinBusinessHours() {
      const now = new Date();
      const currentHour = now.getHours();

      // Horário de funcionamento
      return currentHour >= 12 && currentHour < 22;
    }

    // Atualiza o botão de acordo com o horário de funcionamento
    function updateButtonState() {
      if (isWithinBusinessHours()) {
        orderButton.href = whatsAppLink; // Adiciona o link do WhatsApp
        orderButton.style.pointerEvents = "auto"; // Permite o clique
        orderButton.style.cursor = "pointer"; // Cursor normal
        closedMessage.style.display = "none"; // Esconde a mensagem
      } else {
        orderButton.href = "#"; // Remove o link do WhatsApp
        orderButton.style.pointerEvents = "none"; // Impede o clique
        orderButton.style.cursor = "not-allowed"; // Cursor desabilitado
        closedMessage.style.display = "block"; // Exibe a mensagem
      }
    }

    // Inicializa o estado do botão
    updateButtonState();

    // Atualiza o botão em intervalos regulares (opcional, caso o horário mude)
    setInterval(updateButtonState, 60000); // Verifica a cada 1 minuto
  });