import { nivalis } from '@nivalis/eslint-config';

export default nivalis({
  typescript: {
    configPath: './tsconfig.json',
  },
  tailwindcss: false,
  // tailwindcss: {
  //   configPath: './tailwind.config.ts',
  // },
});
