function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let raz = document.getElementById('txtr')
    let res = document.getElementById('res')

    if(ini.value.length==0 || fim.value.length==0 || raz.value.length==0){
        res.innerHTML = "Impossível contar. Preencha todos os campos."
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(txti.value)
        let f = Number(txtf.value)
        let r = Number(txtr.value)
        if(r<=0){
            window.alert('Razão inválida. Considerando razão 1.')
            r = 1
        }
        if(i<f){
            for(let c=i; c<=f; c+=r){
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for(let c=i; c>=f; c-=r){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
function limpar(){
    document.getElementById("newForm").reset();
    var res = document.getElementById('res')
    var txti = document.getElementById('txti')
    var txtf = document.getElementById('txtf')
    var txtr = document.getElementById('txtr')

    res.innerHTML = ''
    txti.innerHTML = ''
    txtf.innerHTML = ''
    txtr.innerHTML = ''
}