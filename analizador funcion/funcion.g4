grammar funcion;

prog: function+;

function:
	'funcion' ID '(' parametros? ')' '{' instrucciones '}';

parametros: ID (',' ID)*;

instrucciones: instruccion*;

instruccion:
	'leer' '(' ID ')' ';'			# leerInst
	| 'escribir' '(' expr ')' ';'	# escribirInst
	| ID '=' expr ';'				# asignacionInst;

expr:
	expr (MUL | DIV) expr	# mulDivExpr
	| expr (ADD | SUB) expr	# addSubExpr
	| INT					# intExpr
	| CAD					# cadExpr
	| ID					# idExpr
	| LPAREN expr RPAREN	# parenExpr;

//Lexemas
MUL: '*';
DIV: '/';
ADD: '+';
SUB: '-';
EQ: '=';
ID: [a-zA-Z]+;
INT: [0-9]+;
LPAREN: '(';
RPAREN: ')';
WS: [ \t\r\n]+ -> skip;
CAD: '"' .*? '"';