module.exports = {
    entry: [ "@babel/polyfill", "./src/index.js"], // Arquivo de entrada
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};