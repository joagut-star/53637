import funcionLexer from "./generated/funcionLexer.js";
import funcionParser from "./generated/funcionParser.js";
import { CustomErrorListener } from "./CustomErrorListener.js";
import { FuncionInterpreter } from "./FuncionInterpreter.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import fs from 'fs';

async function main() {
    let input;

    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        console.error("No se pudo leer input.txt");
        return;
    }

    console.log("=== INICIANDO ANÁLISIS ===");
    
    // 1. Análisis léxico y sintáctico
    let inputStream = CharStreams.fromString(input);
    let lexer = new funcionLexer(inputStream);
    
    // Manejador de errores léxicos
    const errorListener = new CustomErrorListener();
    lexer.removeErrorListeners();
    lexer.addErrorListener(errorListener);

    let tokenStream = new CommonTokenStream(lexer);
    let parser = new funcionParser(tokenStream);

    // Manejador de errores sintácticos
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);

    // Construcción del árbol
    let tree = parser.prog();

    // Mostrar errores si existen (Requisito 1)
    if (errorListener.hasErrors()) {
        errorListener.printErrors();
        console.log("Análisis finalizado con errores. No se puede ejecutar.");
        return;
    } else {
        console.log("\n[OK] Análisis Léxico y Sintáctico correcto.\n");
    }
    
    // 2. Tabla de lexemas-tokens
    tokenStream.fill();
    console.log("=== TABLA DE TOKENS ===");
    tokenStream.tokens.forEach(token => {
        if (token.type !== -1) {
            const tokenName = funcionLexer.symbolicNames[token.type] || token.type;
            console.log(`Lexema: '${token.text}' -> Token: ${tokenName}`);
        }
    });
    console.log("=======================\n");

    // 3. Árbol de análisis sintáctico (formato de texto)
    const cadena_tree = tree.toStringTree(parser.ruleNames);
    console.log("=== ÁRBOL SINTÁCTICO ===");
    console.log(cadena_tree);
    console.log("========================\n");

    // 4. Interpretación
    console.log("=== EJECUTANDO PROGRAMA ===");
    const interpreter = new FuncionInterpreter();
    await interpreter.execute(tree);
    console.log("===========================");
}

main();
