

const CALCULADORA = (function () {

    const ObjCalculadora = {
        resultado: 0,
        historico: new Array(),

        soma: function (...num) {
            let res = 0
            for (i of num) {
                res += i;
                ObjCalculadora.historico.push(` O resultado da ultima soma foi de ${res}`);
            }
            return res;
        },

        subtrair: function (...valor) {
            res = 0;

            for (let i = 1; i < valor.length; i++) {
                res = valor[0] - valor[i];
                ObjCalculadora.historico.push(` O resultado da ultima subtração foi de ${res}`);
            }
            return res;
        },

        multiplicacao: function (...valor) {

            res = 0;
            for (const i = 1; i < valor.length; i++) {
                res = valor[0] * valor[i];
                ObjCalculadora.historico.push(`O resultado da ultima multiplicação foi de ${res}`);
                return res;
            }
        },
        divisao: function (...valor) {
            res = 0;
            for (const i = 1; i < valor.length; i++) {
                res = valor[0] / valor[i];
                ObjCalculadora.historico.push(` O resultado da ultima divisao foi de ${res}`);
                return res;
            }
        },
        exponenciacao: function (...valor) {
            res = 0;
            for (const i = 1; i < valor.length; i++) {
                res = valor[0] ** valor[i];
                ObjCalculadora.historico.push(` O resultado da ultima exponênciação foi de ${res}`);
                return res;
            }
        },

        his: function () {
            let relacao = ObjCalculadora.historico;
            return relacao.join("\n");
        },

        limpaHistorico: function () {
            let clear = ObjCalculadora.historico = [];
            return (`${clear} Histórico zerado, inicie novas operações!!`)
        },

    }

    return {
        soma: ObjCalculadora.soma,
        historico: ObjCalculadora.his,
        subtracao: ObjCalculadora.subtrair,
        multiplicacao: ObjCalculadora.multiplicacao,
        divisao: ObjCalculadora.divisao,
        exponenciacao: ObjCalculadora.exponenciacao,
        clear: ObjCalculadora.limpaHistorico
    }
})();

console.log(CALCULADORA.multiplicacao(4, 4));
console.log(CALCULADORA.subtracao(3, 2));
console.log(CALCULADORA.divisao(3, 2));
console.log(CALCULADORA.exponenciacao(3, 2));
console.log(CALCULADORA.historico());
console.log(CALCULADORA.clear());





