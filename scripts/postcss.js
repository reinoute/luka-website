// include depenencies (a-z)

const fs = require('fs');
const mkdirp = require('mkdirp');
const postcss = require('postcss');

// configure input, output and processors:

const inputFilename = 'dist/assets/index.pcss';
const outputDir = 'dist/assets/';
const outputFilename = 'dist/assets/index.css';

const processors = [
    require('pixrem'),       // adds pixel fallback before every rem value
    require('autoprefixer')  // vendor prefix for older browsers
];

if (process.env.NODE_ENV === 'production') {
    processors.push(require('cssnano'));    // minify css
}

// process input and write output to disk:

postcss(processors)
    .process(fs.readFileSync(inputFilename), {
        from: inputFilename,
        to: outputFilename.substr(outputDir.length), // file path relative to output dir
        map: { inline: false }
    })
    .then(writeOutput)
    .catch(err => handleError(err.message));


function writeOutput(result) {
    mkdirp(outputDir, (err) => {
        handleError(err);
    fs.writeFile(outputFilename, result.css, handleError);
    if (result.map) {
        fs.writeFile(`${outputFilename}.map`, result.map, handleError);
    }
});
}

function handleError(err) {
    if (err) {
        console.log(err);
        process.exit(1);
    }
}