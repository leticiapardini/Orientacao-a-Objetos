
// criando o objeto

const pessoa = {
    nome : "Letícia",
    sobrenome : "Pardini",
    idade : 26,
    genero : "feminino",
    altura: 1.62,
    peso : 61,
    signo : "áries",
    cor : "branca"
} ;

console.log(pessoa);

//criando ações para o objeto

pessoa.falar = function (){
    
    return "Olá!"
};

pessoa.grita = function(){

    return "AAAAAAAAA"
} ;

pessoa.andar = function () {

    return " toc,toc,toc"
};

pessoa.comer = function(){

    return "croc, croc"
} ;

pessoa.risada = function (){

    return "HAHAHAHAHA"
};

console.log(pessoa.nome, pessoa.sobrenome, pessoa.idade, pessoa.genero, pessoa.altura, pessoa.peso, pessoa.signo, pessoa.cor);
console.log(pessoa.falar(), pessoa.grita(), pessoa.andar(), pessoa.comer(), pessoa.risada());