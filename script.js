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
            minhaEscolha = "pedra";
            break;
        case 1:
            minhaEscolha = "papel";
            break;
        case 2:
            minhaEscolha = "tesoura";
            break;
    }
}
const verificaVitória = () => {
    let ganhou;
    if((minhaEscolha == "papel" && escolhaRobo == "pedra")||(minhaEscolha == "tesoura" && escolhaRobo == "papel")||(minhaEscolha == "pedra" && escolhaRobo == "tesoura")){
        ganhou=true;
        return ganhou;
    }else{
        ganhou=false;
        return ganhou;
    }
}
const start = () => {
    minhaEscolha()
    sorteiaEscolhaRobo();
    verificaVitória();
}