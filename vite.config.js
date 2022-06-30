import { defineConfig } from 'vite'
import * as path from 'path';
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    base:"/viteApp/",
    plugins: [
        svgr(),
        react()
    ],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: path.resolve(__dirname, 'src'),
            },
        ],
    },
})
