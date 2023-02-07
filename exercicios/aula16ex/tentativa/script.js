function adiciona() {
    var num = document.getElementById('num')
    var ana = document.getElementById('analisa')

    if (num.value.length == 0) return window.alert('Por favor, digite um número!'); //caso não aja valores
    var n = Number(num.value)

    if (n > 100 || n < 1) return window.alert('Digite um valor aceitável!');
        
    var item = document.createElement('option')
    item.text = `Valor ${n} adicionado`
    ana.appendChild(item)
}

function finaliza() {
    var f = [n]
    var res = document.getElementById('res')



    res.innerHTML = `Ao todo temos ${f.length} números cadastrados aqui`

}