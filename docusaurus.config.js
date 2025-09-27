// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes: prismThemes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FoodTrails',
  tagline: 'Local food procurement tracking',
  favicon: 'logo/favicon.ico',

  future: { v4: true },

  url: 'https://foodtrails.org',
  baseUrl: '/documentation/',

  organizationName: 'digicyber',
  projectName: 'documentation',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */ (
        {
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            routeBasePath: '/',
          },
          blog: {
            showReadingTime: true,
            feedOptions: { type: ['rss', 'atom'], xslt: true },
            onInlineTags: 'warn',
            onInlineAuthors: 'warn',
            onUntruncatedBlogPosts: 'warn',
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }
      ),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ (
      {
        image: 'logo/logo.png',
        navbar: {
          title: 'FoodTrails',
          logo: { alt: 'FoodTrails Logo', src: 'logo/logo.png' },
          style: 'primary',
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'tutorialSidebar',
              position: 'left',
              label: 'Documentation',
            },
            {
              label: 'Public Data',
              position: 'left',
              items: [
                { label: 'Rhode Island', to: '/wireframe' },
              ],
            },
            { href: 'https://github.com/digicyber/documentation', label: 'GitHub', position: 'right' },
            { to: '/contact', label: 'Contact', position: 'right', className: 'navbar__item--cta' },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Docs',
              items: [{ label: 'Docs', to: '/' }],
            },
            {
              title: 'Community',
              items: [
                { label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus' },
                { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus' },
                { label: 'X', href: 'https://x.com/docusaurus' },
              ],
            },
            {
              title: 'More',
              items: [
                { label: 'Blog', to: '/blog' },
                { label: 'GitHub', href: 'https://github.com/digicyber/documentation' },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
        prism: {
          theme: prismThemes.github,
          darkTheme: prismThemes.dracula,
        },
      }
    ),
};

module.exports = config;


