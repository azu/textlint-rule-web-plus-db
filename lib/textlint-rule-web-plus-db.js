// LICENSE : MIT
"use strict";
var fs = require("fs");
var prh = require("textlint-rule-prh");
var reporter = function (context) {
    // 辞書ベースのカタカタ表記のチェックを行う
    var ruleContent = fs.readFileSync(__dirname + "/../dict/web+db_press.yml", "utf-8");
    return prh.fixer(context, {
        ruleContents: [ruleContent]
    });
};
module.exports = {
    linter: reporter,
    fixer: reporter
};