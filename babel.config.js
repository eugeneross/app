module.exports = function (api) {

  const apiChoice = api.cache.never();
  
  const presets = [
    'next/babel'
  ];

  const plugins = [
    ['babel-plugin-styled-components',
      {
        "ssr": true,
        "displayName": true,
        "preprocess": false
      }],
    ["module-resolver", {
      "root": ["."],
      "alias": {
        "styles": "./styles",
        "@containers": "./containers",
        "@components": "./components",
        "@elements": "./elements",
        "@blocks": "./blocks",
        "@utils": "./utils",
      },
      "cwd": "babelrc"
    }]
  ];

  return {
    presets,
    plugins
  };
}
