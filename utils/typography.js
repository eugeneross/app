function font(type, weight) {
  return `
    @font-face {
      font-family: ${type};
      font-style: normal;
      font-weight: ${weight};
      src:
          url('../static/fonts/${type}.woff2') format('woff2'),
          url('../static/fonts/${type}.woff') format('woff'),
          url('../static/fonts/${type}.ttf') format('truetype'),
          url('../static/fonts/${type}.eot') format('embedded-opentype');
  `

}

export default font
