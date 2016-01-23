// LICENSE : MIT
"use strict";
var fs = require("fs");
var prh = require("textlint-rule-prh");
module.exports = function (context) {
    // 辞書ベースのカタカタ表記のチェックを行う
    var ruleContent = fs.readFileSync(__dirname + "/../dict/web+db_press.yml", "utf-8");
    return prh(context, {
        ruleContents: [ruleContent]
    });
};