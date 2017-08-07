class ContadorController {

    constructor() {
        this._contador = 0;
        alert(this._contador);
    }

    get contador() {
        return this._contador;
    }

    incrementa() {
        this._contador++;
        document.querySelector('#paragrafo').textContent = this._contador;
        this.impressionado(this._contador);
    }

    impressionado(numero) {
        if(numero > 12) {
           document.querySelector('#botao').textContent = "CARACA O BAGULHO NÃO PARA DE SUBIR";
        }
        if(numero > 30) {
            document.querySelector('#botao').textContent = "TÁ OK, JÁ ENTENDI, PODE PARAR"
        }
    }
}