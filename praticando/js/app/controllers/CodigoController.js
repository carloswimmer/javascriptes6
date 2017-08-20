class CodigoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputCodigo = $('#codigo');
    }

    validaCodigo(event) {

        event.preventDefault();
        let codigoDigitado = new Codigo(this._inputCodigo.value);

        let expressao = /^\D{3}-\D{2}-\d{2}$/;
        document.querySelector('#paragrafo').textContent = codigoDigitado.codigo;

        if(expressao.test(codigoDigitado.codigo)) {
            alert('Tah valendo');
        } else {
            alert('Tah errado');
        }
    }
}