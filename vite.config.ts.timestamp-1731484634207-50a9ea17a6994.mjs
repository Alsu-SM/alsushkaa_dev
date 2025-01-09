// vite.config.ts
import { defineConfig } from "file:///C:/Users/Shareeva_AM/pers_proj/alsushkaa_dev/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Shareeva_AM/pers_proj/alsushkaa_dev/node_modules/@vitejs/plugin-react/dist/index.mjs";
import mcret from "file:///C:/Users/Shareeva_AM/pers_proj/alsushkaa_dev/node_modules/vite-plugin-mkcert/dist/mkcert.mjs";
import { VitePWA } from "file:///C:/Users/Shareeva_AM/pers_proj/alsushkaa_dev/node_modules/vite-plugin-pwa/dist/index.js";

// manifest.pwa.ts
var manifest = {
  registerType: "autoUpdate",
  injectRegister: "auto",
  includeAssets: ["favicon.ico"],
  devOptions: {
    enabled: true
  },
  manifest: {
    name: "alsushkaa.dev",
    short_name: "pwa",
    description: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
    theme_color: "white",
    background_color: "#f4f4f4",
    icons: [
      {
        src: "icons/144_144.png",
        type: "image/png",
        sizes: "144x144"
      },
      {
        src: "icons/192_192_maskable.png",
        type: "image/png",
        sizes: "192x192",
        purpose: "maskable"
      },
      {
        src: "icons/384_384_maskable.png",
        type: "image/png",
        sizes: "384x384",
        purpose: "maskable"
      },
      {
        src: "icons/512_512_maskable.png",
        type: "image/png",
        sizes: "512x512",
        purpose: "maskable"
      },
      {
        src: "icons/1024_1024_maskable.png",
        type: "image/png",
        sizes: "1024x1024",
        purpose: "maskable"
      }
    ]
  }
};
var manifest_pwa_default = manifest;

