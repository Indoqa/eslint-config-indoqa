[![npm version](https://badge.fury.io/js/eslint-config-indoqa.svg)](https://www.npmjs.com/package/eslint-config-indoqa)

## Usage

Depend on eslint-config-indoqa in package.json and make sure peer dependecies are available:

```javascript
"dependencies": { 
    "eslint-config-indoqa": "<version>",  // this config, including airbnb, react and import modules
    "babel-eslint": "5.0.0",              // peer: used for parsing
    "eslint": "2.2.0",                    // peer: eslint v2 -> used by editor
    "gulp-eslint": "2.0.0"                // peer: to make sure 'gulp eslint' also uses eslint v2
  },
```

Point to 'indoqa' in .eslintrc. No further configuration needed.

```json
{
  "extends" : ["indoqa"]
}
```