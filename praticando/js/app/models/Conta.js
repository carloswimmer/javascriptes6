class Conta {

    constructor(titular, conta, data) {

        this._titular = titular;
        this._conta = conta;
        this._saldo = 0.0;
        this._data = data;

        Object.freeze(this);
    }

    // deposita(valor) {

    //     console.log("Valor depositado: " + valor);
    //     this._saldo += valor;
    // }

    get saldo() {
        return this._saldo;
    }

    get titular() {
        return this._titular;
    }

    get conta() {
        return this._conta;
    }

    get data() {
        return this._data;
    }
}