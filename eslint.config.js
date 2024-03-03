import { nivalis } from '@nivalis/eslint-config';

export default nivalis(
  {},
  {
    rules: {
      'react-refresh/only-export-components': 'off',
      'ts/no-magic-numbers': 'off',
    },
  },
);
