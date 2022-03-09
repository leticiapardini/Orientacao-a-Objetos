console.log("=== PARADIGMAS ===");
//sintaxe literal (básica)
// código implicito
const escola = "Lets Code"; //string
console.log(escola, typeof escola, escola.constructor);

// sintaxe OOP (progração orientada a objetos)
// sempre depois do new começa com letra maiuscula
// código explicito
const school = new String("Lets Code");
console.log(school, typeof school, school.constructor);

// API Javascript 
//estrutura de diretório
console.dir(String.prototype);
// lista de todas as instruções que podem ser executadas no contexto de uma string
console.dir(Number.prototype);
console.dir(Array.prototype);
console.dir(Boolean.prototype);
console.dir(Function.prototype);
console.dir(Object.prototype);
console.dir(Date.prototype);
console.dir(RegExp.prototype);
console.dir(Math);

//Exemplos
console.log(escola.toUpperCase());
console.log(escola.padEnd(10, "  ").repeat(5));
console.log(escola.padStart(10, "  ").repeat(5));