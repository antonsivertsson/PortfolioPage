module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "globals": {
        "require":true
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",

    "plugins": [
        "react"
    ],
    "rules": {
        "indent": 0,
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "warn",
            "single"
        ],
        "semi": [
            "warn",
            "always"
        ],
        "no-unused-vars": 1,
        "no-irregular-whitespace": 1,
        "no-console": 0
    }
};