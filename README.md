# Luka Website
 
Public website for Luka.

## Requirements

* Recent version of *node*. It is recommend to install *node* using  [nvm](https://github.com/creationix/nvm). Node is required for frontend tooling.

## Getting started

1. Clone the repository (e.g. to `/src/luka-website/`).
1. Run `npm install` to install front-end tooling dependencies.
1. Run `npm run build` to generate CSS for the first time.
1. Run `npm start` to watch for HTML/CSS changes.
1. Navigate to [localhost:5852](http://localhost:5852) (`luka` in T9) to view the homepage.

## Preparing production build

Run `npm run build` to generate a production build (minified CSS and JS with source maps).

## CSS

CSS is processed in 2 steps. In the first step, SASS located in `src/index.scss` is processed using [node-sass](https://github.com/sass/node-sass) to allow for features such as nesting, variables, mixins and includes. SASS output is located in `dist/index.pcss`.

In the second step, [PostCSS](https://github.com/postcss/postcss) picks up the SASS output and adds vendor prefixes (using [autoprefixing](https://github.com/postcss/autoprefixer)) and pixel fallbacks for rem-units ([postcss-pixrem](https://github.com/robwierzbowski/node-pixrem)). PostCSS output is located in `dist/index.css`.  

When generating a production build (using `npm run build`), PostCSS also compresses the output using [css-nano](http://cssnano.co/).


