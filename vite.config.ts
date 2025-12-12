import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import legacy from '@vitejs/plugin-legacy';
import eslint from '@nabla/vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    server: {
      host: '0.0.0.0',
      port: 8080,
      https: false,
      allowedHosts: true,
      cors: {
        origin: '*',
        credentials: false,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
      },
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With'
      }
    },
    base: './',
    plugins: [
      eslint(), 
      vue(),
      vueJsx(),
      legacy({
        targets: ['defaults', 'not IE 11', 'Chrome >= 53', 'Android >= 6', 'iOS >= 11'],
        additionalLegacyPolyfills: ['core-js/stable', 'regenerator-runtime/runtime'],
      }),
    ],
    build: {
      outDir: 'dist',
      sourcemap: process.env.NODE_ENV !== 'production',
      rollupOptions: {
        output: {
          hashCharacters: 'hex'
        },
      },
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, '/src')
      }
    }
  };
});