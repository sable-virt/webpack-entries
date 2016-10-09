# webpack-entries

webpack glob entry

```
npm i webpack-entries --save-dev
```

webpack.config.js
```
var entries = require('webpack-entries');
module.exports = {
    entry: entries('./src/js/*.js',true)
};
```

entries(pattern,multiple):(Array|Object)

- pattern(string): glob pattern
- multiple(boolean): multiple entry points object

## example

```
var entries = require('webpack-entries');
entries('./src/js/*.js');
```
↓
```
[
    './src/js/a.js',
    './src/js/b.js'
]
```

```
var entries = require('webpack-entries');
entries('./src/js/*.js',true);
```
↓
```
{
    a: './src/js/a.js',
    b: './src/js/b.js'
}
```

```
var entries = require('webpack-entries');
entries('./src/**/*.js',true);
```
↓
```
{
    'js/a': './src/js/a.js',
    'js/b': './src/js/b.js'
}
```