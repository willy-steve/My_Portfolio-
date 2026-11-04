/**
 * server.js - Secure Node.js Backend API for Community Submissions & Privacy Vault
 * DJIDJOU STEVE - Professional Portfolio Backend
 */

const http = require('http');
const path = require('path');
const fs = require('fs');
const db = require('./database');

const PORT = process.env.PORT || 3001;

const server = http.createServer(async (req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Health check endpoint
  if (req.method === 'GET' && req.url === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'healthy', service: 'DJIDJOU STEVE Community Vault API' }));
    return;
  }

  // Community proposal submission
  if (req.method === 'POST' && req.url === '/api/community') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
      // Safeguard max payload size (50KB)
      if (body.length > 51200) {
        res.writeHead(413, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Payload too large' }));
        req.connection.destroy();
      }
    });

    req.on('end', async () => {
      try {
        const payload = JSON.parse(body || '{}');
        const { name, email, topic, details } = payload;

        if (!topic || topic.trim().length === 0) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Topic proposal is required' }));
          return;
        }

        const result = await db.saveProposal({
          name: (name || '').trim(),
          email: (email || '').trim(),
          topic: topic.trim(),
          details: (details || '').trim()
        });

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: true,
          message: 'Encrypted proposal stored securely.',
          id: result.anonymousId
        }));
      } catch (err) {
        console.error('[API Error]', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Failed to process proposal securely' }));
      }
    });
    return;
  }

  // Not found
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Endpoint not found' }));
});

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`[DsKode Server] Community Vault API running at http://localhost:${PORT}`);
  });
}

module.exports = server;

