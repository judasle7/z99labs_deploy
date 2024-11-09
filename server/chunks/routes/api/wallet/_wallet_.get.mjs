import { c as defineEventHandler, g as getRouterParam } from '../../../_/nitro.mjs';
import { F as FETCH_API } from '../../../_/fetchApi.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'node:path';
import 'axios';

const _wallet__get = defineEventHandler(async (event) => {
  const wallet = getRouterParam(event, "wallet") || "";
  const resp = await FETCH_API("SEARCH", { wallet });
  return resp.data;
});

export { _wallet__get as default };
//# sourceMappingURL=_wallet_.get.mjs.map
