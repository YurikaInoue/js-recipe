// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:vue/recommended"],
  plugins: ["eslint-plugin-html"],
  parserOptions: {
    ecmaVersion: 2018,
  },
  globals: {
    Vue: true,
  },
}
