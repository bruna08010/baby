
const screens = document.querySelectorAll(".screen");

function showScreen(id) {
    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Começar a aventura
document.getElementById("start-btn").addEventListener("click", () => {
    showScreen("mission-screen");
});

// Escolher uma Pokébola
const pokeballs = document.querySelectorAll(".pokeball");
const missionMessage = document.getElementById("mission-message");

pokeballs.forEach(ball => {
    ball.addEventListener("click", () => {
        const correct = ball.dataset.correct === "true";

        if (correct) {
            missionMessage.textContent =
                "Você encontrou a surpresa! ✨";

            pokeballs.forEach(item => {
                item.disabled = true;
            });

            setTimeout(() => {
                showScreen("surprise-screen");
            }, 900);
        } else {
            missionMessage.textContent =
                "Ops! Essa não era. Tente outra Pokébola! 👻";
        }
    });
});

// Abrir a carta
document.getElementById("open-letter-btn").addEventListener("click", () => {
    showScreen("letter-screen");
});

// Jogar novamente
document.getElementById("restart-btn").addEventListener("click", () => {
    pokeballs.forEach(ball => {
        ball.disabled = false;
    });

    missionMessage.textContent = "Escolha uma Pokébola!";
    showScreen("start-screen");
});