var assert = chai.assert;

suite('PL Proyect: Dates', function() {

    setup(function() {
        if (typeof __html__ !== 'undefined') {
            document.body.innerHTML = __html__['test.html'];
            original = document.getElementById('original');
            output = document.getElementById('OUTPUT');
            
            
        }
    });
    suite('Testing', function() {
        test('Detecte input value', function() {
            original.value="a=2+2";
            assert.deepEqual(original.value,"a=2+2");
        });
        test('Recognize output from a sentence', function() {
            var x=parser.parse("25 de mayo de 2015");
            assert.deepEqual(x, 'Tipo de año: normal. Día de la semana: lunes');
        });
        test('Monday', function() {
            var x=parser.parse("25 de mayo de 2015");
            assert.deepEqual(x, 'Tipo de año: normal. Día de la semana: lunes');
        });
        test('Tuesday', function() {
            var x=parser.parse("26 de mayo de 2015");
            assert.deepEqual(x, 'Tipo de año: normal. Día de la semana: martes');
        });
        test('Wenesday', function() {
            var x=parser.parse("27 de mayo de 2015");
            assert.deepEqual(x, 'Tipo de año: normal. Día de la semana: miercoles');
        });
        test('Thrusday', function() {
            var x=parser.parse("28 de mayo de 2015");
            assert.deepEqual(x, 'Tipo de año: normal. Día de la semana: jueves');
        });
        test('Friday', function() {
            var x=parser.parse("29 de mayo de 2015");
            assert.deepEqual(x, 'Tipo de año: normal. Día de la semana: viernes');
        });
        test('Saturday', function() {
            var x=parser.parse("30 de mayo de 2015");
            assert.deepEqual(x, 'Tipo de año: normal. Día de la semana: sabado');
        });
        test('Sunday', function() {
            var x=parser.parse("31 de mayo de 2015");
            assert.deepEqual(x, 'Tipo de año: normal. Día de la semana: domingo');
        });
        test('january', function() {
            var x=parser.parse("1 de enero de 2015");
            assert.deepEqual(x, 'Tipo de año: normal. Día de la semana: jueves');
        });
        test('february', function() {
            var x=parser.parse("1 de febrero de 2015");
            assert.deepEqual(x, 'Tipo de año: normal. Día de la semana: domingo');
        });
        test('march', function() {
            var x=parser.parse("1 de marzo de 2015");
            assert.deepEqual(x, 'Tipo de año: normal. Día de la semana: domingo');
        });
        test('april', function() {
            var x=parser.parse("1 de abril de 2015");
            assert.deepEqual(x, 'Tipo de año: normal. Día de la semana: miercoles');
        });
        test('may', function() {
            var x=parser.parse("1 de mayo de 2015");
            assert.deepEqual(x, 'Tipo de año: normal. Día de la semana: viernes');
        });
        test('june', function() {
            var x=parser.parse("1 de junio de 2015");
            assert.deepEqual(x, 'Tipo de año: normal. Día de la semana: lunes');
        });
        test('july', function() {
            var x=parser.parse("1 de julio de 2015");
            assert.deepEqual(x, 'Tipo de año: normal. Día de la semana: miercoles');
        });
        test('august', function() {
            var x=parser.parse("1 de agosto de 2015");
            assert.deepEqual(x, 'Tipo de año: normal. Día de la semana: sabado');
        });
        test('september', function() {
            var x=parser.parse("1 de septiembre de 2015");
            assert.deepEqual(x, 'Tipo de año: normal. Día de la semana: martes');
        });
        test('october', function() {
            var x=parser.parse("1 de octubre de 2015");
            assert.deepEqual(x, 'Tipo de año: normal. Día de la semana: jueves');
        });
        test('november', function() {
            var x=parser.parse("1 de noviembre de 2015");
            assert.deepEqual(x, 'Tipo de año: normal. Día de la semana: domingo');
        });
        test('december', function() {
            var x=parser.parse("1 de diciembre de 2015");
            assert.deepEqual(x, 'Tipo de año: normal. Día de la semana: martes');
        });
        test('lep-year', function() {
            var x=parser.parse("1 de enero de 2016");
            assert.deepEqual(x, 'Tipo de año: bisiesto. Día de la semana: viernes');
        });
        test('empty', function() {
            try {
                var x=parser.parse("");
            }
            catch (err) {
                assert;
            }
        });
        test('fail', function() {
            try {
                var x=parser.parse("1 de enro de 2016");
            }
            catch (err) {
                assert;
            }
        });
        test('not day', function() {
            try {
                var x=parser.parse("enero de 2016");
            }
            catch (err) {
                assert;
            }
        });
        test('not month', function() {
            try {
                var x=parser.parse("1 de 2016");
            }
            catch (err) {
                assert;
            }
        });
        test('not year', function() {
            try {
                var x=parser.parse("1 de enro de 2016");
            }
            catch (err) {
                assert;
            }
        });
        test('invalid day', function() {
            try {
                var x=parser.parse("45 de enro de 2016");
            }
            catch (err) {
                assert;
            }
        });
        test('invalid day II', function() {
            try {
                var x=parser.parse("0 de enro de 2016");
            }
            catch (err) {
                assert;
            }
        });
        test('invalid year', function() {
            try {
                var x=parser.parse("1 de enro de 3450");
            }
            catch (err) {
                assert;
            }
        });
        test('invalid year II', function() {
            try {
                var x=parser.parse("1 de enro de 1450");
            }
            catch (err) {
                assert;
            }
        });
        
        
    });
    
});
    