/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RIFAMAX_URL_BASE: string;
  readonly VITE_X100_URL_BASE: string;
  readonly VITE_DEV_URL_BASE: string;
  readonly VITE_WS_BASE: string;
  readonly INTEGRATION_SECRET_CDA: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}