import axios from 'axios';

var API_ENDPOINT = {
	group: "https://z99labs-api.line68.xyz/dev/",
	search_wallet: "https://z99labs-api.line68.xyz/dev/search"
};

const FETCH_API = async (type, data) => {
  let config;
  switch (type) {
    case "GROUP":
      config = {
        method: "get",
        url: `${API_ENDPOINT.group}${data.group}`
      };
      break;
    case "SEARCH":
      config = {
        method: "post",
        url: API_ENDPOINT.search_wallet,
        data: { wallet: data.wallet }
      };
      break;
  }
  return await axios(config).catch((e) => e);
};

export { FETCH_API as F };
//# sourceMappingURL=fetchApi.mjs.map
