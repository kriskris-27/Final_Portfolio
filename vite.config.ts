import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { splitVendorChunkPlugin } from 'vite'
import { compression } from 'vite-plugin-compression2'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        splitVendorChunkPlugin(),
        compression({
            algorithm: 'gzip',
            exclude: [/\.(br)$/, /\.(gz)$/],
        }),
        compression({
            algorithm: 'brotliCompress',
            exclude: [/\.(br)$/, /\.(gz)$/],
        }),
        visualizer({
            filename: 'dist/stats.html',
            open: true,
            gzipSize: true,
            brotliSize: true,
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: (id) => {
                    if (id.includes('node_modules')) {
                        if (id.includes('react') || id.includes('react-dom')) {
                            return 'react-vendor'
                        }
                        if (id.includes('framer-motion')) {
                            return 'motion-vendor'
                        }
                        if (id.includes('lucide-react')) {
                            return 'icons-vendor'
                        }
                        return 'vendor'
                    }
                },
            },
        },
        chunkSizeWarningLimit: 1000,
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
                pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
            },
            format: {
                comments: false,
            },
        },
        cssCodeSplit: true,
        cssMinify: true,
        sourcemap: false,
    },
    optimizeDeps: {
        include: ['react', 'react-dom'],
    },
})
