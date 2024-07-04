import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
        base: "/delfos-web/",
        plugins: [vue(),
        {
            name: "configure-response-headers",
            configureServer: (server) => {
            server.middlewares.use((_req, res, next) => {
                res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
                res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
                next();
            });
            },
        },],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        }
    };
});
