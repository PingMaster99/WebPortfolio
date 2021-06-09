module.exports = {

  mode: 'development',
  devServer: {
    contentBase: 'dist',
  },
  module: {
    rules: [
      {
        test: /.(jsx?)$/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {

        test: /\.svg$/,

        use: [

          {

            loader: 'svg-url-loader',

            options: {

              limit: 10000,

            },

          },

        ],

      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],


  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
}


