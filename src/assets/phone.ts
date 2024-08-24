export const phone = {
  venezuela: {
    countryCode: '+58',
    areasCode: [
      {
        value: '412',
        label: '0412',
        operator: 'Digitel'
      },
      {
        value: '414',
        label: '0414',
        operator: 'Movistar',
      },
      {
        value: '424',
        label: '0424',
        operator: 'Movistar',
      },
      {
        value: '416',
        label: '0416',
        operator: 'Movilnet',
      }
    ]
  },
  global: { 
    regex: /^\+\d{1,3}\ \(\d{3,3}\) \d{3,3}-\d{4,4}$/, // +58 (412) 123-1234
    phoneRegex: /^\(\d{3,3}\) \d{3,3}-\d{4,4}$/, // (412) 123-1234
    systemCountries: [
      {
        value: '+58',
        label: '+58'
      },
      {
        value: '+57',
        label: '+57'
      },
      {
        value: '+1',
        label: '+1'
      }
    ]
  }
}