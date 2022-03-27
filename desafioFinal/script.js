import { Animal } from "./animal.js";
import { Cachorro } from "./cachorro.js";
import { Gato } from "./gato.js";
import { Papagaio } from "./papagaio.js";


//estância Cachorro
const dog = new Cachorro("Surie", "Cachorro", "Caramelo", "Femêa", true)
console.log(dog)
console.log(dog.falar());
console.log(dog.corAnimal());
console.log(dog.farejar());
console.log(dog.movimentar());

// estância Gato

const cat = new Gato("Lila", "Gato", "Siamês", "Femêa");
console.log(cat)
console.log(cat.falar());
console.log(cat.escalar());
console.log(cat.corAnimal());
console.log(cat.movimentar());

//estância Papagaio

const parrot = new Papagaio("Augusto", "Papagaio", "Azul", "Macho");
console.log(parrot);
console.log(parrot.ensinarPalavra("Letícia"));
console.log(parrot.ensinarPalavra("Rafael"));
console.log(parrot.ensinarPalavra("Comer"))
console.log(parrot.falar());
console.log(parrot.corAnimal());
console.log(parrot.movimentar());
