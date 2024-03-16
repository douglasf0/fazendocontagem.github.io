function contar() {
    var inicio = document.getElementById ('txti').value; //indicado chatgpt 
    var fim = document.getElementById ('txtf').value; //value faz ter acesso ao conteudo, sem ele apenas temos referencia a string
    var passo = document.getElementById ('txtp');
    var res = document.getElementById ('res');
    //trouxe os elementos do html para ca
    var i = Number (inicio);//indicado chatgpt, trouxe essas var para fora do bloco do if, diferente do que o professor fez
    var f = Number (fim);
    var p = Number (passo.value);
    //Converti os dados dentro das var em números, criando outras var, para poder trabalhar com elas
    if (inicio == 0 || fim == 0 || passo.value.length == 0) {
        window.alert('Erro, faltam dados')
    //se for igual a zero ou estiver vazio, relatar erro
    } else {
        res.innerHTML = 'Contando: <br>' //<br> quebra de linha
        if (p <= 0) {
        //se o passo for igual o menor a zero vai dar erro
            window.alert('Passo invalido! Considerar passo igual a 1.')
            p = 1
        }
        if (i < f) { 
            //Contagem Crescente
            //enquanto inicio for menor que o fim executa o for abaixo
            for ( var c = i; c <= f; c += p) {
            //enquanto c for menor que o fim este recebe ele mesmo mais o passo
            res.innerHTML += `${c} \u{1FAE0}`
            }
        } else {
            //Contagem Regressiva
            for (var c = i; c >= f; c -= p ) {//observar que foi criado uma var dentro para poder ser realizado o for
                res.innerHTML += `${c} \u{1FAE0}`
            }
        } res.innerHTML += `🚩` 
        //aqui usei atalho windows + . e escolhi o emoji, finalizado os blocos aparece a bandeira
        }
    }