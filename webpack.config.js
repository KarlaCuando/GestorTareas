const path = require('path');

module.exports = {
    entry: './src/index.js', //Punto de estrada de mi aplicación
    output: {
        filename: 'bundle.js', //Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), // Carpeta de salida
    },
    module: {
        rules: [
            {
            test:/\.css$/, //Regex para identificar archivos Css
            use: ['style-loader', 'css-loader'], //Loaders para procesar archivo
            },
            {
                test: /\.js$/, //REGEX (expresion regular) para identificar archivos JS
                exclude: /node_modules/, //Excluir la carpeta node_modules
                use: {
                    loader: 'babel-loader', //Loader para convertir JS moderno al JS mas compatible
                    options: {
                        presets: ['@babel/preset-env']
                    },
                },
            },
        ],
    },
    devtool: 'source-map', //Genera source maps para facilitar la depuración 
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), //Carpeta del que correrá el servidor
        compress: true, //Habilitar compresión gzip
        port: 9000, //Puerto del servidor de desarrollo 
    },
};