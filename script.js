let escolhaRobo;
const minhaEscolha = (myChoice) => {
    myChoice = document.querySelector('input[name="elemento"]:checked');
    console.log("Eu "+myChoice.value);
    return myChoice.value;
}
const sorteiaEscolhaRobo = () => {
    let num = Math.floor(Math.random()*3);
    
    switch (num) {
        case 0:
            escolhaRobo = "pedra";
            console.log("Robô "+escolhaRobo);
            break;
        case 1:
            escolhaRobo = "papel";
            console.log("Robô "+escolhaRobo);
            break;
        case 2:
            escolhaRobo = "tesoura";
            console.log("Robô "+escolhaRobo);
            break;
    }
    return escolhaRobo;
}
const verificaVitória = (minhaEscolha, escolhaRobo) => {
    let resultado;
    if((minhaEscolha === "papel" && escolhaRobo === "pedra")||(minhaEscolha === "tesoura" && escolhaRobo === "papel")||(minhaEscolha === "pedra" && escolhaRobo === "tesoura")){
        resultado = "vitória";
        console.log(resultado);
    }else if((escolhaRobo === "papel" && minhaEscolha === "pedra")||(escolhaRobo === "tesoura" && minhaEscolha === "papel")||(escolhaRobo === "pedra" && minhaEscolha == "tesoura")){
        resultado = "derrota";
        console.log(resultado);
    }else{
        resultado = "empate";        
        console.log(resultado);
    }
}
const start = () => {
    let minhaEscolha = minhaEscolha()
    let escolhaRobo = sorteiaEscolhaRobo();
    let resultado = "";
    verificaVitória(minhaEscolha, escolhaRobo);
}