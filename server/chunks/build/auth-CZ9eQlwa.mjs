import { d as defineNuxtRouteMiddleware } from './server.mjs';
import 'vue';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'node:path';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue/server-renderer';

const auth = defineNuxtRouteMiddleware((to, from) => {
  return;
});

export { auth as default };
//# sourceMappingURL=auth-CZ9eQlwa.mjs.map
