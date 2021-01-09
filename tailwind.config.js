module.exports = {

  purge: {
    content: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx",'./src/**/*.html'],
    preserveHtmlElements: true,
  } ,
  theme: {
    fontFamily: {
      mgblack: ['Circular Std Black'],
      mgbold: ['Circular Std Bold'],
      mgmedium: ['Circular Std Medium'],
      mgbook: ['Circular Std Book'],
      mgannotated: ['Reenie Beanie']
    },
    extend: {
      colors: {
        naranja: '#f25c4a',
        negro: '#000000',
        blanco: '#ffffff'
      },
      fontSize: {
        superbig: '6.2rem'
      }
    },
    variants: {
      visibility: ['responsive', 'hover', 'focus', 'active'],
    },
  }
}
