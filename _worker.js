/**
 * _worker.js — Cloudflare Worker para hacer de proxy CORS
 *
 * Despliega esto en Cloudflare Workers (plan gratuito) y
 * apunta tu frontend estático (GitHub Pages) a esta URL.
 *
 * Paso a paso:
 *   1. Crea una cuenta en https://cloudflare.com (gratis)
 *   2. Ve a "Workers & Pages" > "Create application" > "Worker"
 *   3. Copia este código en el editor y dale a "Deploy"
 *   4. Copias la URL de tu worker (ej: https://mi-worker.nombre.workers.dev)
 *   5. En teams.html cambias PROXY_BASE por esa URL
 *
 * También puedes desplegarlo con wrangler:
 *   npx wrangler deploy _worker.js --name pokedex-proxy
 */

const API_BASE = 'https://cobblemonextras.com';
const SERVER_ID = '6a16d56a9bd4b6296506e1d7';

export default {
  async fetch(request) {
    const url = new URL(request.url);

    // ── CORS preflight ──────────────────────────────────────────
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    // ── Proxy /api/players → cobblemonextras ──────────────────
    if (url.pathname === '/api/players' && request.method === 'GET') {
      const apiUrl = `${API_BASE}/api/showcase/servers/${SERVER_ID}/players?page=1`;

      try {
        const apiResponse = await fetch(apiUrl, {
          headers: { 'Accept': 'application/json' },
        });

        const body = await apiResponse.text();

        return new Response(body, {
          status: apiResponse.status,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'no-cache',
          },
        });
      } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
          status: 502,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      }
    }

    // ── Todo lo demás → 404 ────────────────────────────────────
    return new Response('Not Found', { status: 404 });
  },
};
