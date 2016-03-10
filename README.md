[![npm version](https://badge.fury.io/js/eslint-config-indoqa.svg)](https://www.npmjs.com/package/eslint-config-indoqa)

## Usage

Depend on eslint-config-indoqa and make sure peer dependecies are available:

```
"dependencies" :{ 
    "eslint-config-indoqa": "<version>",  // this config, including airbnb
    "babel-eslint": "5.0.0",              // used for parsing
    "eslint": "2.2.0",                    // eslint v2 -> used by editor
    "gulp-eslint": "2.0.0"                // to make sure 'gulp eslint' also uses eslint v2
  },
```

Point to 'indoqa' in .eslintrc. No further configuration needed.

```
{
  "extends" : ["indoqa"]
}
```