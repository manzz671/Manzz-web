export default {
  async fetch(request) {
    return new Response("Halo dari Cloudflare Worker!", {
      headers: { "content-type": "text/plain" },
    });
  },
};
