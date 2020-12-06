const postcssPresetEnv = require(`postcss-preset-env`)
const postcssImport = require('postcss-import')
const tailwind = require('tailwindcss')

module.exports = () => ({
  plugins: [
    postcssImport(),
    tailwind,
    postcssPresetEnv({
      stage: 1,
    }),
  ],
})
