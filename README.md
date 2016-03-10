To use in a specific project, follow these steps:

## package.json

Include eslint-config-indoqa and peer dependecies:

```
"dependencies" :{ 
    "eslint": "2.2.0",
    "eslint-config-airbnb": "3.1.0",
    "eslint-config-indoqa": "<version>",
    "eslint-plugin-import": "0.12.1",
    "eslint-plugin-react": "4.0.0"
  },
```

## .eslintrc

The only thing needed is to point to this config module.

```
{
  "extends" : ["indoqa"]
}
```