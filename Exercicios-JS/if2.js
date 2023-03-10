function teste1(num) {
    if(num > 7)
        console.log(num)
        console.log('Final') // fora do bloco
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); {
        console.log(num) // ponto e vírgula termina o bloco
    }
}

teste2(6)
teste2(8)