const url = "https://eth-mainnet.g.alchemy.com/v2/sH19dUGgIKrVuUub4_-aF_1OdagYzzeT";
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const body = JSON.stringify({
  id: 1,
  jsonrpc: "2.0",
  method: "eth_getBlockByNumber",
  params: ["finalized", false],
});

fetch(url, {
  method: "POST",
  headers: headers,
  body: body,
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));