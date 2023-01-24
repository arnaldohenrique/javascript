function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    var inicio = Number(inicio.value)
    var fim = Number(fim.value)
    var passo = Number(passo.value)

    for (inicio; inicio != fim; passo+=passo) {
        res.innerHTML = `${passo}`
    }
}
