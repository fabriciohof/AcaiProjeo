const mainContent = document.getElementById("main-content");
const footer = document.getElementById("footer");

const pages = {
  home: `
    <h2>Bem-vindo ao Açaí da Cris!</h2>
    <p>Confira nossos deliciosos sabores de açaí:</p>
    <div class="acai-gallery">
      <div class="acai-item">
        <img src="assets/acai-tradicional.jpg" alt="Açaí Tradicional">
        <p>Açaí Tradicional</p>
      </div>
      <div class="acai-item">
        <img src="../assets/acaibanana.png" alt="Açaí de Banana">
        <p>Açaí de Banana</p>
      </div>
      <div class="acai-item">
        <img src="assets/acai-kinder.jpg" alt="Açaí de Kinder">
        <p>Açaí de Kinder</p>
      </div>
    </div>
    <button class="order-btn" onclick="loadPage('order')">Fazer Pedido</button>
  `,
  order: `
    <h2>Faça seu Pedido</h2>
    <p>Escolha seus sabores, complementos e finalize seu pedido pelo WhatsApp.</p>
    <button class="order-btn">Ir para o WhatsApp</button>
  `,
  client: `
    <h2>Cliente do Mês</h2>
    <img src="assets/winner.png" alt="Troféu Cliente do Mês" class="trophy-icon">
    <p class="client-name">Cássio Silva</p>
    <img src="assets/clientedomes.jpeg" alt="Foto do Cliente do Mês" class="client-photo">
  `,
};

function loadPage(page) {
  mainContent.className = page;
  mainContent.innerHTML = pages[page] || `<h2>Página não encontrada</h2>`;
  footer.style.display = page === "client" ? "none" : "block";
}

document.querySelectorAll(".nav-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const page = button.getAttribute("data-page");
    loadPage(page);
  });
});

loadPage("home");
