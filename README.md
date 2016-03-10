[![npm](https://img.shields.io/npm/v/@cycle/core.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-indoqa) [![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](http://www.apache.org/licenses/LICENSE-2.0)

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