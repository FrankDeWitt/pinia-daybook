module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "always"
    }]
  }
};