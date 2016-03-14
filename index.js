module.exports = {
  "parser"  : "babel-eslint",
  "plugins": [
    "import",
    "react"
  ],
  "extends" : ["airbnb"],
  "rules": {
    // disable arrow-body-style: allow consistent code formatting using {}
    "arrow-body-style": 0,
    // to be discussed
    "comma-dangle": 0,
    // disable capIsNew as immutable expects const a = Record() et al.
    "new-cap": [2, {"capIsNew": false, "newIsCap": true}],
    // disable object-curly-spacing: it is a matter of taste
    "object-curly-spacing": [2, "never"],
    // disable padded-blocks: it is a matter of taste
    "padded-blocks": 0,
    // add import plugin rules
    "import/no-unresolved": [2, {"commonjs": true, "amd": true}],
    "import/named": 2,
    "import/namespace": 2,
    "import/default": 2,
    "import/export": 2,
    // disable harsh 'prefer-stateless-function': react components may "grow" during development
    "react/prefer-stateless-function": 0
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


