//testas1
QUnit.test("longest word", function(assert) {
    var result = getLongestWord(["rytas", "vakaras", "diena", "naktis"]);
    var expected = 7;
    assert.equal(result, expected, "Passed!");
});
    //testas2
QUnit.test("total sum", function(assert) {
    var result = sumTotal([3, 6, 9, 12]);
    var expected = 30;
    assert.equal(result, expected, "Passed!");
});

//testas3
QUnit.test("multiply in total", function(assert) {
    var result = multiplyTotal([3, 6, 9, 12]);
    var expected = 1944;
    assert.equal(result, expected, "Passed!");
});

//testas4
QUnit.test("accumulate", function(assert) {
    var result = accumulate([3, 7], "-");
    var expected = -4;
    assert.equal(result, expected, "Passed!");
});

//testas5
QUnit.test("duplicate", function(assert) {
    var result = duplicate([1, 3, 5, 7]);
    var expected = [1, 3, 5, 7, 1, 3, 5, 7];
    assert.deepEqual(result, expected, "Passed!");
});

//testas6
QUnit.test("fizzbuzz", function(assert) {
    var list = fizzBuzz();
    var result = list[2];
    var expected = "fizz";
    assert.equal(result, expected, "Passed!");
});
