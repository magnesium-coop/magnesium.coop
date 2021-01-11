module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  },
  purge: {
    preserveHtmlElements: false,
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    options: {
      keyframes: true,
      fontFace: true,
    },
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
