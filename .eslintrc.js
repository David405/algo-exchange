module.exports = {
  env: {
    browser: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 9,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "no-console": 0,
    "no-empty": 0,
    " no-irregular-whitespace": 0,
    "react/prop-types": 0,
    "no-unused-vars": 1
  }
};
