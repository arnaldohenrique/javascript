function tabuada() {

    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!') //caso não aja valores
    }else {
        var n = Number(num.value)
        tab.innerHTML = '' //limpar a tabuada
        for (var c = 1; c<=10; c++) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.value = `tab${c}` //pra indicar qual valor da tabuada foi selecionado
            tab.appendChild(item)
        }
    }
}