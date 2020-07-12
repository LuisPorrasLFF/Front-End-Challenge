module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/preset-typescript',
    '@storybook/addon-knobs/register',
    {
      name: '@storybook/addon-storysource',
      options: {
        loaderOptions: {
          prettierConfig: { parser: 'typescript' },
        },
      },
    }
  ],
};
