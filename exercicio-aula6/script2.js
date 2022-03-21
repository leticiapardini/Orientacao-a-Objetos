class TV {

    #canal
    #volume
    #ligada
    constructor(canal, volume, ligada) {
        this.#canal = canal,
            this.#volume = volume,
            this.#ligada = ligada
    }

    get ligar(){
        return this.#ligada = true;
    }

    get desligar (){
        return this.#ligada = false;
    }
    get aumentaVolume() {
        if (this.#ligada == true) {
            if (this.#volume <= 24) {
                return ++this.#volume;
            }
            return this.#volume
        }
    }

    get diminuiVolume() {
        if (this.#ligada == true) {
            if (this.#volume != 0) {
                return --this.#volume;
            } return this.#volume = 0;
        }
    }

    get trocaCanal() {
        if (this.#ligada == true) {
            if (this.#canal <= 9) {
                return ++this.#canal;
            }
            return this.#canal = 1
        }
    }

    // o usuario pode digitar diretamento o número do canal desejado
    set trocaCanal(n){
        return this.#canal = n;
    }
}

const acesso = new TV (1,0,true);
console.log(acesso);




