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
        test('Recognize ID in a sentence', function() {
            original.value="a=2+2";
            main();
            assert.match(OUTPUT.innerHTML,/ID/);
            
        });
    });
    
});
    