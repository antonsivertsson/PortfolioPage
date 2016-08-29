module.exports = {
    entry: './app/index.jsx',
    output: {
        path: __dirname + '/bundle',
        filename: 'bundle.js',
        publicPath: 'http://localhost:8090/assets'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.less$/,
                loaders: ['style', 'css', 'less']
            },
            {
              test: /\.css$/,
              loaders: ['style', 'css']
            }
        ]
    },
    externals: {
        'react': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    }
}