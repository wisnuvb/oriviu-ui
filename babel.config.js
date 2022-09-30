module.exports = {
  presets: [
    ["@babel/preset-env", { modules: false }],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    ["@babel/plugin-proposal-class-properties", { loose: false }],
    "@babel/plugin-syntax-dynamic-import",
  ],
};
