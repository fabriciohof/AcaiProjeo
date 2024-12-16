// Configurações de duração e animação dos confetes
const duration = 15 * 1000, // Duração do efeito em milissegundos
      animationEnd = Date.now() + duration,
      defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

// Função para gerar um valor aleatório dentro de um intervalo
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

// Intervalo que dispara a animação do confete
const interval = setInterval(function() {
  const timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval); // Para o intervalo quando a duração acaba
  }

  const particleCount = 50 * (timeLeft / duration); // A quantidade de partículas diminui com o tempo

  // Dispara confetes de um lado
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
  );
  // Dispara confetes do outro lado
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );
}, 250);
