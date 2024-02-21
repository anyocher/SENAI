document.addEventListener("DOMContentLoaded", function() {
    // Mostrar o loader
    var loader = document.getElementById("loader");
    loader.style.display = "block";

    // Esconder o conteúdo do site
    var content = document.getElementById("content");
    content.style.display = "none";

    // Simular um tempo de carregamento
    setTimeout(function() {
        // Esconder o loader
        loader.style.display = "none";

        // Mostrar o conteúdo do site
        content.style.display = "block";
    }, 2000); // 2000 milissegundos (2 segundos) para simular o carregamento
});
