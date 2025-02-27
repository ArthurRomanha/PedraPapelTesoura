let escolhaRobo;
const resultado = document.getElementById("resultado");
const divEscolhaRobo = document.getElementById("escolhaRobo");

const functionMinhaEscolha = (myChoice) => {
    myChoice = document.querySelector('input[name="elemento"]:checked');
    console.log("Eu "+myChoice.value);
    return myChoice.value;
}
const sorteiaEscolhaRobo = () => {
    let escolhaRobo = "";
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
    }else if((escolhaRobo === "papel" && minhaEscolha === "pedra")||(escolhaRobo === "tesoura" && minhaEscolha === "papel")||(escolhaRobo === "pedra" && minhaEscolha == "tesoura")){
        resultado = "derrota";
    }else{
        resultado = "empate";        
    }
    return resultado;
}
const start = () => {
    let minhaEscolha = functionMinhaEscolha();
    let escolhaRobo = sorteiaEscolhaRobo();
    divEscolhaRobo.innerHTML = `<img src="img/${escolhaRobo}.png"
    alt="pedra">`;
    resultado.textContent = `${verificaVitória(minhaEscolha, escolhaRobo).toUpperCase()}`;
}