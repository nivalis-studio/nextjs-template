import { nivalis } from '@nivalis/eslint-config';

export default nivalis({
  typescript: {
    configPath: './tsconfig.json',
  },
  tailwindcss: {
    configPath: './tailwind.config.ts',
  },
});
