module.exports = {
    "parser": "babel-eslint",
    "extends": ["airbnb", "plugin:react/recommended"],
    "plugins": [
        "react"
    ],
    "globals": {
        "window": true,
        "document": true,
        "Blob": true,
        "navigator": true
    },
    "rules": {
        "import/prefer-default-export": 0,
        "operator-linebreak": 0,
        "react/jsx-closing-bracket-location": 0,
        "react/jsx-one-expression-per-line": 0,
        "linebreak-style": 0,
        "no-param-reassign": 0,
        "indent": [2, 4, {
            "ignoredNodes": ["JSXElement *"]
        }],
        "no-unused-vars": 1,
        "quotes": [2, "single", {
            "avoidEscape": true,
            "allowTemplateLiterals": true
        }],
        "quote-props": [2, "consistent"],
        "no-console": 0,
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [0, 4],
        "react/destructuring-assignment": "off",
        "react/jsx-filename-extension": "off",
        "react/no-array-index-key": "off",
        "comma-dangle": "off"
    }
}