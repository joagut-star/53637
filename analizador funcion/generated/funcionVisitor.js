// Generated from c:\Users\joaqu\OneDrive\Documentos\utn\2do\1er semestre\SIntaxis y Semantica del lenguaje\funcion sintaxis\analizador sintáctico funcion\funcion.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by funcionParser.

export default class funcionVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by funcionParser#prog.
	visitProg(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by funcionParser#function.
	visitFunction(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by funcionParser#parametros.
	visitParametros(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by funcionParser#instrucciones.
	visitInstrucciones(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by funcionParser#leerInst.
	visitLeerInst(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by funcionParser#escribirInst.
	visitEscribirInst(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by funcionParser#asignacionInst.
	visitAsignacionInst(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by funcionParser#intExpr.
	visitIntExpr(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by funcionParser#addSubExpr.
	visitAddSubExpr(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by funcionParser#cadExpr.
	visitCadExpr(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by funcionParser#mulDivExpr.
	visitMulDivExpr(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by funcionParser#parenExpr.
	visitParenExpr(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by funcionParser#idExpr.
	visitIdExpr(ctx) {
	  return this.visitChildren(ctx);
	}



}