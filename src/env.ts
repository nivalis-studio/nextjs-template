// zod/mini named imports keep this module tree-shakable: importing the
// aggregated `z` object retains all of zod core + locales (~250KB) in the
// client bundle (env is imported by client components for NEXT_PUBLIC_* values)
import {
  _default,
  object,
  string,
  treeifyError,
  enum as zEnum,
} from 'zod/mini';
import type { output } from 'zod/mini';

// WARN: when adding env variables here
// ⚠️ don't forget to also put them in turbo.json

const serverSchema = object({
  NODE_ENV: _default(
    zEnum(['development', 'test', 'production']),
    'development',
  ),
});

const clientSchema = object({
  NEXT_PUBLIC_VERCEL_URL: _default(string(), ''),
});

const mergedSchema = object({
  ...clientSchema.shape,
  ...serverSchema.shape,
});

const processEnv = {
  // clientSchema keys
  NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,

  // serverSchema keys
  NODE_ENV: process.env.NODE_ENV,
};

const isServer = typeof window === 'undefined';

// On the client only the NEXT_PUBLIC_* keys are validated and present at
// runtime; server-only keys must never be read from client code.
const parsed = (isServer ? mergedSchema : clientSchema).safeParse(processEnv);

if (!parsed.success) {
  console.error(
    '❌ Invalid environment variables:',
    treeifyError(parsed.error),
  );

  throw new Error('Invalid environment variables');
}

export const ENV = parsed.data as output<typeof mergedSchema>;
