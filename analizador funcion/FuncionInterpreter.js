import funcionVisitor from "./generated/funcionVisitor.js";
import funcionParser from "./generated/funcionParser.js";
import readline from 'readline';

function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }));
}

export class FuncionInterpreter extends funcionVisitor {
    constructor() {
        super();
        this.memory = new Map();
    }

    async execute(tree) {
        await this.visitProg(tree);
    }

    async visitProg(ctx) {
        const functions = ctx.function_();
        for (let i = 0; i < functions.length; i++) {
            await this.visitFunction(functions[i]);
        }
    }

    async visitFunction(ctx) {
        if (ctx.instrucciones()) {
            await this.visitInstrucciones(ctx.instrucciones());
        }
    }

    async visitInstrucciones(ctx) {
        const instrucciones = ctx.instruccion();
        for (let i = 0; i < instrucciones.length; i++) {
            await this.visit(instrucciones[i]);
        }
    }

    async visitLeerInst(ctx) {
        const id = ctx.ID().getText();
        const inputValue = await askQuestion(`Ingrese valor: `);

        // Si parece un número, lo guardamos como tal. Si no, como cadena.
        const num = parseFloat(inputValue);
        if (!isNaN(num) && inputValue.trim() !== '') {
            this.memory.set(id, num);
        } else {
            this.memory.set(id, inputValue);
        }
    }

    async visitEscribirInst(ctx) {
        const value = await this.visit(ctx.expr());
        console.log(`> ${value}`);
    }

    async visitAsignacionInst(ctx) {
        const id = ctx.ID().getText();
        const value = await this.visit(ctx.expr());
        this.memory.set(id, value);
    }

    async visitMulDivExpr(ctx) {
        const left = await this.visit(ctx.expr(0));
        const right = await this.visit(ctx.expr(1));
        if (ctx.MUL()) {
            return left * right;
        } else {
            return left / right;
        }
    }

    async visitAddSubExpr(ctx) {
        const left = await this.visit(ctx.expr(0));
        const right = await this.visit(ctx.expr(1));
        if (ctx.ADD()) {
            return left + right;
        } else {
            return left - right;
        }
    }

    async visitIntExpr(ctx) {
        return parseInt(ctx.INT().getText());
    }

    async visitCadExpr(ctx) {
        // Remover las comillas de inicio y fin
        const str = ctx.CAD().getText();
        return str.substring(1, str.length - 1);
    }

    async visitIdExpr(ctx) {
        const id = ctx.ID().getText();
        if (this.memory.has(id)) {
            return this.memory.get(id);
        }
        return `[Error: Variable '${id}' no definida]`;
    }

    async visitParenExpr(ctx) {
        return await this.visit(ctx.expr());
    }
}
