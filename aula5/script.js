

// esse código é bastante implementado e ele resolve um grande problema (controle do escopo global)

//MODULE PATTENR

//calculadora - module pattener

//quais métodos criar : soma, subtração, divisão, multiplicação

console.log("=== ESCOPO ===");

// Problema - Não tenho controle sobre o escopo global

console.log(this); // obj contexto da execução (window) => escopo global

var linguagem = "Javascript!"; // a variável é definida no escopo global
console.log(linguagem); // pode-se omitir o obj global (window)
console.log(window.linguagem); // a variável é uma prop do escopo global

function minhaLinguagemPreferida() { // a função é definida no escopo global
  return "JS!";
}
console.log(minhaLinguagemPreferida()); // pode-se omitir o obj global (window)
console.log(window.minhaLinguagemPreferida()); // a função é um método no escopo global

// Solução - Aplicar um mecanismo para controlar o escopo
var curso = "Web Degree EXTERNAL"; // global

function testeEscopo() {
  curso = "WEB DEGREE Internal"; // variável global implícita
  return curso;
}

console.log(testeEscopo()); // Web Degree Internal
console.log(window.curso); // Web Degree Internal
console.log(curso); // Web Degree Internal

{ let modulo = "POO"; } // ES6 OU > - ESCOPO POR CHAVES (let / const)

// console.log(window.modulo);
// console.log(modulo);

console.log("=== MODULE PATTERN ===");

// var app = "EXTERNAL"; // closure

// Expressão de Função Invocada Imediatamente - IIFE
// (Revealing) Module Pattern
const MODULE = (function () {
  // var app = "INTERNAL";
  // console.log(app); // EXTERNAL (closure)

  var codeLytics = { count: 0 };

  codeLytics.addCount = function() {
    return ++codeLytics.count;
  }

  codeLytics.clearCount = function() {
    return codeLytics.count = 0;
  }

  codeLytics.getCount = function () {
    return codeLytics.count;
  }

  // Remapeando Objeto - Sua primeira API!
  return {
    add: codeLytics.addCount,
    // clear: codeLytics.clearCount,
    get: codeLytics.getCount
  };

})();

console.log(MODULE);