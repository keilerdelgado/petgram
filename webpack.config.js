const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const path = require('path')

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath:'/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new WebpackPwaManifest({
      filename: 'manifest.webmanifest',
      name: 'Pettagram - Tu app social de mascotas',
      short_name: 'Pettagram',
      description: 'Con Petgram puedes encontrar y subir fotos de animales domésticos.',
      filename: 'manifest.webmanifest',
      filename: 'manifest.webmanifest',
      start_url: '/',
      scope: '/',
      background_color: '#ffffff',
      theme_color: '#2196f3',
      crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve(__dirname,'src/assets/img/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
          destination: path.join('Icons'),
          ios: true,
        },
        {
          src: path.resolve(__dirname,'src/assets/img/icon.png'),
          size: '1024x1024', // you can also use the specifications pattern
          destination: path.join('Icons'),
          ios: true,
        },
        {
          src: path.resolve(__dirname,'src/assets/img/icon.png'),
          size: '1024x1024',
          purpose: 'maskable',
          destination: path.join('Icons'),
          ios: true
        }
      ]
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern : new RegExp('https://(res.cloudinary.com|images.unspash.com)'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern : new RegExp('https://petgram-frontend-ig-clone.vercel.app/'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
        }
      }
    ]
    })
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }]
  }
}
