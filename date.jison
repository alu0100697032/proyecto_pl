
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
        {
            var diasemana;
            if($1 == 0)
            diasemana = "domingo";
            else if($2 == 1)
            diasemana = "lunes"; 
            else if($2 == 2)
            diasemana = "martes";
            else if($2 == 3)
            diasemana = "miercoles";
            else if($2 == 4)
            diasemana = "jueves";
            else if($2 == 5)
            diasemana = "viernes";
            else if($2 == 6)
            diasemana = "sabado";
            return diasemana;
        }
    ;

f
   : dia "de" mesanyo
       {
            if(($1+$3) >= 7)
            $$ = ($1+$3)%7;
        }
   ;
dia 
   : DD
       {$$ = Number(yytext);}
   ;
mesanyo
   : mes "de" anyo
       {
            $$ = $1+$3;
       }
   ;
mes 
   : MM
       {
            if(yytext == 'enero')
            $$ = 0;
            else if(yytext == 'febrero')
            $$ = 3;
            else if(yytext == 'marzo')
            $$ = 3;
            else if(yytext == 'abril')
            $$ = -1;
            else if(yytext == 'mayo')
            $$ = 1;
            else if(yytext == 'junio')
            $$ = 4;
            else if(yytext == 'julio')
            $$ = 6;
            else if(yytext == 'agosto')
            $$ = 2;
            else if(yytext == 'septiembre')
            $$ = 5;
            else if(yytext == 'octubre')
            $$ = 0;
            else if(yytext == 'noviembre')
            $$ = 3;
            else if(yytext == 'diciembre')
            $$ = 5;
        }
   ;
anyo 
   : YYYY
       {
            //paso 1
            var calculo1 = yytext%400 
            //paso 2
            var desplazamiento = 0;
            if(calculo1 > 100){
              desplazamiento = Math.floor(calculo/100);
              desplazamiento = desplazamiento * 5;
            }
            //paso 3
            var calculo2 = Number(yytext.substring(2,4));
            var calculo3 = 0;
            if(calculo2 == 00)
             calculo3 = 99;
            else
            calculo3 = calculo2-1;
            
            var calculo4 = Number(Math.floor(calculo3/4));
            desplazamiento = desplazamiento + calculo4+calculo3;
            if(desplazamiento >= 7)
            desplazamiento = desplazamiento % 7;
            $$ = desplazamiento;
        }
   ;