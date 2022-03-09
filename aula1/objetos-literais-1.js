console.log("===OBJETO LITERAL===");

//Conceito 
// O que é? é um elemento que pode ser divido em 2 partes: DE UM LADO - caracteristicas (elas definem como um objeto é). DO OUTRO LADO - ações (define o que o objeto é capaz de fazer ou executar)

// termos: para caracteries: propriedade
// ação:  métodos

//Objeto literal

const carro = {};
// sintaxe 
// add propriedades
// dot notation (notação ponto)

// objeto.propriedade ---> ler prop;
// objeto.propriedade = valor; ---> def propriedade
carro.marca = "VW";
carro.cor = "preto"
carro.modelo = "fox"


// bracket notation (notação colchetes)
// objeto["propriedade" : ----> ler propriedade];
// objeto["propriedade"] = valor; ---> def prop

carro["ano"] = 2015;
carro["motor"] = 1.6;
carro["acessórios"] = ["travas elétricas", "ar", "vidros verdes"];

// add métodos
//dot notation

// objeto.metodo(); ---> executar o método
// objeto.metodo = function() {} ---> def método

carro.buzinar = function(){
    return "bibí!"
};

carro.ligar = function(){
    return "ON"
}

//breacket notation
// objeto["metodo"](); ---> exec metodo
// objeto["metodo"] = function(){} ---> def metodo

carro["desligar"] = function(){
    return "OFF"
}

carro["acelerar"] = function(){
    return "VRUMMM"
}



console.log(carro);
console.log(carro.ano, carro["modelo"], carro.buzinar(), carro.ligar(), carro["desligar"](), carro.acelerar());

//lição de casa == fazer um objeto com prop e métodos
// representa uma pessoa (obj = pessoa)