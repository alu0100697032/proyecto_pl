var assert = chai.assert;

suite('ADPR', function() {

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
            var x=date.parse("a=2+2.");
            assert.deepEqual(x.block.st.right.type, "+");
        });
        test('Test example file 1', function() {
            var x=date.parse("a = 4 - 2 - 3.");
            assert.deepEqual(x.block.st.right.type,"-");
        });
        test('Test example file 2', function() {
            var x=date.parse("a = ((4 / 2) / 3).");
            assert.deepEqual(x.block.st.right.type,"/");
        });
        test('Test and error', function() {
            try {
            var x=date.parse("a = 3 + (4;.");
            } catch (e) {
                assert.deepEqual(String(e),'SyntaxError: Expected ")", [ \\t\\n\\r], [*\\/], [+\\-] or [0-9] but ";" found.');
            }
        });
        test('Test and undefined', function() {
            try {
            var x=date.parse("     ");
            } catch (e) {
                assert.deepEqual(String(e),'SyntaxError: Expected "begin", "call", "const", "if", "procedure", "var", "while", [ \\t\\n\\r] or [a-zA-Z_] but end of input found.');
            }
        });
        test('Test a ID', function() {
            var x=date.parse("a=hola.");
            assert.deepEqual(x.block.st.right.type,"ID");
        });
        test('Test a *', function() {
            var x=date.parse("a=2*4.");
            assert.deepEqual(x.block.st.right.type,"*");
        });
    });
    
});
    