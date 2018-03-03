const path = require('path');

function resolve (dir) {
  return path.join(__dirname, './src', dir)
}

module.exports = {
    entry: {
        pm: './src/main.js',
    },

    output: {
        path: path.resolve( __dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js',
    },

    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          '@components': resolve('components'),
          '@directives': resolve('directives'),
          '@helpers': resolve('helpers'),
          '@router': resolve('router'),
          '@store': resolve('store'),
          '@src': resolve('')
        }
    },

    module: {
        rules: [
            // doc url https://vue-loader.vuejs.org/en/options.html#loaders
            {   
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: 'babel-loader'
                    }
                },
            },
            {   
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets:[ 'es2015', 'stage-2' ]
                }
             
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                exclude: /node_modules/,
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
}
