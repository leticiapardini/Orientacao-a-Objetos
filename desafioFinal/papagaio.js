
import { Animal } from "./animal.js";
class Papagaio extends Animal {
    #palavrasConhecidas

    constructor(nome = null, especie = null, cor = null, genero = null, palavrasConhecidas) {
        super(nome, especie, cor, genero);
        this.#palavrasConhecidas = [];
    }

    ensinarPalavra(palavra) {
        let palavraAprendida = this.#palavrasConhecidas.push(palavra);
        return `${this.nome} aprendeu a palavra ${palavra}`;
    }

    falar() {
        return `${this.nome} está falando : ${this.#palavrasConhecidas}`
    }

}

export { Papagaio };

