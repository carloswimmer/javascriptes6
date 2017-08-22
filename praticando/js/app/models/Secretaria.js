class Secretaria extends Funcionario {

    constructor(nome, funcionario) {

        super(nome);
        this._funcionario = funcionario
    }

    atenderTelefone() {

        console.log(`${this._nome}, responsável por ${this._funcionario.nome} atendendo o telefone.`)
    }
}