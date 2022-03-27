import { Animal } from "./animal.js";

class Gato extends Animal {
    #isEscalador;

    constructor(nome = null, especie = null, cor = null, genero = null, isEscalador = false) {
        super(nome, especie, cor, genero);
        this.#isEscalador = isEscalador;
    }

    escalar() {
        return (this.#isEscalador ? 'É um gato que escala' : 'Não é um gato que escala');
    }

    falar() {
        return `${this.nome} está falando : Miau`;
    }
}

export { Gato };