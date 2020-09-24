const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './test/lib/index.js',
    mode: "development",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,"dist"),
    },
    target: 'node', // in order to ignore built-in modules like path, fs, etc.
    externals: [nodeExternals()]
};