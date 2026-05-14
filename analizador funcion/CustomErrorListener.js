import antlr4 from 'antlr4';

export class CustomErrorListener extends antlr4.error.ErrorListener {
    constructor() {
        super();
        this.errores = [];
    }

    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this.errores.push(`Línea ${line}:${column} - ${msg}`);
    }

    hasErrors() {
        return this.errores.length > 0;
    }

    printErrors() {
        console.error("\n===============================");
        console.error("❌ ERRORES DE SINTAXIS/LÉXICOS");
        console.error("===============================");
        this.errores.forEach(err => console.error(`  -> ${err}`));
        console.error("===============================\n");
    }
}
