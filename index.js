module.exports = {
  "parser"  : "babel-eslint",
  "plugins": [
    "import",
    "react"
  ],
  "extends" : ["airbnb"],
  "rules": {
    "comma-dangle": 0,
    "curly": 0,
    "new-cap": [2, {"capIsNew": false, "newIsCap": true}],
    "no-param-reassign": 0,
    "no-shadow": 0,
    "object-curly-spacing": [2, "never"],
    "object-shorthand": 0,
    "padded-blocks": 0,
    "import/no-unresolved": [2, {"commonjs": true, "amd": true}],
    "import/named": 2,
    "import/namespace": 2,
    "import/default": 2,
    "import/export": 2,
  },
  "globals": {
    "after": false,
    "afterEach": false,
    "before": false,
    "beforeEach": false,
    "describe": false,
    "it": false,
    "require": false
  },
  "settings": {
    "import/ignore": [
      "node_modules"
    ],
    "import/parser": "babel-eslint",
    "import/resolve": {
      "extensions": [
        ".js",
        ".jsx",
        ".json"
      ]
    }
  }
}


