let parag = document.querySelector('.parag');

function clicar() {
    now = new Date();
    var nasc = prompt('Qual ano você nasceu?');
    var anoAtual = now.getFullYear();
    var idade = anoAtual - nasc;
    if (nasc > anoAtual){
        parag.innerHTML = 'Acho que isso não é possível, mas já que você é do futuro, o Brasil ganhou a próxima copa?';
    }else if(nasc == 0){ 
        parag.innerHTML = 'Então você nem consegue escrever direito u.u faz de novo!'  
    }else if(nasc<1915 && nasc != 0){
        parag.innerHTML = 'Com ' + idade + ' anos de idade eu só consigo te imaginar sendo um idosinho'
    }else{ 
        parag.innerHTML = 'Você vai fazer (ou já fez) ' + idade + ' anos de vida em ' + anoAtual;
    }
}