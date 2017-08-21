class ListaFuncionarios {

    constructor() {

        this._funcionarios = []
    }

    adiciona(funcionario) {

        this._funcionarios.push(funcionario);
    }

    get funcionarios() {

        return [].concat(this._funcionarios);
    }
}