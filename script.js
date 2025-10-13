// --- Gerenciar nome do jogador (em todas as páginas) ---
let playerName = localStorage.getItem("playerName");

if (!playerName) {
  playerName = prompt("Digite seu nome:");
  if (!playerName) playerName = "Jogador";
  localStorage.setItem("playerName", playerName);
}

// Atualiza o nome no cabeçalho
const nameHeader = document.getElementById("playerNameHeader");
if (nameHeader) nameHeader.textContent = playerName;

// --- Função de seleção de quiz (tela inicial) ---
function selectQuiz(theme) {
  localStorage.setItem("selectedTheme", theme);
  window.location.href = "level.html";
}

// --- Função de seleção de nível ---
function selectLevel(level) {
  localStorage.setItem("selectedLevel", level);
  window.location.href = "quiz.html";
}

// --- Atualiza o ranking na tela inicial ---
function updateRanking() {
const themes = ["geral", "matematica", "ingles", "ciencias", "cultura", "esportes", "tecnologia", "portugues", "historia", "saude", "gastronomia", "jogos", "enem",];
const playerName = localStorage.getItem("playerName") || "Jogador";

  themes.forEach(theme => {
    const rankingElement = document.getElementById(`ranking-${theme}`);
    if (!rankingElement) return;

    let scores = JSON.parse(localStorage.getItem(`ranking-${theme}`)) || [];
    const playerScore = scores.find(p => p.name === playerName);

    rankingElement.innerHTML = `
      <strong>${theme.charAt(0).toUpperCase() + theme.slice(1)}</strong><br>
      ${playerScore ? playerScore.score : 0} pts
    `;
  });
}

window.onload = updateRanking;

// --- Função para embaralhar um array ---
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// --- Código do quiz ---
if (document.querySelector(".quiz-container")) {
  let currentQuestion = 0;
  let score = 0;

  const selectedTheme = localStorage.getItem("selectedTheme");
  const selectedLevel = localStorage.getItem("selectedLevel");
  let quizQuestions = questions[selectedTheme]?.[selectedLevel] || [];

  // Embaralhar perguntas
  quizQuestions = shuffleArray(quizQuestions);

  const questionEl = document.querySelector(".question");
  const optionsEl = document.querySelector(".options");
  const feedbackEl = document.querySelector(".feedback");
  const scoreEl = document.querySelector(".score");
  const nextBtn = document.querySelector(".btn-next");

  function loadQuestion() {
    const q = quizQuestions[currentQuestion];
    if (!q) {
      questionEl.textContent = "Nenhuma pergunta disponível.";
      return;
    }

    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    feedbackEl.textContent = "";
    nextBtn.style.display = "none";

    // Embaralhar opções
    const shuffledOptions = shuffleArray([...q.options]);
    shuffledOptions.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = () => checkAnswer(option);
      optionsEl.appendChild(btn);
    });
  }

  function checkAnswer(selected) {
    const q = quizQuestions[currentQuestion];
    if (selected === q.answer) {
      score += 10;
      feedbackEl.textContent = "✅ Correto!";
    } else {
      feedbackEl.textContent = `❌ Errado! Resposta correta: ${q.answer}`;
    }
    scoreEl.textContent = `Pontuação: ${score}`;
    nextBtn.style.display = "inline-block";
    Array.from(optionsEl.children).forEach(btn => (btn.disabled = true));
  }

  nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) loadQuestion();
    else finishQuiz();
  };

  function finishQuiz() {
    questionEl.textContent = "🎉 Você terminou o quiz!";
    optionsEl.innerHTML = "";
    feedbackEl.textContent = `Pontuação final: ${score}`;
    nextBtn.style.display = "none";

    saveToRanking(selectedTheme, score, playerName);

    const backBtn = document.createElement("button");
    backBtn.textContent = "🏠 Voltar à Tela Inicial";
    backBtn.classList.add("btn-next");
    backBtn.onclick = () => window.location.href = "index.html";
    feedbackEl.appendChild(document.createElement("br"));
    feedbackEl.appendChild(backBtn);
  }

  function saveToRanking(theme, score, name) {
    let ranking = JSON.parse(localStorage.getItem(`ranking-${theme}`)) || [];
    const existing = ranking.find(p => p.name === name);
    if (existing) {
      if (score > existing.score) existing.score = score;
    } else {
      ranking.push({ name, score });
    }
    localStorage.setItem(`ranking-${theme}`, JSON.stringify(ranking));
  }

  loadQuestion();
}

// --- Dropdown do avatar ---
const dropdown = document.querySelector(".dropdown");
if (dropdown) {
  dropdown.addEventListener("click", e => {
    e.stopPropagation();
    dropdown.classList.toggle("active");
  });
  document.addEventListener("click", () => {
    dropdown.classList.remove("active");
  });
}

// --- Upload e troca de imagem com prévia ---
const avatarInput = document.getElementById("avatarUpload");
const avatarImg = document.getElementById("avatarImg");
const modal = document.getElementById("avatarPreviewModal");
const previewImg = document.getElementById("avatarPreviewImg");
const confirmBtn = document.getElementById("confirmAvatar");
const cancelBtn = document.getElementById("cancelAvatar");

let tempImageData = null;

if (avatarInput && avatarImg) {
  avatarInput.addEventListener("change", () => {
    const file = avatarInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        tempImageData = reader.result;
        previewImg.src = tempImageData;
        modal.style.display = "flex";
      };
      reader.readAsDataURL(file);
    }
  });
}

if (confirmBtn) {
  confirmBtn.addEventListener("click", () => {
    if (tempImageData) {
      localStorage.setItem("playerAvatar", tempImageData);
      avatarImg.src = tempImageData;
      tempImageData = null;
      modal.style.display = "none";
      alert("✅ Avatar atualizado com sucesso!");
    }
  });
}

if (cancelBtn) {
  cancelBtn.addEventListener("click", () => {
    modal.style.display = "none";
    avatarInput.value = "";
    tempImageData = null;
  });
}

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// --- Carregar avatar salvo ---
const savedAvatar = localStorage.getItem("playerAvatar");
if (savedAvatar && avatarImg) {
  avatarImg.src = savedAvatar;
}

// --- Funções do menu ---
function changeName() {
  const newName = prompt("Digite seu novo nome:");
  if (newName) {
    localStorage.setItem("playerName", newName);
    const nameHeader = document.getElementById("playerNameHeader");
    if (nameHeader) nameHeader.textContent = newName;
    alert("Nome alterado com sucesso!");
  }
}

function logout() {
  if (confirm("Deseja realmente sair e apagar seus dados?")) {
    localStorage.clear();
    window.location.href = "index.html";
  }
}
