module.exports = {
    "env": {
      "node": true,
      "browser": true,
      "es6": true,
      "commonjs": true
    },
    "plugins": [
      "react"
    ],
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    "settings": {
      "import/resolver": {
        "node": {
          "paths": [
            "./"
          ]
        }
      }
    },
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true,
        "experimentalObjectRestSpread": true,
        "modules": true
      }
    },
    "rules": {
      "react/prefer-stateless-function": 0,
      "linebreak-style": 0,
      "jsx-a11y/heading-has-content": 0,
      "jsx-a11y/href-no-hash": 0,
      "jsx-a11y/anchor-is-valid": 0,
      "no-underscore-dangle": 0,
      "react/no-find-dom-node": 0,
      "react/prop-types": 0,
      "no-nested-ternary": 0,
      "react/display-name": 0,
      "quotes": [
        2,
        "single",
        "avoid-escape"
      ],
      "jsx-quotes": [
        "error",
        "prefer-single"
      ],
      "semi": [
        "error",
      ]
    }
  };