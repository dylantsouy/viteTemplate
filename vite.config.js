import { defineConfig } from 'vite'
import * as path from 'path';
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import vitePluginImp from 'vite-plugin-imp';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        svgr(),
        react(),
        vitePluginImp({
            optimize: true,
            libList: [
                {
                    libName: 'antd',
                    libDirectory: 'es',
                    style: (name) => `antd/es/${name}/style`, // import antd style
                },
            ],
        }),
    ],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: path.resolve(__dirname, 'src'),
            },
        ],
    },
    define: {
        'process.env': process.env
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true, // support inline JavaScript for antd less
            },
        },
    },
})
