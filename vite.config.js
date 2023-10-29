import { defineConfig } from 'vite';
import VitePluginBrowserSync from 'vite-plugin-browser-sync'

// import eslint from 'vite-plugin-eslint';

export default defineConfig({
  publicDir: 'public',
  root: './public',
  server: {
    host: true,
    // open:true,
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
        output: {
          entryFileNames: `assets/js/[name].js`,
          chunkFileNames: `assets/js/[name].js`,
          assetFileNames: (e) => {
            const ext = e.name.match( /[a-zA-Z]{1,}$/g );
            if (ext[0] === "css") {
                return `assets/[ext]/style.[ext]`
            } else if (ext[0] !== "html") {
                return `assets/img/[name].[ext]`
            } else {
                return `assets/[ext]/[name].[ext]`
            }     
          }
        }
      }
  },
  plugins: [
    // eslint({
    //   cache: false,
    //   fix: true,
    // }),
    VitePluginBrowserSync({
        bs: {
          ui: {
            port: 8080
          },
          notify: false
        }
    }),
  ],
});