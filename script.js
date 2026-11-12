// Guardar o botão
const botao = document.getElementById('tema');
const icone = document.querySelector('i');
// localStore: busca na memoria a opção que o usuario tenha escolhido
const salvaTema = localStorage.getItem('theme');
//  Se salvar tema escuro
if (salvaTema === 'dark'){
    // Adiciona a classe 'dark-mode' no body
    document.body.classList.add('dark-mode');
    // Trocar o icone lua para sol
    icone.classList.replace('fa-moon', 'fa-sun');
}


// Clicou, executou o código abaixo
    
botao.addEventListener('click', () =>{
    // Liga / desliga classe dark-mode
    document.body.classList.toggle('dark-mode');


    // Verifica se o tema foi mudado
    const dark = document.body.classList.contains('dark-mode');


    // Se modo dark for verdadeiro
    if (dark){
        icone.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        // Troca o sol pela lua
        icone.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});