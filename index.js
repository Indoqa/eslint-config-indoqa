module.exports = {
  "extends" : ["airbnb"],
  "parser"  : "babel-eslint",
  "plugins": [
    "import",
    "react"
  ],
  "env": {
    "browser": true,
    "jest": true
  },
  "rules": {
    // disable arrow-body-style: allow consistent code formatting using {}
    "arrow-body-style": 0,
    // enforce parens if there is only a single argument as well
    "arrow-parens": [1, "always"],
    'comma-dangle': ['error', {
      arrays: 'never',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    // disable dot-notation: allow things like req.headers['Accept'] = 'application/json'
    "dot-notation": 0,
    // allow requires
    "global-require": 0,
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
    "import/prefer-default-export": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/href-no-hash": 0,
    // not there yet
    "react/forbid-prop-types": 0,
    // enable allowArrowFunctions in jsx props
    "react/jsx-no-bind": [2, {"allowArrowFunctions": true}],
    // allowed filename extensions for JSX
    "react/jsx-filename-extension": [1, { "extensions": [".react.js", "index.js", "redux.js"] }],
    // disable harsh 'prefer-stateless-function': react components may "grow" during development
    "react/prefer-stateless-function": 0,
    // calling properties 'danger...' is enough warning
    "react/no-danger": 0
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
