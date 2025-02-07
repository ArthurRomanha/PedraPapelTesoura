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
    let resultado = verificaVitória();
    if (resultado) {
        console.log("ganhou");
    }else{
        console.log("perdeu");
        
    }
}