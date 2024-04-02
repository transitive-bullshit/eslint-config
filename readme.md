# Forked from `@remix-run/eslint-config`

My personal ESlint config used for all projects.

## Installation

First, install this package along with ESLint in your project. **This package requires at least version 8.1 of ESLint**

```sh
npm install -D eslint @fisch0920/eslint-config
```

Then create a file named `.eslintrc.js` in the root of the project/package:

```js filename=.eslintrc.js
module.exports = {
  extends: ['@fisch0920/eslint-config']
}
```

For Node-only projects (no React/browser code), use the `node` config:

```js filename=.eslintrc.js
module.exports = {
  extends: ['@fisch0920/eslint-config/node']
}
```

## License

MIT © [Travis Fischer](https://twitter.com/transitive_bs)
