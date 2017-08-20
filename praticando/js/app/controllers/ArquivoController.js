class ArquivoController {

    constructor() {
        this._inputDados = document.querySelector('.dados-arquivo');
    }

    envia() {
        //cria um Arquivo com as suas propriedades;
        
        let arquivo = ArquivoHelper.cria(this._inputDados.value);
        console.log(`Dados do Arquivo: ${arquivo.nome}, ${arquivo.tamanho}, ${arquivo.tipo}`)

        this._limpaFormulario();
    }

    _limpaFormulario() {
        this._inputDados.value = '';
        this._inputDados.focus();
    }
}