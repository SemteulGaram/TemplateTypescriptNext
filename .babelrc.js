module.exports = {
  "presets": [
    [
      "next/babel",
      {
        "preset-react": {
          "runtime": "automatic",
          "importSource": "@emotion/react",
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
      },
    ],
    [
      "@emotion",
      {
        // sourceMap is on by default but source maps are dead code eliminated in production
        "sourceMap": true,
        "autoLabel": "dev-only",
        "labelFormat": "[local]",
        "cssPropOptimization": true,
      },
    ],
  ],
};
