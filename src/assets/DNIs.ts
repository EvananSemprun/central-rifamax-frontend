export const DNIs = {
  venezuela: {
    minLength: 2,
    maxLength: 10,
    exFormats: ["V-12345678", "J-123456781", "E-112112112"],
    regex: /^[VEJ]-\d{2,9}$/,
    abreviatures: [
      'V-',
      'E-',
      'J-'
    ],
    parseAbreviatures: [
      {
        label: 'Venezolano',
        value: 'V-'
      },
      {
        label: 'Jurídico',
        value: 'J-'
      },
      {
        label: 'Extranjero',
        value: 'E-'
      }
    ]
  },
  colombia: {},
  usa: {}
}