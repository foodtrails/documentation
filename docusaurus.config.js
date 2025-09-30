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
  baseUrl: '/',

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

  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: '/',
        searchResultLimits: 8,
        searchResultContextMaxLength: 50,
      },
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
          items: [],
        },
        prism: {
          theme: prismThemes.github,
          darkTheme: prismThemes.dracula,
        },
      }
    ),
};

module.exports = config;


