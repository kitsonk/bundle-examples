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
