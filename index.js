module.exports = {
  "extends" : ["airbnb"],
  "parser"  : "babel-eslint",
  "plugins": [
    "import",
    "react"
  ],
  "env": {
    "browser": true
  },
  "rules": {
    // disable arrow-body-style: allow consistent code formatting using {}
    "arrow-body-style": 0,
    // to be discussed
    "comma-dangle": 0,
    // disable dot-notation: allow things like req.headers['Accept'] = 'application/json'
    "dot-notation": 0,
    // max-len: allow 135 chars, similar to our java formatter
    "max-len": [2, {"code": 135}],
    // disable capIsNew as immutable expects const a = Record() et al.
    "new-cap": [2, {"capIsNew": false, "newIsCap": true}],
    // disable no-param-reassign: redux reducers with immutable in current format need param reassign
    "no-param-reassign": 0,
    // disable object-curly-spacing: it is a matter of taste
    "object-curly-spacing": [2, "never"],
    // disable padded-blocks: it is a matter of taste
    "padded-blocks": 0,
    // disable all semicolons
    "semi": [2, "never"],
    // add import plugin rules
    "import/no-unresolved": [2, {"commonjs": true, "amd": true}],
    "import/named": 2,
    "import/namespace": 2,
    "import/default": 2,
    "import/export": 2,
    "import/extensions": [0, "never"],
    // enable allowArrowFunctions in jsx props
    "react/jsx-no-bind": [2, {"allowArrowFunctions": true}],
    // allowed filename extensions for JSX
    "react/jsx-filename-extension": [1, { "extensions": [".react.js", "index.js"] }],
    // disable harsh 'prefer-stateless-function': react components may "grow" during development
    "react/prefer-stateless-function": 0,
    // calling properties 'danger...' is enough
    "react/no-danger": 0,
    // allow .react.js
    "react/jsx-filename-extension": [1, { "extensions": [".react.js"] }],
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
