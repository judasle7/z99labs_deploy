const client_manifest = {
  "_BbRkUZcB.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "BbRkUZcB.js",
    "name": "useConfig",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "assets/app.jpg": {
    "resourceType": "image",
    "prefetch": true,
    "mimeType": "image/jpeg",
    "file": "app.CNVgg_eC.jpg",
    "src": "assets/app.jpg"
  },
  "middleware/auth.ts": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "DlTSF84A.js",
    "name": "auth",
    "src": "middleware/auth.ts",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "node_modules/nuxt/dist/app/entry.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "CNrwSWa_.js",
    "name": "entry",
    "src": "node_modules/nuxt/dist/app/entry.js",
    "isEntry": true,
    "dynamicImports": [
      "middleware/auth.ts"
    ],
    "_globalCSS": true
  },
  "pages/index.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "B4O0MlXK.js",
    "name": "index",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "_BbRkUZcB.js",
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "pages/login.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "DPIn1R9y.js",
    "name": "login",
    "src": "pages/login.vue",
    "isDynamicEntry": true,
    "imports": [
      "_BbRkUZcB.js",
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "pages/token.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "Cn6juPNY.js",
    "name": "token",
    "src": "pages/token.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  }
};

export { client_manifest as default };
//# sourceMappingURL=client.manifest.mjs.map
