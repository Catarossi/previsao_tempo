let body = document.body;
let icon = document.getElementById("icon");
let btn = document.getElementById("btn");

// Função para alternar o tema
function trade_theme() {
    const currentTheme = body.getAttribute('data-bs-theme'); // Obtém o tema atual
    if (currentTheme === 'dark') {
        setTheme('light');
    } else {
        setTheme('dark');
    }
}

// Função para definir o tema e salvar no Local Storage
function setTheme(theme) {
    if (theme === 'dark') {
        body.setAttribute('data-bs-theme', 'dark');
        icon.className = "fa-regular fa-sun"; // Ícone para tema dark
        icon.style.color = "#868B94"; // Cor do ícone
        btn.style.backgroundColor = '#ffffff'; // Cor do botão
    } else {
        body.setAttribute('data-bs-theme', 'light');
        icon.className = "fa-regular fa-moon"; // Ícone para tema light
        icon.style.color = "#ffffff"; // Cor do ícone
        btn.style.backgroundColor = '#868B94'; // Cor do botão
    }

    // Salva o tema no Local Storage
    localStorage.setItem('theme', theme);
}

// Carrega o tema salvo no Local Storage ao carregar a página
window.onload = () => {
    const savedTheme = localStorage.getItem('theme'); // Recupera o tema salvo
    if (savedTheme) {
        setTheme(savedTheme); // Aplica o tema salvo
    } else {
        setTheme('light'); // Define o tema padrão como light
    }
};
