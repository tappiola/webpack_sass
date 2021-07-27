## Create JS file

Create `src/index.js` with any ES6+ code.

## Install babel

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Here are the main things Babel can do for you:

- Transform syntax
- Polyfill features that are missing in your target environment (through a third-party polyfill such as core-js)

Run `npm install --save-dev @babel/core @babel/cli @babel/preset-env`

Add babel config: `babel.config.json`

Check it by running `npx babel src/ --out-dir lib`

## Install webpack

Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser.

Run `npm install webpack webpack-cli --save-dev`

Add webpack config: `webpack.config.js`

Run webpack: `npx webpack --mode development --config webpack.config.js`

## Connect webpack and babel

Install babel loader: `npm install --save-dev babel-loader`

Install core-js of the same version as in babel config: `npm install --save-dev core-js@3.6.5`

## Inject CSS styles using webpack

Install loaders: `npm install --save-dev style-loader css-loader`

## Install SASS

Install SASS globally: `npm install -g sass`

Try to run SASS against scss file: `sass src/index.scss index.css`

## Connect webpack and SASS

Install SASS loader: `npm install --save-dev sass-loader`

## Install mini-css webpack plugin

Run: `npm i --save-dev mini-css-extract-plugin`

## Install HTML webpack plugin

It injects JS and CSS bundles into HTML template file.

Run: `npm install --save-dev html-webpack-plugin`

## React

- Run `npm install --save react react-dom`
- Run `npm install --save-dev react @babel/react`
- add `@babel/react` to babel config presets

## React lazy loading

- install `@babel/plugin-syntax-dynamic-import`
- add `@babel/plugin-syntax-dynamic-import` to babel config plugins
- adjust webpack config output name
```
output: {
    filename: '[name].bundle.js', 
}
```
- use Suspense and Lazy in your code

## How to enable/disable sourcemaps

`devtool: 'source-map'`  /
  `devtool: 'false'`,
  
## How to enable/disable code obfuscation
```
  optimization: {
    minimize: false
  },
```
