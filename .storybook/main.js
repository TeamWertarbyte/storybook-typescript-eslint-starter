module.exports = {
  stories: ['../stories/**/*.stories.js', '../src/components/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/preset-typescript',
  ],
};
