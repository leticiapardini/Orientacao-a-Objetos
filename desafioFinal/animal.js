class Animal {
    #especie;
    #genero;
    #cor;
    #nome;

    get nome() {
        return this.#nome;
    }

    constructor(nome = null, especie = null, cor = null, genero = null) {
        this.#nome = nome;
        this.#especie = especie;
        this.#genero = genero;
        this.#cor = cor;
    }

    //Toda vez que chamar esse método o animal estára movimentando 100m
    movimentar() {
        return `O animal da espécie ${this.#especie} está se movimentando 100m`;
    }

    // metodo que será utilizado para polimorfismo
    falar() {
        return `O ${this.#nome} está falando : `;
    }

    //metódo que diz a cor do animal
    corAnimal() {
        return `O animal ${this.#especie} é da cor ${this.#cor}`;
    }
}

export { Animal };