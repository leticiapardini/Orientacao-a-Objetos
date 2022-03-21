class TV {

  
    constructor(canal, volume, ligada) {
        this.canal = canal,
            this.volume = volume,
            this.ligada = ligada
    }

    ligar() {
        return this.ligada = true;
    }

    desligar() {
        return this.ligada = false;
    }

    aumentaVolume() {
        if (this.ligada == true) {
            if (this.volume <= 24) {
                return ++this.volume;
            }
            return this.volume
        }
    }

    diminuiVolume() {
        if (this.ligada == true) {
            if (this.volume != 0) {
                return --this.volume;
            } return this.volume = 0;
        }
    }

    trocaCanal() {
        if (this.ligada == true) {
            if (this.canal <= 9) {
                return ++this.canal;
            }
            return this.canal = 1
        }
    }


}

const novaTV = new TV (1,0,true);
console.log(novaTV);



