[![Latest version on npm](https://badge.fury.io/js/eslint-config-indoqa.svg)](https://www.npmjs.com/package/eslint-config-indoqa)

## Usage

Depend on eslint-config-indoqa in package.json and make sure peer dependecies are available:

```javascript
"dependencies": {
    "eslint-config-indoqa":   "<version>",  // this config, including airbnb, react and import modules
    "eslint-plugin-react":    "^6.6.0",     // peer: overriden rules
    "eslint-plugin-import":   "^2.1.0",     // peer: overriden rules
    "eslint-plugin-jsx-a11y": "^2.2.3",     // peer: overriden rules
    "eslint":                 "^3.9.1"      // peer: eslint
  },
```

Point to 'indoqa' in .eslintrc. No further configuration needed.

```json
{
  "extends" : ["indoqa"]
}
```