// vite.config.ts
var vite_config_default = defineConfig({
  server: {
    https: {}
  },
  plugins: [VitePWA(manifest_pwa_default), react(), mcret()],
  css: {
    modules: {
      generateScopedName: "[folder]_[local]__[hash:base64:5]"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAibWFuaWZlc3QucHdhLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcU2hhcmVldmFfQU1cXFxccGVyc19wcm9qXFxcXGFsc3VzaGthYV9kZXZcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFNoYXJlZXZhX0FNXFxcXHBlcnNfcHJvalxcXFxhbHN1c2hrYWFfZGV2XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9TaGFyZWV2YV9BTS9wZXJzX3Byb2ovYWxzdXNoa2FhX2Rldi92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCBtY3JldCBmcm9tICd2aXRlLXBsdWdpbi1ta2NlcnQnO1xuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSc7XG5pbXBvcnQgbWFuaWZlc3QgZnJvbSAnLi9tYW5pZmVzdC5wd2EnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuXHRzZXJ2ZXI6IHtcblx0XHRodHRwczoge30sXG5cdH0sXG5cdHBsdWdpbnM6IFtWaXRlUFdBKG1hbmlmZXN0KSwgcmVhY3QoKSwgbWNyZXQoKV0sXG5cdGNzczoge1xuXHRcdG1vZHVsZXM6IHtcblx0XHRcdGdlbmVyYXRlU2NvcGVkTmFtZTogJ1tmb2xkZXJdX1tsb2NhbF1fX1toYXNoOmJhc2U2NDo1XScsXG5cdFx0fSxcblx0fSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxTaGFyZWV2YV9BTVxcXFxwZXJzX3Byb2pcXFxcYWxzdXNoa2FhX2RldlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcU2hhcmVldmFfQU1cXFxccGVyc19wcm9qXFxcXGFsc3VzaGthYV9kZXZcXFxcbWFuaWZlc3QucHdhLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9TaGFyZWV2YV9BTS9wZXJzX3Byb2ovYWxzdXNoa2FhX2Rldi9tYW5pZmVzdC5wd2EudHNcIjtpbXBvcnQgeyBWaXRlUFdBT3B0aW9ucyB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSc7XG5cbmNvbnN0IG1hbmlmZXN0OiBQYXJ0aWFsPFZpdGVQV0FPcHRpb25zPiA9IHtcblx0cmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXG5cdGluamVjdFJlZ2lzdGVyOiAnYXV0bycsXG5cdGluY2x1ZGVBc3NldHM6IFsnZmF2aWNvbi5pY28nXSxcblx0ZGV2T3B0aW9uczoge1xuXHRcdGVuYWJsZWQ6IHRydWUsXG5cdH0sXG5cdG1hbmlmZXN0OiB7XG5cdFx0bmFtZTogJ2Fsc3VzaGthYS5kZXYnLFxuXHRcdHNob3J0X25hbWU6ICdwd2EnLFxuXHRcdGRlc2NyaXB0aW9uOiAnXHUwNDFFXHUwNDNGXHUwNDM4XHUwNDQxXHUwNDMwXHUwNDNEXHUwNDM4XHUwNDM1IFx1MDQzRlx1MDQ0MFx1MDQzOFx1MDQzQlx1MDQzRVx1MDQzNlx1MDQzNVx1MDQzRFx1MDQzOFx1MDQ0RicsXG5cdFx0dGhlbWVfY29sb3I6ICd3aGl0ZScsXG5cdFx0YmFja2dyb3VuZF9jb2xvcjogJyNmNGY0ZjQnLFxuXHRcdGljb25zOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHNyYzogJ2ljb25zLzE0NF8xNDQucG5nJyxcblx0XHRcdFx0dHlwZTogJ2ltYWdlL3BuZycsXG5cdFx0XHRcdHNpemVzOiAnMTQ0eDE0NCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRzcmM6ICdpY29ucy8xOTJfMTkyX21hc2thYmxlLnBuZycsXG5cdFx0XHRcdHR5cGU6ICdpbWFnZS9wbmcnLFxuXHRcdFx0XHRzaXplczogJzE5MngxOTInLFxuXHRcdFx0XHRwdXJwb3NlOiAnbWFza2FibGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0c3JjOiAnaWNvbnMvMzg0XzM4NF9tYXNrYWJsZS5wbmcnLFxuXHRcdFx0XHR0eXBlOiAnaW1hZ2UvcG5nJyxcblx0XHRcdFx0c2l6ZXM6ICczODR4Mzg0Jyxcblx0XHRcdFx0cHVycG9zZTogJ21hc2thYmxlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHNyYzogJ2ljb25zLzUxMl81MTJfbWFza2FibGUucG5nJyxcblx0XHRcdFx0dHlwZTogJ2ltYWdlL3BuZycsXG5cdFx0XHRcdHNpemVzOiAnNTEyeDUxMicsXG5cdFx0XHRcdHB1cnBvc2U6ICdtYXNrYWJsZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRzcmM6ICdpY29ucy8xMDI0XzEwMjRfbWFza2FibGUucG5nJyxcblx0XHRcdFx0dHlwZTogJ2ltYWdlL3BuZycsXG5cdFx0XHRcdHNpemVzOiAnMTAyNHgxMDI0Jyxcblx0XHRcdFx0cHVycG9zZTogJ21hc2thYmxlJyxcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1hbmlmZXN0O1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnVSxTQUFTLG9CQUFvQjtBQUM3VixPQUFPLFdBQVc7QUFDbEIsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsZUFBZTs7O0FDRHhCLElBQU0sV0FBb0M7QUFBQSxFQUN6QyxjQUFjO0FBQUEsRUFDZCxnQkFBZ0I7QUFBQSxFQUNoQixlQUFlLENBQUMsYUFBYTtBQUFBLEVBQzdCLFlBQVk7QUFBQSxJQUNYLFNBQVM7QUFBQSxFQUNWO0FBQUEsRUFDQSxVQUFVO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUEsSUFDWixhQUFhO0FBQUEsSUFDYixhQUFhO0FBQUEsSUFDYixrQkFBa0I7QUFBQSxJQUNsQixPQUFPO0FBQUEsTUFDTjtBQUFBLFFBQ0MsS0FBSztBQUFBLFFBQ0wsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDQyxLQUFLO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxTQUFTO0FBQUEsTUFDVjtBQUFBLE1BQ0E7QUFBQSxRQUNDLEtBQUs7QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLFNBQVM7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLFFBQ0MsS0FBSztBQUFBLFFBQ0wsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsU0FBUztBQUFBLE1BQ1Y7QUFBQSxNQUNBO0FBQUEsUUFDQyxLQUFLO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxTQUFTO0FBQUEsTUFDVjtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQ0Q7QUFFQSxJQUFPLHVCQUFROzs7QUQzQ2YsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsUUFBUTtBQUFBLElBQ1AsT0FBTyxDQUFDO0FBQUEsRUFDVDtBQUFBLEVBQ0EsU0FBUyxDQUFDLFFBQVEsb0JBQVEsR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQUEsRUFDN0MsS0FBSztBQUFBLElBQ0osU0FBUztBQUFBLE1BQ1Isb0JBQW9CO0FBQUEsSUFDckI7QUFBQSxFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
