# textlint-rule-web-plus-db [![Build Status](https://travis-ci.org/azu/textlint-rule-web-plus-db.svg?branch=master)](https://travis-ci.org/azu/textlint-rule-web-plus-db)

WEB+DB PRESS用語統一辞書 for [textlint](https://github.com/textlint/textlint "textlint")

[inao/WEB+DB PRESS用語統一ルール](https://gist.github.com/inao/f55e8232e150aee918b9 "inao/WEB+DB PRESS用語統一ルール")を用語統一辞書をチェックするtextlintルールです。

できる限りWEB+DB PRESS用語統一を厳守することを目的としています。

## Installation

    npm install textlint-rule-web-plus-db

and install [textlint](https://github.com/textlint/textlint "textlint") either locally or globally.
    
## Usage

Via CLI

    $ npm install textlint textlint-rule-web-plus-db -g
    $ textlint --rule web-plus-db README.md

Via `.textlintrc`

    {
        "rules": {
            "web-plus-db": true
        }
    }

## Similar rules

目的が類似するルール

- [azu/textlint-rule-prh](https://github.com/azu/textlint-rule-prh)
    - 自分で用意した辞書で表記揺れを検出するためのルール
- [azu/textlint-rule-spellcheck-tech-word](https://github.com/azu/textlint-rule-spellcheck-tech-word)
    - WEB+DB PRESS用語統一を一部含んでいるルール
    - textlint-rule-web-plus-dbとは重複したルールが多いため併用は非推奨(二重にエラーがでます)

## Tests

    npm test

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT

Thanks to [inao/WEB+DB PRESS用語統一ルール](https://gist.github.com/inao/f55e8232e150aee918b9 "inao/WEB+DB PRESS用語統一ルール").