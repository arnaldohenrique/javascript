function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    //Caso não aja valores
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = `Impossível contar!`
    } else {
        res.innerHTML = 'Contando...'
        
        var inicio = Number(inicio.value)
        var fim = Number(fim.value)
        var passo = Number(passo.value)

        if (passo <= 0) {
            res.innerHTML = `Impossível contar!`
        }

        if (inicio < fim) {
            //Contagem crescente
            for (inicio; inicio <= fim; inicio = inicio + passo) {
                res.innerHTML += `👉${inicio}`
            }
        }else {
            //Contagem regressiva
            for(inicio; inicio >= fim; inicio -= passo) {
                res.innerHTML += `👉${inicio}`
            }
        }
        
        res.innerHTML += '🏁'
    }

}
