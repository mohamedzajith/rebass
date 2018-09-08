module.exports = {
  presets: [
    '@babel/react'
  ],
  env: {
    test: {
      presets: [
        '@babel/env'
      ]
    },
    cjs: {
      presets: [
        [ '@babel/env', {
          targets: {
            node: true
          }
        } ]
      ]
    },
    es: {
      presets: [
        [ '@babel/env', {
          loose: true,
          modules: false
        } ]
      ]
    },
    emotion: {
      presets: [
        [ '@babel/env', {} ]
      ],
      plugins: [
        [ 'transform-rename-import', {
          replacements: [
            {
              original: '^styled-components$',
              replacement: 'react-emotion'
            }
          ]
        } ]
      ]
    }
  }
}