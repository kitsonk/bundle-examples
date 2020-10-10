# bundle examples

## Example 1

*Expected*

```
❯ deno run example1.ts
Module { a: "a", Symbol(Symbol.toStringTag): "Module" }
```

*Actual*

```
❯ deno run example1.bundle.js
a
```

At least it should be `{ a: "a" }`, instead we just get `"a"`.

## Example 2

This just overflows the stack.

## Example 3

*Expected*

```
> deno run example3.ts
Check file:///Users/kitsonk/github/bundle-examples/example3.ts
{ a: "a" }
```

*Actual*

```
❯ deno run example3.bundle.js
error: Uncaught ReferenceError: a is not defined
    a
    ^
    at file:///Users/kitsonk/github/bundle-examples/example3.bundle.js:2:5
```

## Example 4

*Expected*

```
❯ deno run --allow-read example4.ts
Check file:///Users/kitsonk/github/bundle-examples/a.ts
Module { a: "a", Symbol(Symbol.toStringTag): "Module" }
```

*Actual*

```
❯ deno bundle example4.ts example4.bundle.js
Bundle file:///Users/kitsonk/github/bundle-examples/example4.ts
error: failed to bundle
```

## Example 5

*Expected*

```
❯ deno run example5.ts
Check file:///Users/kitsonk/github/bundle-examples/example5.ts
a
```

*Actual*

```
❯ deno run example5.bundle.js
error: Uncaught ReferenceError: a is not defined
console.log(a);
            ^
    at file:///Users/kitsonk/github/bundle-examples/example5.bundle.js:1:13
```

## Example 6

*Expected*

```
❯ deno run example6.ts                      
Check file:///Users/kitsonk/github/bundle-examples/example6.ts
error: Uncaught AssertionError: ooops
    throw new AssertionError(msg);
          ^
    at assert (asserts.ts:152:11)
    at example6.ts:3:1
```

*Actual*

```
❯ deno run example6.bundle.js               
error: Uncaught ReferenceError: AssertionError is not defined
        throw new AssertionError(msg);
        ^
    at assert (file:///Users/kitsonk/github/bundle-examples/example6.bundle.js:97:9)
    at file:///Users/kitsonk/github/bundle-examples/example6.bundle.js:100:1
```

## Example 7

```
false file:///Users/kitsonk/github/bundle-examples/f.ts
true file:///Users/kitsonk/github/bundle-examples/example7.ts
```