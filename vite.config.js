import { defineConfig } from 'vite';
import mkcert     from 'vite-plugin-mkcert';
import injectHTML from 'vite-plugin-html-inject';

//localhost https server
export default defineConfig({
  server: {
    https: true,
    port: 443,
    host: 'lh.benmirkhah.com',
    origin: 'https://lh.benmirkhah.com',
  },
  plugins: [injectHTML(),mkcert()],
});
