/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RIFAMAX_URL_BASE: string;
  readonly VITE_X100_URL_BASE: string;
  readonly VITE_DEV_URL_BASE: string;
  readonly VITE_WS_BASE: string;
  readonly VITE_DEV_WS_BASE: string;
  readonly INTEGRATION_API_CDA: string;
  readonly INTEGRATION_API_BETFM4: string;
  readonly INTEGRATION_BANCA_BETFM4: string;
  readonly INTEGRATION_SECRET_CDA: string;
  readonly INTEGRATION_SECRET_BETFM4: string;
  readonly CHROMATIC_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}