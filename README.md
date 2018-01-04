# Luka Website
 
Public website for Luka.

## Requirements

* Recent version of *node*. It is recommend to install *node* using  [nvm](https://github.com/creationix/nvm). Node is required for frontend tooling.

## Getting started

1. Clone the repository (e.g. to `/src/luka-website/`).
1. Run `npm install` to install front-end tooling dependencies.
1. Run `npm start` to watch for CSS changes.
1. Navigate to [localhost:5852](http://localhost:5852) (`luka` in T9) to view the homepage.

## Preparing production build

Run `npm run build` to generate a production build (minified CSS and JS with source maps).

## CSS

CSS located in `src/index.css` is processed using [PostCSS](https://github.com/postcss/postcss). Next to [autoprefixing](https://github.com/postcss/autoprefixer) and compression (with [css-nano](http://cssnano.co/)) the following PostCSS plugins are used:

* [postcss-nested](https://github.com/postcss/postcss-nested): unwrap nested rules like how Sass does it
* [postcss-import](https://github.com/postcss/postcss-import): inline import rules content
* [postcss-sassy-mixins](https://github.com/andyjansson/postcss-sassy-mixins): SASS style mixins
* [postcss-simple-vars](https://github.com/postcss/postcss-simple-vars): SASS style variables
* [postcss-pixrem](https://github.com/robwierzbowski/node-pixrem): generate pixel fallbacks for rem units

PostCSS output is located in `dist/index.css`.  
