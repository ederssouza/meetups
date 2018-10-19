# Métodos de array - Fernando Daciuk

## `array.every()`

> Versão JavaScript: ECMAScript 5

O método `every()` testa se todos os elementos do array passam pelo teste implementado pela função fornecida.

```js
// notação
array.every(function(currentValue, index, arr), thisValue)
```

|argumento|obrigatório|descrição|
|:-|:-|:-|
|`currentValue`|sim|O valor do elemento atual|
|`index`|não|O índice da matriz do elemento atual|
|`arr`|não|O objeto de matriz ao qual o elemento atual pertence|
|`thisValue`|não|Um valor a ser passado para a função a ser usada como seu valor `this`. Se este parâmetro estiver vazio, o valor `undefined` será passado como seu valor `this`|

## `arr.filter()`

> Versão JavaScript: ECMAScript 5

O método `filter()` cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

```js
// notação
array.filter(function(currentValue, index, arr), thisValue)
```

|argumento|obrigatório|descrição|
|:-|:-|:-|
|`currentValue`|sim|O valor do elemento atual|
|`index`|não|O índice da matriz do elemento atual|
|`arr`|não|O objeto de matriz ao qual o elemento atual pertence|
|`thisValue`|não|	Um valor a ser passado para a função a ser usada como seu valor `this`. Se este parâmetro estiver vazio, o valor `undefined` será passado como seu valor `this`|

## `arr.map()`

> Versão JavaScript: ECMAScript 5

O método `map()` invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

```js
// notação
array.map(function(currentValue, index, arr), thisValue)
```

|argumento|obrigatório|descrição|
|:-|:-|:-|
|`currentValue`|sim|O valor do elemento atual|
|`index`|não|O índice da matriz do elemento atual|
|`arr`|não|O objeto de matriz ao qual o elemento atual pertence|
|`thisValue`|não|Um valor a ser passado para a função a ser usada como seu valor `this`. Se este parâmetro estiver vazio, o valor `undefined` será passado como seu valor `this`|

## `arr.reduce()`

> Versão JavaScript: ECMAScript 5

O método `reduce()` executa uma função reducer (provida por você) para cada membro do array, resultando num único valor de retorno.

```js
// notação
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
```

|argumento|obrigatório|descrição|
|:-|:-|:-|
|`total`|sim|The initialValue, or the previously returned value of the function|
|`currentValue`|sim|O valor do elemento atual|
|`currentIndex`|não|O índice da matriz do elemento atual|
|`arr`|não|O objeto de matriz ao qual o elemento atual pertence|
|`initialValue`|não|A value to be passed to the function as the initial value|

## `arr.reduceRight()`

> Versão JavaScript: ECMAScript 5

O método `reduceRight()` aplica à uma função um acumulador e cada valor do array (da direita para esquerda) é reduzido para um valor único.

```js
// notação
array.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)
```

|argumento|obrigatório|descrição|
|:-|:-|:-|
|``|sim||
|`total`|sim|The initialValue, or the previously returned value of the function|
|`currentValue`|sim|O valor do elemento atual|
|`currentIndex`|não|O índice da matriz do elemento atual|
|`arr`|não|O objeto de matriz ao qual o elemento atual pertence|
|`initialValue`|não|A value to be passed to the function as the initial value|

## `arr.some()`

> ECMAScript 3

O método `some()` testa se alguns dos elementos no array passam no teste implementado pela função atribuída.

```js
// notação
array.some(function(currentValue, index, arr), thisValue)
```

|argumento|obrigatório|descrição|
|:-|:-|:-|
|`currentValue`|sim|O valor do elemento atual|
|`index`|não|O índice da matriz do elemento atual|
|`arr`|não|O objeto de matriz ao qual o elemento atual pertence|
|`thisValue`|não|	Um valor a ser passado para a função a ser usada como seu valor `this`. Se este parâmetro estiver vazio, o valor `undefined` será passado como seu valor `this`|
