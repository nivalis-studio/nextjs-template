import type { VercelConfig } from '@vercel/config/v1';

export const config: VercelConfig = {
  framework: 'nextjs',
  regions: ['cdg1'],
  git: { deploymentEnabled: { 'entire/**': false } },
};
