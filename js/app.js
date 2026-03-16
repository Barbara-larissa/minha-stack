function mostrarPagina(id){

document.querySelectorAll(".pagina").forEach(function(pagina){
pagina.classList.remove("ativa");
});

document.getElementById(id).classList.add("ativa");

}
/*================
BALAO
==================*/
const areaPerfil = document.querySelector('.perfil');
const oBalao = document.querySelector('.balao-fala');
const botoes = document.querySelectorAll('.btn');

// --- Lógica do Balão no Mobile ---
areaPerfil.addEventListener('touchstart', function() {
    oBalao.classList.add('visivel');

    // Faz o balão sumir sozinho após 2 segundos (tempo de leitura)
    setTimeout(() => {
        oBalao.classList.remove('visivel');
    }, 2000); 
}, {passive: true});


// --- Lógica de Animação dos Botões no Mobile ---
botoes.forEach(btn => {
    btn.addEventListener('touchstart', function() {
        this.style.transform = "scale(0.95)";
        this.style.filter = "brightness(1.2)";
    });
    
    btn.addEventListener('touchend', function() {
        this.style.transform = "scale(1)";
        this.style.filter = "brightness(1)";
    });
});