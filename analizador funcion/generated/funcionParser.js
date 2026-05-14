// Generated from c:\Users\joaqu\OneDrive\Documentos\utn\2do\1er semestre\SIntaxis y Semantica del lenguaje\funcion sintaxis\analizador sintáctico funcion\funcion.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import funcionListener from './funcionListener.js';
import funcionVisitor from './funcionVisitor.js';

const serializedATN = [4,1,18,82,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,4,0,14,8,0,11,0,12,0,15,1,1,1,1,1,1,1,1,3,1,22,8,1,1,1,1,1,1,
1,1,1,1,1,1,2,1,2,1,2,5,2,32,8,2,10,2,12,2,35,9,2,1,3,5,3,38,8,3,10,3,12,
3,41,9,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
3,4,59,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,69,8,5,1,5,1,5,1,5,1,5,1,
5,1,5,5,5,77,8,5,10,5,12,5,80,9,5,1,5,0,1,10,6,0,2,4,6,8,10,0,2,1,0,8,9,
1,0,10,11,86,0,13,1,0,0,0,2,17,1,0,0,0,4,28,1,0,0,0,6,39,1,0,0,0,8,58,1,
0,0,0,10,68,1,0,0,0,12,14,3,2,1,0,13,12,1,0,0,0,14,15,1,0,0,0,15,13,1,0,
0,0,15,16,1,0,0,0,16,1,1,0,0,0,17,18,5,1,0,0,18,19,5,13,0,0,19,21,5,15,0,
0,20,22,3,4,2,0,21,20,1,0,0,0,21,22,1,0,0,0,22,23,1,0,0,0,23,24,5,16,0,0,
24,25,5,2,0,0,25,26,3,6,3,0,26,27,5,3,0,0,27,3,1,0,0,0,28,33,5,13,0,0,29,
30,5,4,0,0,30,32,5,13,0,0,31,29,1,0,0,0,32,35,1,0,0,0,33,31,1,0,0,0,33,34,
1,0,0,0,34,5,1,0,0,0,35,33,1,0,0,0,36,38,3,8,4,0,37,36,1,0,0,0,38,41,1,0,
0,0,39,37,1,0,0,0,39,40,1,0,0,0,40,7,1,0,0,0,41,39,1,0,0,0,42,43,5,5,0,0,
43,44,5,15,0,0,44,45,5,13,0,0,45,46,5,16,0,0,46,59,5,6,0,0,47,48,5,7,0,0,
48,49,5,15,0,0,49,50,3,10,5,0,50,51,5,16,0,0,51,52,5,6,0,0,52,59,1,0,0,0,
53,54,5,13,0,0,54,55,5,12,0,0,55,56,3,10,5,0,56,57,5,6,0,0,57,59,1,0,0,0,
58,42,1,0,0,0,58,47,1,0,0,0,58,53,1,0,0,0,59,9,1,0,0,0,60,61,6,5,-1,0,61,
69,5,14,0,0,62,69,5,18,0,0,63,69,5,13,0,0,64,65,5,15,0,0,65,66,3,10,5,0,
66,67,5,16,0,0,67,69,1,0,0,0,68,60,1,0,0,0,68,62,1,0,0,0,68,63,1,0,0,0,68,
64,1,0,0,0,69,78,1,0,0,0,70,71,10,6,0,0,71,72,7,0,0,0,72,77,3,10,5,7,73,
74,10,5,0,0,74,75,7,1,0,0,75,77,3,10,5,6,76,70,1,0,0,0,76,73,1,0,0,0,77,
80,1,0,0,0,78,76,1,0,0,0,78,79,1,0,0,0,79,11,1,0,0,0,80,78,1,0,0,0,8,15,
21,33,39,58,68,76,78];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class funcionParser extends antlr4.Parser {

    static grammarFileName = "funcion.g4";
    static literalNames = [ null, "'funcion'", "'{'", "'}'", "','", "'leer'", 
                            "';'", "'escribir'", "'*'", "'/'", "'+'", "'-'", 
                            "'='", null, null, "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             "MUL", "DIV", "ADD", "SUB", "EQ", "ID", "INT", 
                             "LPAREN", "RPAREN", "WS", "CAD" ];
    static ruleNames = [ "prog", "function", "parametros", "instrucciones", 
                         "instruccion", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = funcionParser.ruleNames;
        this.literalNames = funcionParser.literalNames;
        this.symbolicNames = funcionParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 5:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 6);
    		case 1:
    			return this.precpred(this._ctx, 5);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, funcionParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 12;
	            this.function_();
	            this.state = 15; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	function_() {
	    let localctx = new FunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, funcionParser.RULE_function);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this.match(funcionParser.T__0);
	        this.state = 18;
	        this.match(funcionParser.ID);
	        this.state = 19;
	        this.match(funcionParser.LPAREN);
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 20;
	            this.parametros();
	        }

	        this.state = 23;
	        this.match(funcionParser.RPAREN);
	        this.state = 24;
	        this.match(funcionParser.T__1);
	        this.state = 25;
	        this.instrucciones();
	        this.state = 26;
	        this.match(funcionParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parametros() {
	    let localctx = new ParametrosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, funcionParser.RULE_parametros);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(funcionParser.ID);
	        this.state = 33;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 29;
	            this.match(funcionParser.T__3);
	            this.state = 30;
	            this.match(funcionParser.ID);
	            this.state = 35;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, funcionParser.RULE_instrucciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 8352) !== 0)) {
	            this.state = 36;
	            this.instruccion();
	            this.state = 41;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, funcionParser.RULE_instruccion);
	    try {
	        this.state = 58;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            localctx = new LeerInstContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 42;
	            this.match(funcionParser.T__4);
	            this.state = 43;
	            this.match(funcionParser.LPAREN);
	            this.state = 44;
	            this.match(funcionParser.ID);
	            this.state = 45;
	            this.match(funcionParser.RPAREN);
	            this.state = 46;
	            this.match(funcionParser.T__5);
	            break;
	        case 7:
	            localctx = new EscribirInstContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 47;
	            this.match(funcionParser.T__6);
	            this.state = 48;
	            this.match(funcionParser.LPAREN);
	            this.state = 49;
	            this.expr(0);
	            this.state = 50;
	            this.match(funcionParser.RPAREN);
	            this.state = 51;
	            this.match(funcionParser.T__5);
	            break;
	        case 13:
	            localctx = new AsignacionInstContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 53;
	            this.match(funcionParser.ID);
	            this.state = 54;
	            this.match(funcionParser.EQ);
	            this.state = 55;
	            this.expr(0);
	            this.state = 56;
	            this.match(funcionParser.T__5);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 10;
	    this.enterRecursionRule(localctx, 10, funcionParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            localctx = new IntExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 61;
	            this.match(funcionParser.INT);
	            break;
	        case 18:
	            localctx = new CadExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 62;
	            this.match(funcionParser.CAD);
	            break;
	        case 13:
	            localctx = new IdExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 63;
	            this.match(funcionParser.ID);
	            break;
	        case 15:
	            localctx = new ParenExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 64;
	            this.match(funcionParser.LPAREN);
	            this.state = 65;
	            this.expr(0);
	            this.state = 66;
	            this.match(funcionParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 78;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 76;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, funcionParser.RULE_expr);
	                    this.state = 70;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 71;
	                    _la = this._input.LA(1);
	                    if(!(_la===8 || _la===9)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 72;
	                    this.expr(7);
	                    break;

	                case 2:
	                    localctx = new AddSubExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, funcionParser.RULE_expr);
	                    this.state = 73;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 74;
	                    _la = this._input.LA(1);
	                    if(!(_la===10 || _la===11)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 75;
	                    this.expr(6);
	                    break;

	                } 
	            }
	            this.state = 80;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

funcionParser.EOF = antlr4.Token.EOF;
funcionParser.T__0 = 1;
funcionParser.T__1 = 2;
funcionParser.T__2 = 3;
funcionParser.T__3 = 4;
funcionParser.T__4 = 5;
funcionParser.T__5 = 6;
funcionParser.T__6 = 7;
funcionParser.MUL = 8;
funcionParser.DIV = 9;
funcionParser.ADD = 10;
funcionParser.SUB = 11;
funcionParser.EQ = 12;
funcionParser.ID = 13;
funcionParser.INT = 14;
funcionParser.LPAREN = 15;
funcionParser.RPAREN = 16;
funcionParser.WS = 17;
funcionParser.CAD = 18;

funcionParser.RULE_prog = 0;
funcionParser.RULE_function = 1;
funcionParser.RULE_parametros = 2;
funcionParser.RULE_instrucciones = 3;
funcionParser.RULE_instruccion = 4;
funcionParser.RULE_expr = 5;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = funcionParser.RULE_prog;
    }

	function_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FunctionContext);
	    } else {
	        return this.getTypedRuleContext(FunctionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof funcionVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = funcionParser.RULE_function;
    }

	ID() {
	    return this.getToken(funcionParser.ID, 0);
	};

	LPAREN() {
	    return this.getToken(funcionParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(funcionParser.RPAREN, 0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	parametros() {
	    return this.getTypedRuleContext(ParametrosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.enterFunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.exitFunction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof funcionVisitor ) {
	        return visitor.visitFunction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParametrosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = funcionParser.RULE_parametros;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(funcionParser.ID);
	    } else {
	        return this.getToken(funcionParser.ID, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.enterParametros(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.exitParametros(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof funcionVisitor ) {
	        return visitor.visitParametros(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = funcionParser.RULE_instrucciones;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof funcionVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = funcionParser.RULE_instruccion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class EscribirInstContext extends InstruccionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(funcionParser.LPAREN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RPAREN() {
	    return this.getToken(funcionParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.enterEscribirInst(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.exitEscribirInst(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof funcionVisitor ) {
	        return visitor.visitEscribirInst(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

funcionParser.EscribirInstContext = EscribirInstContext;

class LeerInstContext extends InstruccionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(funcionParser.LPAREN, 0);
	};

	ID() {
	    return this.getToken(funcionParser.ID, 0);
	};

	RPAREN() {
	    return this.getToken(funcionParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.enterLeerInst(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.exitLeerInst(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof funcionVisitor ) {
	        return visitor.visitLeerInst(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

funcionParser.LeerInstContext = LeerInstContext;

class AsignacionInstContext extends InstruccionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(funcionParser.ID, 0);
	};

	EQ() {
	    return this.getToken(funcionParser.EQ, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.enterAsignacionInst(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.exitAsignacionInst(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof funcionVisitor ) {
	        return visitor.visitAsignacionInst(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

funcionParser.AsignacionInstContext = AsignacionInstContext;

class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = funcionParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class IntExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INT() {
	    return this.getToken(funcionParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.enterIntExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.exitIntExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof funcionVisitor ) {
	        return visitor.visitIntExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

funcionParser.IntExprContext = IntExprContext;

class AddSubExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	ADD() {
	    return this.getToken(funcionParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(funcionParser.SUB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.enterAddSubExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.exitAddSubExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof funcionVisitor ) {
	        return visitor.visitAddSubExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

funcionParser.AddSubExprContext = AddSubExprContext;

class CadExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	CAD() {
	    return this.getToken(funcionParser.CAD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.enterCadExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.exitCadExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof funcionVisitor ) {
	        return visitor.visitCadExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

funcionParser.CadExprContext = CadExprContext;

class MulDivExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	MUL() {
	    return this.getToken(funcionParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(funcionParser.DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.enterMulDivExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.exitMulDivExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof funcionVisitor ) {
	        return visitor.visitMulDivExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

funcionParser.MulDivExprContext = MulDivExprContext;

class ParenExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(funcionParser.LPAREN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RPAREN() {
	    return this.getToken(funcionParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.enterParenExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.exitParenExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof funcionVisitor ) {
	        return visitor.visitParenExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

funcionParser.ParenExprContext = ParenExprContext;

class IdExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(funcionParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.enterIdExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof funcionListener ) {
	        listener.exitIdExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof funcionVisitor ) {
	        return visitor.visitIdExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

funcionParser.IdExprContext = IdExprContext;


funcionParser.ProgContext = ProgContext; 
funcionParser.FunctionContext = FunctionContext; 
funcionParser.ParametrosContext = ParametrosContext; 
funcionParser.InstruccionesContext = InstruccionesContext; 
funcionParser.InstruccionContext = InstruccionContext; 
funcionParser.ExprContext = ExprContext; 
