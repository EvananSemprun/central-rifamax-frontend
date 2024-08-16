import '@testing-library/jest-dom';

declare global {
  var importMeta: {
    env: {
      VITE_X100_URL_BASE: string;
      // Añade cualquier otra variable de entorno que necesites mockear
    };
  };
}

globalThis.importMeta = {
  env: {
    VITE_X100_URL_BASE: 'https://just-for-tests.com',
  },
};