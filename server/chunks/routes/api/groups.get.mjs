import { c as defineEventHandler } from '../../_/nitro.mjs';
import { F as FETCH_API } from '../../_/fetchApi.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'node:path';
import 'axios';

const groups_get = defineEventHandler(async (event) => {
  var _a, _b, _c;
  const [newGroup, degenGroup, safeGroup] = await Promise.all([
    FETCH_API("GROUP", { group: "new" }),
    FETCH_API("GROUP", { group: "degen" }),
    FETCH_API("GROUP", { group: "safe" })
  ]);
  const newGroupData = ((_a = newGroup == null ? void 0 : newGroup.data) == null ? void 0 : _a.length) > 0 ? newGroup.data : [];
  const degenGroupData = ((_b = degenGroup == null ? void 0 : degenGroup.data) == null ? void 0 : _b.length) > 0 ? degenGroup.data : [];
  const safeGroupData = ((_c = safeGroup == null ? void 0 : safeGroup.data) == null ? void 0 : _c.length) > 0 ? safeGroup.data : [];
  return {
    newGroup: {
      text: "NEW DEV",
      icon: "image_20",
      background: "#44E48E",
      items: newGroupData
    },
    degenGroup: {
      text: "DEGEN DEV",
      icon: "image_18",
      background: "#FF8334",
      items: degenGroupData
    },
    safeGroup: {
      text: "SAFE DEV",
      icon: "image_19",
      background: "#4FADFF",
      items: safeGroupData
    }
  };
});

export { groups_get as default };
//# sourceMappingURL=groups.get.mjs.map
