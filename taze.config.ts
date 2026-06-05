import { defineConfig } from 'taze';

export default defineConfig({
  force: true,
  write: true,
  update: false,
  install: false,
  recursive: false,
  interactive: false,
  includeLocked: true,
  ignoreOtherWorkspaces: false,
  maturityPeriod: 2,
  mode: 'stable',
  packageMode: {
    '@types/node': 'minor',
    'typescript': 'minor',
  },
  exclude: [],
  ignorePaths: [],
});
