[![npm version](https://badge.fury.io/js/eslint-config-indoqa.svg)](https://www.npmjs.com/package/eslint-config-indoqa)

## Usage

Include eslint-config-indoqa and peer dependecies in package.json:

```
"dependencies" :{ 
    "eslint": "2.2.0",
    "eslint-config-airbnb": "3.1.0",
    "eslint-config-indoqa": "<version>",
    "eslint-plugin-import": "0.12.1",
    "eslint-plugin-react": "4.0.0"
  },
```

Point to 'indoqa' in .eslintrc. No further configuration needed.

```
{
  "extends" : ["indoqa"]
}
```