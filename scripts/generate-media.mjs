/**
 * Dynamic Media Generation Engine
 * Synthesizes high-impact project banners, social cards, and stylized illustrations
 * using fal.ai (FLUX) and Google Gemini (Imagen 3).
 *
 * Usage:
 *   node scripts/generate-media.mjs --provider=fal --prompt="Obsidian cybernetic dashboard..."
 *   node scripts/generate-media.mjs --provider=gemini --prompt="Futuristic civic tech map of Durban..."
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Load environment variables from .env.local if not already in process.env
const envLocalPath = path.join(rootDir, '.env.local');
if (fs.existsSync(envLocalPath)) {
  const envContent = fs.readFileSync(envLocalPath, 'utf8');
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...values] = trimmed.split('=');
      const val = values.join('=').trim();
      if (key && val && !process.env[key.trim()]) {
        process.env[key.trim()] = val;
      }
    }
  }
}

const FAL_API_KEY = process.env.FAL_API_KEY;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export async function generateWithFal(prompt, options = {}) {
  if (!FAL_API_KEY) {
    throw new Error('FAL_API_KEY is not defined in environment or .env.local');
  }

  console.log(`[fal.ai] Dispatching generation request: "${prompt.slice(0, 60)}..."`);
  const response = await fetch('https://queue.fal.run/fal-ai/flux/schnell', {
    method: 'POST',
    headers: {
      Authorization: `Key ${FAL_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt,
      image_size: options.imageSize || 'landscape_16_9',
      num_images: options.numImages || 1,
      enable_safety_checker: true,
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`fal.ai request failed (${response.status}): ${errText}`);
  }

  const result = await response.json();
  return result;
}

export async function generateWithGemini(prompt, options = {}) {
  if (!GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY is not defined in environment or .env.local');
  }

  console.log(`[Gemini] Dispatching Imagen 3 / Gemini synthesis: "${prompt.slice(0, 60)}..."`);
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-002:predict?key=${GEMINI_API_KEY}`;
  
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      instances: [{ prompt }],
      parameters: {
        sampleCount: 1,
        aspectRatio: options.aspectRatio || '16:9',
        outputOptions: { mimeType: 'image/jpeg' },
      },
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Gemini Imagen request failed (${response.status}): ${errText}`);
  }

  const data = await response.json();
  return data;
}

// CLI Execution handler
async function main() {
  const args = process.argv.slice(2);
  const provider = args.find((a) => a.startsWith('--provider='))?.split('=')[1] || 'fal';
  const promptArg = args.find((a) => a.startsWith('--prompt='))?.split('=')[1] || 
    'A hyper-modern dark obsidian command center UI with glowing cyan and neon emerald accents, holographic data telemetry, clean typography';

  console.log(`--- Dynamic Media Synthesis Engine ---`);
  console.log(`Provider: ${provider}`);
  console.log(`Prompt: ${promptArg}`);

  try {
    if (provider === 'fal') {
      const falResult = await generateWithFal(promptArg);
      console.log('fal.ai result:', JSON.stringify(falResult, null, 2));
    } else {
      const geminiResult = await generateWithGemini(promptArg);
      console.log('Gemini Imagen result received:', JSON.stringify(geminiResult, null, 2));
    }
  } catch (err) {
    console.error('Generation error:', err.message);
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
