
/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
%lex
%%

\s+                                                     /*skip whites*/
[2][0-7][0-9][0-9]|2800\b                               return 'YYYY'
1[0-9]|2[0-9]|3[0-1]|[1-9]\b                            return 'DD'
"enero"|"febrero"|"marzo|"abril|"mayo"|"junio"\b        return 'MM'
"julio"|"agosto"|"septiembre"|"octubre"                 return 'MM'
"noviembre"|"diciembre"\b                               return 'MM'
"de"                                                    return 'de'
<<EOF>>                                                 return 'EOF'
.                                                       return 'INVALID'

/lex

%left 'de'

%start fecha

%% /* language grammar */

fecha
    : f EOF
        {return $1; }
    ;

f
   : dia "de" mesanyo
       {$$ = $1+" de "+$3;}
   ;
dia 
   : DD
       {$$ = Number(yytext);}
   ;
mesanyo
   : mes "de" anyo
       {$$ = $1+" de "+$3;}
   ;
mes 
   : MM
       {$$ = yytext;}
   ;
anyo 
   : YYYY
       {$$ = Number(yytext);}
   ;