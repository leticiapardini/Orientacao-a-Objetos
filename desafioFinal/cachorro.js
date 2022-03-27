
import { Animal } from "./animal.js";

class Cachorro extends Animal {
    #isFarejador;

    constructor(nome = null, especie = null, cor = null, genero = null, isFarejador = false) {
        super(nome, especie, cor, genero);
        this.#isFarejador = isFarejador;
    }

    farejar() {
        return (this.#isFarejador ? 'É um cachorro farejador' : 'Não é um cachorro farejador');
    }
    falar() {
        return `${this.nome} está falando : Au Au`
    }
}

export { Cachorro };