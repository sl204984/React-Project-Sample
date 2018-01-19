module.exports = {
    // 入口文件
    entry: __dirname + "/src/index.tsx",
    // 入口文件对应的出口文件
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    // devtool共有四种模式：
    // "source-map": 在一个单独文件中产生一个完整且功能完整的文件，有最好的source map，但是会减慢打包速度
    // "cheap-module-source-map": 在一个单独文件中生成一个不带列映射的map，浏览器开发者工具只能对应到具体的行，不能对应到具体的列，调试不便
    // "eval-source-map": 生成一个干净完整的source map。开发阶段使用
    // "cheap-module-eval-source-map": 最快生成source map的方法，没有映射
    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },

    module: {
        rules: [
            // jsx? loader
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: "babel-loader"
                    },
                    {
                        loader: "source-map-loader"
                    }
                ],
                exclude: /node_modules/
            },
            // tsx? loader
            { 
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            // 
            {
                test: /\.(css|less)$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            }
        ]
      },

    plugins: [],
    
}