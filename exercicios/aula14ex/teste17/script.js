function tabuada() {

    var num = document.getElementById('num')
    var tab = document.getElementById('tab')

    if (num.value.length == 0){
        window.alert('Por favor, selecione um número!')
    }else {
        var n = Number(num.value)
        tab.innerHTML = ''
        for (var c=1; c<=10; c++){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}