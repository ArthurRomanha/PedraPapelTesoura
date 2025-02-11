let escolhaRobo;
const minhaEscolha = () => {
    let myChoice = document.querySelector('input[name="elemento"]:checked');
    console.log(myChoice.value);
    
}
const sorteiaEscolhaRobo = () => {
    let num = Math.floor(Math.random()*3);
    console.log(num);
    
    switch (num) {
        case 0:
            escolhaRobo = "pedra";
            console.log(escolhaRobo);
            break;
        case 1:
            escolhaRobo = "papel";
            console.log(escolhaRobo);
            break;
        case 2:
            escolhaRobo = "tesoura";
            console.log(escolhaRobo);
            break;
    }
}
const verificaVitória = () => {
    let resultado; 
    if((minhaEscolha == "papel" && escolhaRobo == "pedra")||(minhaEscolha == "tesoura" && escolhaRobo == "papel")||(minhaEscolha == "pedra" && escolhaRobo == "tesoura")){
        resultado = "vitória";
        return resultado; 
    }else if((escolhaRobo == "papel" && minhaEscolha == "pedra")||(escolhaRobo == "tesoura" && minhaEscolha == "papel")||(escolhaRobo == "pedra" && minhaEscolha == "tesoura")){
        resultado = "derrota";
        return resultado; 
    }
    else{
        resultado = "empate";
        return resultado; 
    }
}
const start = () => {
    minhaEscolha()
    sorteiaEscolhaRobo();
    let resultado = verificaVitória();
        console.log(resultado);
}