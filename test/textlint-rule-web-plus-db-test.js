var TextLintTester = require("textlint-tester");
// rules
var rule = require("../lib/textlint-rule-web-plus-db");
var tester = new TextLintTester();
// ruleName, rule, expected[]
tester.run("rule", rule, {
    valid: [
        "Cookie"
    ],
    invalid: [
        {
            text: "クッキー",
            errors: [
                {
                    message: "クッキー => Cookie",
                    line: 1,
                    column: 1
                }
            ]
        },
        {
            text: "クッキー",
            errors: [
                {
                    message: "クッキー => Cookie",
                    line: 1,
                    column: 1
                }
            ]
        }, {
            // TODO: found 2 errors
            text: "1Gバイトのメモリーです",
            errors: [
                {
                    message: "1Gバイト => 1GB",
                    line: 1,
                    column: 1
                }
            ]
        }
    ]
});