console.log("====objeto window global====");

// this --> este

// tudo que faz no JS ou é um obj ou tem grande chance de ser 

// this é um objeto WINDOW
// tradução: ele é a palavra chave que aponta para o obj que é o contexto da execução de uma determinada ação
// window é o obj global
// primariamente o this sempre aponta para o obj global

// realidade variavel (ela vira um obj inderetamente): ela vira internamente uma propriedade do obj global (window)
var nome = "Leo";

// funções = são médotos do obj window 
function meuCurso(){
    return "Lets Code"
}

console.log(nome, window.nome);
// so consegue usar o window. usando var, let e const da undefined

const car = {
    marca: "Fiat",
    modelo : "Uno",
    cor: "vermelho",
    ano : 1999,
    velo : {
        min: 0,
        max: 10,
        atual: 0
    },
    status: false,
    ligar: function(){
        return car.status = true;
    },
    desligar: function(){
        return car.status = false;
    },
    acelerar : function(){
        // return car.velo.atual += 1;
        if(car.velo.atual == car.velo.max){
            return car.velo.atual
        }else{
            
            return ++car.velo.atual;
        }
    },
    freiar: function(){
        if(car.velo.atual == car.velo.min){
            return car.velo.atual
        }else{
            return --car.velo.atual;

        }
    }
}

console.log(car);

// this é a palavra chave que aponta pro contexto daquela execução, em um obj no lugar de chamar a variavel e o adjetivo, (car.marca), vc coloca (this.marca), pq ele vai apontar pro obj do contexto 
// this so funciona em função anonima, igual do exemplo

//DESAFIO: PESSOA COME MUITO ENGORDA/TREINA EMAGRECE
//IMPLEMENTAR MÉDOTO ENGORDA E EMAGRECE
//CONSOME MAIS DE 7MIL CALORIAS PARA ENGORDA 1 QUILO
//MANDA TREINAR, SE GASTAR MAIS DE 7MIL PERDE 1QUILO
// USAR O THIS
// PODE FAZER OUTRAS FUNÇÕES
