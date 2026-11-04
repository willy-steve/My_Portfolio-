/**
 * database.js - Encrypted SQLite Database Architecture for Community Submissions
 * DJIDJOU STEVE - Professional Portfolio Backend
 * Security Standard: AES-256-GCM Payload Encryption & Parameterized Queries
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Ensure data directory exists
const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, 'community.db');

// Secure Master Encryption Key (Derived or fallback to a deterministic local secret)
const ENCRYPTION_SECRET = process.env.COMMUNITY_SECRET || 'dskode-privacy-protected-aes256-key-seed';
const KEY = crypto.scryptSync(ENCRYPTION_SECRET, 'dskode-salt', 32);

class CommunityDatabase {
  constructor() {
    this.sqlite3 = null;
    this.db = null;
    this.init();
  }

  init() {
    try {
      // Lazy load sqlite3 if installed
      const sqlite3 = require('sqlite3').verbose();
      this.db = new sqlite3.Database(dbPath, (err) => {
        if (err) {
          console.warn('[Database] SQLite native driver not active. Using secure flat-file backup store.', err.message);
        } else {
          this.createTables();
        }
      });
    } catch (e) {
      console.log('[Database] Native SQLite module optional; operating file-backed encrypted vault.');
    }
  }

  createTables() {
    if (!this.db) return;
    const sql = `
      CREATE TABLE IF NOT EXISTS community_proposals (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        anonymous_id TEXT UNIQUE,
        encrypted_data TEXT NOT NULL,
        iv TEXT NOT NULL,
        auth_tag TEXT NOT NULL,
        topic_preview TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `;
    this.db.run(sql);
  }

  /**
   * Encrypts sensitive personal data using AES-256-GCM before database insertion
   */
  encryptPayload(plainObject) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-gcm', KEY, iv);
    
    let encrypted = cipher.update(JSON.stringify(plainObject), 'utf8', 'hex');
    encrypted += cipher.final('hex');
    const authTag = cipher.getAuthTag().toString('hex');

    return {
      encryptedData: encrypted,
      iv: iv.toString('hex'),
      authTag
    };
  }

  /**
   * Securely saves a community submission with complete privacy
   */
  async saveProposal({ name, email, topic, details }) {
    const anonymousId = crypto.createHash('sha256').update(email + Date.now().toString()).digest('hex').substring(0, 16);
    const { encryptedData, iv, authTag } = this.encryptPayload({ name, email, details });
    const sanitizedTopic = (topic || 'General Inquiry').slice(0, 120);

    return new Promise((resolve, reject) => {
      if (this.db) {
        const stmt = this.db.prepare(
          `INSERT INTO community_proposals (anonymous_id, encrypted_data, iv, auth_tag, topic_preview) VALUES (?, ?, ?, ?, ?)`
        );
        stmt.run(anonymousId, encryptedData, iv, authTag, sanitizedTopic, function (err) {
          if (err) return reject(err);
          resolve({ success: true, id: this.lastID, anonymousId });
        });
        stmt.finalize();
      } else {
        // Fallback encrypted file store
        const record = {
          anonymousId,
          encryptedData,
          iv,
          authTag,
          topic_preview: sanitizedTopic,
          created_at: new Date().toISOString()
        };
        const vaultPath = path.join(dataDir, 'proposals_vault.jsonl');
        fs.appendFileSync(vaultPath, JSON.stringify(record) + '\n');
        resolve({ success: true, anonymousId });
      }
    });
  }
}

module.exports = new CommunityDatabase();

