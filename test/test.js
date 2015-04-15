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
            original.value="a=2+2";
            main();
            assert.deepEqual(OUTPUT.innerHTML,'{\n  "type": "=",\n  "left": {\n    "type": "ID",\n    "value": "a"\n  },\n  "right": {\n    "type": "+",\n    "left": {\n      "type": "NUM",\n      "value": 2\n    },\n    "right": {\n      "type": "NUM",\n      "value": 2\n    }\n  }\n}');
        });
        test('Test example file 1', function() {
            original.value="if a == 1 then b = 4";
            main();
            assert.deepEqual(OUTPUT.innerHTML,'{\n  "type": "IF",\n  "left": {\n    "type": "==",\n    "left": {\n      "type": "ID",\n      "value": "a"\n    },\n    "right": {\n      "type": "NUM",\n      "value": 1\n    }\n  },\n  "right": {\n    "type": "=",\n    "left": {\n      "type": "ID",\n      "value": "b"\n    },\n    "right": {\n      "type": "NUM",\n      "value": 4\n    }\n  }\n}');
        });
        test('Test example file 2', function() {
            original.value="a = 4 - 2 - 3";
            main();
            assert.deepEqual(OUTPUT.innerHTML,'{\n  "type": "=",\n  "left": {\n    "type": "ID",\n    "value": "a"\n  },\n  "right": {\n    "type": "-",\n    "left": {\n      "type": "-",\n      "left": {\n        "type": "NUM",\n        "value": 4\n      },\n      "right": {\n        "type": "NUM",\n        "value": 2\n      }\n    },\n    "right": {\n      "type": "NUM",\n      "value": 3\n    }\n  }\n}');
        });
        test('Test example file 3', function() {
            original.value="a = ((4 / 2) / 3)";
            main();
            assert.deepEqual(OUTPUT.innerHTML,'{\n  "type": "=",\n  "left": {\n    "type": "ID",\n    "value": "a"\n  },\n  "right": {\n    "type": "/",\n    "left": {\n      "type": "/",\n      "left": {\n        "type": "NUM",\n        "value": 4\n      },\n      "right": {\n        "type": "NUM",\n        "value": 2\n      }\n    },\n    "right": {\n      "type": "NUM",\n      "value": 3\n    }\n  }\n}');
        });
        test('Recognize ID in a sentence', function() {
            original.value="a=2+2";
            main();
            assert.match(OUTPUT.innerHTML,/ID/);
        });
        test('Recognize NUM in a sentence', function() {
            original.value="a=2+2";
            main();
            assert.match(OUTPUT.innerHTML,/NUM/);
        });
    });
    
});
    