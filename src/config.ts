import { fileURLToPath } from 'node:url';

try {
  process.loadEnvFile(fileURLToPath(new URL('../.env', import.meta.url)));
} catch (error) {
  if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error;
}

const sessionIdleMs = Number(process.env.SESSION_IDLE_MS ?? 30 * 60 * 1000);
if (!Number.isSafeInteger(sessionIdleMs) || sessionIdleMs <= 0) {
  throw new Error('SESSION_IDLE_MS must be a positive integer in milliseconds');
}

export const config = {
  baseUrl: process.env.CHAT_BULLQ_BASE_URL || 'https://api.chat.bravy.com.br',
  apiKey: process.env.CHAT_BULLQ_API_KEY || '',
  sessionIdleMs,
};
