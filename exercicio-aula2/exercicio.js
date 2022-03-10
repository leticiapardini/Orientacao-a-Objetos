
const pessoa = {
    nome : "Leticia",
    peso : 61,
    calorias : {
        min: 0,
        max:7 },
    pedalar : {
        min: 0,
        max:7 },
    consumo : 0,
 
    engordar: function (){
        if( this.consumo == this.calorias.max){
            this.consumo = 0;
            return `Você engordou 1 Quilo, faça exercicio para emagrecer, seu peso atual agora é de: ${ ++this.peso } `
        } else{
             return `Cuidado, vc engordou: ${++this.consumo} mil, calorias, se exercite!`

        }
    },
    
    emagrecer: function (){
        this.pedalar.min = 0;
        if(this.pedalar.min == this.pedalar.max){
            return ` vc perdeu ${this.pedalar.min} mil, por isso perdeu 1 quilo, seu peso atual agora é de: ${--this.peso } `
        } else {
        return ` vc está perdendo:${++ this.pedalar.min} mil caloria(s) `
        } 
    }
}
     



        


    
    

