/**
 * Pokedex — Proxy local sin dependencias (solo módulos nativos de Node.js)
 *
 * Sirve:
 *   1. Archivos estáticos (HTML, CSS, JS, imágenes)
 *   2. Endpoint /api/players  →  llama a cobblemonextras.com y devuelve
 *      la respuesta con CORS habilitado.
 *
 * Uso:
 *   node proxy-server.js
 *   Luego abrir http://localhost:3000
 */

const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

// ── Configuración ─────────────────────────────────────────────────
const PORT = process.env.PORT || 3000;
const API_HOST = 'cobblemonextras.com';
const API_PATH = '/api/showcase/servers/6a16d56a9bd4b6296506e1d7/players?page=1';

// MIME types para servir estáticos
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png':  'image/png',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.webp': 'image/webp',
};

// ── Servir archivo estático ──────────────────────────────────────
function serveStatic(res, filePath) {
  const ext = path.extname(filePath);
  const contentType = MIME[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
      return;
    }
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
    });
    res.end(data);
  });
}

// ── Proxy a cobblemonextras.com ─────────────────────────────────
function proxyCobblemon(res) {
  const opts = {
    hostname: API_HOST,
    path: API_PATH,
    method: 'GET',
    headers: { 'Accept': 'application/json' },
  };

  const req = https.request(opts, (apiRes) => {
    let body = '';
    apiRes.on('data', (chunk) => { body += chunk; });
    apiRes.on('end', () => {
      res.writeHead(apiRes.statusCode, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache',
      });
      res.end(body);
    });
  });

  req.on('error', (err) => {
    console.error(' Proxy error:', err.message);
    res.writeHead(502, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: `Proxy error: ${err.message}` }));
  });

  req.end();
}

// ── Servidor HTTP ───────────────────────────────────────────────
const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  // CORS preflight (OPTIONS)
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': '*',
    });
    res.end();
    return;
  }

  // Endpoint proxy
  if (url.pathname === '/api/players' && req.method === 'GET') {
    proxyCobblemon(res);
    return;
  }

  // Servir estáticos
  let filePath = url.pathname === '/'
    ? '/server-teams.html'
    : url.pathname;

  filePath = path.join(__dirname, filePath);
  const resolved = path.resolve(filePath);

  // Seguridad: evitar salir del directorio del proyecto
  if (!resolved.startsWith(path.resolve(__dirname))) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Forbidden');
    return;
  }

  serveStatic(res, resolved);
});

server.listen(PORT, () => {
  console.log('');
  console.log(' ╔══════════════════════════════════════════╗');
  console.log(' ║    Pokedex — Proxy local corriendo       ║');
  console.log(' ╠══════════════════════════════════════════╣');
  console.log(` ║  http://localhost:${PORT}                  ║`);
  console.log(' ║                                          ║');
  console.log(' ║  Presiona Ctrl+C para detener            ║');
  console.log(' ╚══════════════════════════════════════════╝');
  console.log('');
});
