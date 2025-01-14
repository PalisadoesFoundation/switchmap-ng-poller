import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import css from "./src/css/custom.css"
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Switchmap-NG Poller Documentation',
  tagline: 'Start your open source journey here',
  favicon: '/home/nishant/LOCAL_DISK_D/GSoC/talawa/switchmap-ng-poller/docs/static/img/favicon_palisadoes.ico',

  url: 'https://docs-poller.switchmap-ng.io',
  baseUrl: '/',
  deploymentBranch: 'gh-pages',

  organizationName: 'PalisadoesFoundation', // GitHub org
  projectName: 'switchmap-ng-poller', // repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    // navbar: {
    //   title: 'My Site',
    //   logo: {
    //     alt: 'My Site Logo',
    //     src: 'img/logo.svg',
    //   },
    //   items: [
    //     {
    //       type: 'docSidebar',
    //       sidebarId: 'tutorialSidebar',
    //       position: 'left',
    //       label: 'Tutorial',
    //     },
    //     {
    //       href: 'https://github.com/facebook/docusaurus',
    //       label: 'GitHub',
    //       position: 'right',
    //     },
    //   ],
    // },
    // footer: {
    //   style: 'dark',
    //   links: [
    //     {
    //       title: 'Docs',
    //       items: [
    //         {
    //           label: 'Tutorial',
    //           to: '/docs/intro',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Community',
    //       items: [
    //         {
    //           label: 'Stack Overflow',
    //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //         },
    //         {
    //           label: 'Discord',
    //           href: 'https://discordapp.com/invite/docusaurus',
    //         },
    //         {
    //           label: 'X',
    //           href: 'https://x.com/docusaurus',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'More',
    //       items: [
    //         {
    //           label: 'GitHub',
    //           href: 'https://github.com/facebook/docusaurus',
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  stylesheets: [
    {
      href: './src/css/custom.css', // Path to the custom stylesheet
      type: 'text/css',        // MIME type
    },
  ],
};

export default config;
