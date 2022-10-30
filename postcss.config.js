module.exports = {
  plugins: [
    require('@csstools/postcss-oklab-function')({
      subFeatures: { displayP3: false },
    }),
    require('cssnano')({}),
  ],
}
