document.addEventListener("DOMContentLoaded", function () {
    const feedbackForm = document.getElementById("feedbackForm");
    const feedbackList = document.getElementById("feedbackList");

    // Carregar feedbacks salvos no Local Storage
    function loadFeedbacks() {
        feedbackList.innerHTML = "";
        const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];

        feedbacks.forEach((feedback, index) => {
            const feedbackItem = document.createElement("div");
            feedbackItem.classList.add("feedback-item");
            feedbackItem.innerHTML = `
                <strong>${feedback.name}:</strong> ${feedback.message}
                <button class="delete-btn" onclick="deleteFeedback(${index})">
                    🗑️
                </button>
            `;
            feedbackList.appendChild(feedbackItem);
        });
    }

    // Salvar Feedback
    feedbackForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const message = document.getElementById("feedback").value;

        if (name.trim() === "" || message.trim() === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
        feedbacks.push({ name, message });
        localStorage.setItem("feedbacks", JSON.stringify(feedbacks));

        feedbackForm.reset();
        loadFeedbacks();
    });

    // Função para deletar um feedback pelo índice
    window.deleteFeedback = function (index) {
        let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
        feedbacks.splice(index, 1); // Remove o item da lista
        localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
        loadFeedbacks(); // Atualiza a lista na tela
    };

    // Inicializa a lista ao carregar a página
    loadFeedbacks();
});

