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

## Working with the project

### Setup

Clone the project and install it's dependencies

```sh
git clone https://github.com/tlaanemaa/tinioc-example.git
cd tinioc-example
npm install
```

### Starting

The project will be rebuilt automatically every time it is started so you don't have to worry about that

```sh
npm start
```

### Testing & linting

There's not a lot of tests here but the ones that are can be run like this

```sh
npm test
```

There's also ESLint which can be run like so

```sh
npm run lint
```
