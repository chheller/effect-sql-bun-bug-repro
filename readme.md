# @effect/sql bug reproduction for bun

## Versions
```
bun: 1.1.27
effect: 3.2.7
@effect/sql: 1.11.0
@effect/schema: 0.72.3
```

## Run
```sh
bun i
bun run index.ts
```

## Expected Results
```
No output, exit code 0
```

## Actual Results
```
❯ bun run index.ts
166 |  */
167 | export const FieldOption = /*#__PURE__*/ fieldEvolve({
168 |   select: Schema.OptionFromNullOr,
169 |   insert: Schema.OptionFromNullOr,
170 |   update: Schema.OptionFromNullOr,
171 |   json: /*#__PURE__*/ Schema.optionalWith({
                                   ^
TypeError: Schema.optionalWith is not a function. (In 'Schema.optionalWith({
    as: "Option"
  })', 'Schema.optionalWith' is undefined)
      at /home/chheller/projects/effect-sql-bun-repro/node_modules/@effect/sql/dist/esm/Model.js:171:30

Bun v1.1.27 (Linux x64)
```

## Notes
This is fixed in 0.11.1, though the changes introduced shouldn't have any impact on the runtime behavior of the library