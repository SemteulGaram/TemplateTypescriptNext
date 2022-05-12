module.exports = {
  "presets": [
    [
      "next/babel",
      {
        "styled-jsx": {
          "plugins": ["@styled-jsx/plugin-sass"]
        }
      },
    ],
  ],
  "plugins": [
    [
      "module-resolver", {
        "root": ["."],
        "alias": {
          // "test": "./test",
          // "underscore": "lodash",
        },
        "extensions": [".js", ".jsx", ".es", ".es6", ".mjs", ".ts", ".tsx"],
      },
    ],
  ],
};
