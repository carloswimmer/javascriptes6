class FuncionarioController {

    constructor(funcionario) {

        this._funcionario = new Funcionario(this.criaFuncionario(...funcionario));
    }

    criaFuncionario(funcionario) {

        this._funcionario.nome = funcionario.nome;
        this._funcionario.endereco = funcionario.endereco;
        this._funcionario.salario = funcionario.salario;
        
        console.log(funcionario);
    }

}