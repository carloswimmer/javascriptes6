class DateHelper {

    constructor() {
        throw new Error('DateHelper não pode ser instanciada');
    }

    static textoParaData(texto) {

        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) throw new Error('A data deve ser aaaa-mm-dd.');

        return new Date(texto.split('-'));
    }

    static dataParaTexto(data) {

        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }
}