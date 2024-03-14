import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';
import { siteData, pagesData } from './site.config';
import viteImagemin from 'vite-plugin-imagemin';
// import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';

export default defineConfig({
  server: {
    open: true,
  },
  root: siteData.root,
  build: {
    outDir: '../dist',
    target: 'es2015',
    emptyOutDir: true,
    rollupOptions: {
      // external: ['jquery'],
      input: {
        main: resolve(__dirname, siteData.root, 'index.html'),
        service: resolve(__dirname, siteData.root, 'service.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  plugins: [
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
    handlebars({
      partialDirectory: resolve(__dirname, siteData.root, '_partials'),
      context(pagePath) {
        return pagesData[pagePath];
      },
    }),
    // createSvgIconsPlugin({
    //   // Specify the icon folder to be cached
    //   iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
    //   // Specify symbolId format
    //   symbolId: 'icon-[dir]-[name]',
    //   /**
    //    * custom insert position
    //    * @default: body-last
    //    */
    //   /**
    //    * custom dom id
    //    * @default: __svg__icons__dom__
    //    */
    //   customDomId: '__svg__icons__dom__',
    // }),
  ],
});
