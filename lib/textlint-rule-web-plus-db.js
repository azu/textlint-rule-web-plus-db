// LICENSE : MIT
"use strict";
var path = require("path");
var prh = require("textlint-rule-prh");
module.exports = function (context) {
    // 辞書ベースのカタカタ表記のチェックを行う
    return prh(context, {
        rulePaths: [path.join(__dirname, "..", "dict", "web+db_press.yml")]
    });
};