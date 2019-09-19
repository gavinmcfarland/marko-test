module.exports = {
  plugins: {
    'postcss-import': {
      path: ['src', 'node_modules']
    },
    'postcss-nested': {},
    'postcss-extend-rule': {},
    'autoprefixer': {},
    'tailwindcss': {}
  }
};
