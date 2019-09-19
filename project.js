const isProduction = process.env.NODE_ENV === 'production';

module.exports = require("marko-starter").projectConfig({
  name: "marko-starter-demo", // Optional, but added here for demo purposes
  lassoConfig: {
    plugins: [
      'lasso-marko',
      {
        plugin: 'lasso-postcss',
        config: {
          map: isProduction ? false : 'inline',
        },
      },
    ],
  },
});
