const path = require('path');

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', //실서비스 : production
    devtool: 'eval', //빠르게하겠다는것
    resolve: {
        extensions: ['.js', '.jsx']
    },
    //entry랑 output이 젤중요
    entry: {
        app: ['./client'], //WordRelay.jsx 는 client에서 불러오기때문에 여기서 불러올 필요 없음
    }, //입력

    module: [{
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties'],
            },
        }],
    }],

    output: {
        path: path.join(__dirname, 'dist'), // c:\users\... 현재이름에 dist를 붙인다.
        filename: 'app.js'
    } //출력
};