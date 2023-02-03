function adiciona() {
    var num = document.getElementById('num')
    var res = document.getElementById('res')
    var ana = document.getElementById('analisa')

    if (num.value.length == 0) {

        window.alert('Por favor, digite um número!') //caso não aja valores

    }else {
        var n = Number(num.value)

        if (n > 100 || n < 1){
            window.alert('Digite um valor aceitável!')
        }else {
            var item = document.createElement('option')
            item.text = `Valor ${n} adicionado`
            ana.appendChild(item)
        }
    }
}