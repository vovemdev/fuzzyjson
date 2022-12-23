## Overview of fuzzyJson

fuzzyJson - flatten or unflatten json data. Need of flattening JSON:- There are many reasons for the need of flattening JSON, such as for a better and more understandable view that is there are only key-value pairs are present without any nesting.

## Why?

fuzzyJson Objects extension to convert a nested data layer object into a new object with only one layer of key/value pairs.

```

## flatten

```

const jsonKey = require('fuzzyjson');

const json = jsonKey.flatten(

{

      json: {

         flatten: {

             deep: 100

      } },

      recursive: {

         level: {

            nested: true

       } }

    }

)

console.log(json);

```
## unflatten

```

const jsonKey = require('fuzzyjson');

const json = jsonKey.unflatten(

{

'json.flatten.deep': 100,

'recursive.level.nested': true

} )

console.log(json);

