# tinioc-example

[![Node.js CI](https://github.com/tlaanemaa/tinioc-example/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/tlaanemaa/tinioc-example/actions/workflows/node.js.yml)

_An example micro-service showcasing [tinioc](https://github.com/tlaanemaa/tinioc)_

## Points of interest

- [Bindings](https://github.com/tlaanemaa/tinioc-example/blob/main/src/bindings.ts)
- [Container](https://github.com/tlaanemaa/tinioc-example/blob/main/src/container.ts)
- [Using the components outside of the container - in a controller](https://github.com/tlaanemaa/tinioc-example/blob/main/src/controllers/employees.ts)
- Async components
  - [Implementation](https://github.com/tlaanemaa/tinioc-example/blob/main/src/services/randomInteger.ts)
  - [Injection](https://github.com/tlaanemaa/tinioc-example/blob/main/src/clients/employees/object-literal-based.ts#L34)
- Different ways of implementing the same component
  - [Class based](https://github.com/tlaanemaa/tinioc-example/blob/main/src/clients/employees/class-based.ts)
  - [Object literal based](https://github.com/tlaanemaa/tinioc-example/blob/main/src/clients/employees/object-literal-based.ts)
- [Singleton component implementation](https://github.com/tlaanemaa/tinioc-example/blob/main/src/database/numbersDB.ts)
- [Testing](https://github.com/tlaanemaa/tinioc-example/blob/main/src/services/employees.spec.ts)
