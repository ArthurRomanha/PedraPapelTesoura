let escolhaRobo;
let minhaEscolha;
const escolha = (num) => {
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
const sorteiaEscolhaRobo = () => {
    let num = Math.floor(Math.random()*3);
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

    }
}
const start = () => {
    sorteiaEscolhaRobo();
    verificaVitória();
}