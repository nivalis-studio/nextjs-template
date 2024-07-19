import { nivalis } from '@nivalis/eslint-config';

export default nivalis(
  {
    typescript: {
      configPath: './tsconfig.json',
    },
    tailwindcss: {
      configPath: './tailwind.config.ts',
    },
  },
  {
    rules: {
      'react/prop-types': 'off',
      'react-refresh/only-export-components': 'off',
      '@typescript-eslint/no-magic-numbers': 'off',
    },
  },
);
