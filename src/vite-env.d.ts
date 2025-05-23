/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STYTCH_PUBLIC_TOKEN: string;
  readonly STYTCH_PROJECT_ID: string;
  readonly STYTCH_SECRET: string;
  readonly STYTCH_CLIENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
