function showTab(tabId) {
    // Ocultar todos los contenidos
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    // Mostrar el contenido seleccionado
    document.getElementById(tabId).classList.add('active');
}

// Mostrar la primera pestaña por defecto
document.addEventListener("DOMContentLoaded", function () {
    showTab('proyecto1');
});
