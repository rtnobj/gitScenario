function testSquash() {
    const testCases = [
        {
            input: [1, 2, 3, 4, 5],
            output: 15
        },
        {
            input: [1, 2, 3, 4, 5],
            output: 15
        },
    ]
    for (const testCase of testCases) {
        const result = squash(testCase.input);
        console.log(result);
    }
}