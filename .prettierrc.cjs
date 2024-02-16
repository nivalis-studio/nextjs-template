/** @type {import("prettier").Config} */

module.exports = {
  ...require('@nivalis/prettier-config'),
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
};
