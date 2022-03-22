class Televisao {
    constructor(fabricante = null, polegadas = 0, canal = 0, volume = 0, ligada = false) {
        this.#canal = canal;
        this.#volume = volume;
        this.#ligada = ligada;
        this.#fabricante = fabricante;
        this.#polegadas = polegadas;

        // this.#canaisAbertos = {
        //   2: "CULTURA",
        //   5: "GLOBO",
        //   7: "RECORD",
        //   13: "BAND"
        // };
    }

    // props estáticas
    static canais = {
        2: "CULTURA",
        3: "XXXX",
        4: "CCCC",
        5: "GLOBO",
        6: "OOOO",
        7: "RECORD",
        13: "BAND"
    }
    
        static msg = {
            "MUDAR_CANAL_EXCEP": `Não foi possível mudar o canal porque a TV está desligada!`,
            "AUMENTAR_VOL_EXCEP": `Não foi possível aumentar o volume porque a TV está desligada!`,
            "DIMINUIR_VOL_EXCEP": `Não foi possível diminuir o volume porque a TV está desligada!`
        };

        // props
        #canal
        #volume
        #ligada
        #fabricante
        #polegadas
        #canaisComSenha = [3, 4, 6]
        #canalAguardandoSenha
        // #canaisAbertos
    
        // métodos
        ligar() {
            return this.#ligada = true;
        }
    
        desligar() {
            return this.#ligada = false;
        }
    
        mudarCanal(numero = this.#canal) {
            if (this.#ligada) {
                if (this.#canaisComSenha.includes(numero) == true) {
                    this.#canalAguardandoSenha = numero;
                    return "Esse canal é protegido por senha, favor digitar digitar a senha para acesso "
    
                } else {
                    return this.#canal = numero;
                }
            } else {
                throw new Error(Televisao.msg.MUDAR_CANAL_EXCEP); // Lançou uma excessão
            }
    
        }
    
    
        senha(s) {
            let senha = 1111;
            if (s == senha) {
                this.#canal = this.#canalAguardandoSenha;
                return ("Canal liberado para acesso");
    
            } else {
                return "Senha inválida";
            }
        }
    
        aumentarVolume() {
            if (this.#ligada) return this.#volume += 1;
            throw new Error(Televisao.msg.AUMENTAR_VOL_EXCEP); // Lançou uma excessão
        }
    
        diminuirVolume() {
            if (this.#ligada) return this.#volume -= 1;
            throw new Error(Televisao.msg.DIMINUIR_VOL_EXCEP); // Lançou uma excessão
        }
    
        info() {
            return `Sua TV ${this.#fabricante.nome} está ${(this.#ligada) ? 'ligada no canal ' + Televisao.canais[this.#canal] : 'desligada'}`;
        }
    }
    
    const sonyTv = new Televisao("Sony", 55, 0, 0, true);
    console.log(sonyTv);
    
    
    
    


