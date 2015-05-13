
/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
%lex
%%

\s+                                                     /*skip whites*/
[2][0-7][0-9][0-9]|2800\b                               return 'YYYY'
1[0-9]|2[0-9]|3[0-1]|[1-9]\b                            return 'DD'
"enero"|"febrero"|"marzo"|"abril"|"mayo"|"junio"\b        return 'MM'
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
            var tipoanyo;
            if($1[0] == 0)
            diasemana = "Día de la semana: domingo";
            else if($1[0] == 1)
            diasemana = "Día de la semana: lunes"; 
            else if($1[0] == 2)
            diasemana = "Día de la semana: martes";
            else if($1[0] == 3)
            diasemana = "Día de la semana: miercoles";
            else if($1[0] == 4)
            diasemana = "Día de la semana: jueves";
            else if($1[0] == 5)
            diasemana = "Día de la semana: viernes";
            else if($1[0] == 6)
            diasemana = "Día de la semana: sabado";
            if($1[1] == true)
                tipoanyo = "Tipo de año: bisiesto. ";
            else
                tipoanyo = "Tipo de año: normal. ";
            return tipoanyo + diasemana;
        }
    ;

f
   : dia "de" mesanyo
       {
            if(($1+$3[0]) >= 7)
                $$ = [($1+$3[0])%7, $3[1]];
        }
   ;
dia 
   : DD
       {$$ = Number(yytext);}
   ;
mesanyo
   : mes "de" anyo
       {
            if($1[1] == true && $3[1] == true)
                $$ = [$1[0]+$3[0]+1, true];
            else
                $$ = [$1[0]+$3[0], false];
       }
   ;
mes 
   : MM
       {
            if(yytext == 'enero')
                $$ = [0, false];
            else if(yytext == 'febrero')
                $$ = [3, false];
            else if(yytext == 'marzo')
                $$ = [3, true];
            else if(yytext == 'abril')
                $$ = [-1, true];
            else if(yytext == 'mayo')
                $$ = [1, true];
            else if(yytext == 'junio')
                $$ = [4, true];
            else if(yytext == 'julio')
                $$ = [6, true];
            else if(yytext == 'agosto')
                $$ = [2, true];
            else if(yytext == 'septiembre')
                $$ = [5, true];
            else if(yytext == 'octubre')
                $$ = [0, true];
            else if(yytext == 'noviembre')
                $$ = [3, true];
            else if(yytext == 'diciembre')
                $$ = [5, true];
        }
   ;
anyo 
   : YYYY
       {
            var bisiesto = false;
            if((yytext%4) == 0)
                bisiesto = true;
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
            $$ = [desplazamiento, bisiesto];
        }
   ;