declare module '*.png';
declare module '*.svg';
declare module '@env' {
  export const NODE_ENV: string;
  export const GOOGLE_ID: string;
  export const API_URI: string;
  export const DSN_SENTRY_URI: string;
  // export = {NODE_ENV, GOOGLE_ID, API_URI, DSN_SENTRY_URI};
}
declare module 'react-native-toast-message';
