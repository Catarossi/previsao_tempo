let body = document.body;
let icon = document.getElementById("icon");
let btn = document.getElementById("btn");

function trade_theme() {
    if (body.getAttribute('data-bs-theme') === 'dark') {
        body.setAttribute('data-bs-theme', 'light');
        icon.className = "fa-regular fa-moon";
        icon.style.color = "#ffffff";
        btn.style.backgroundColor = '#868B94';
    } else {
        body.setAttribute('data-bs-theme', 'dark');
        icon.className = "fa-regular fa-sun";
        icon.style.color = "#868B94";
        btn.style.backgroundColor = '#ffffff';
    }
}