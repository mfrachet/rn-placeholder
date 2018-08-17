module.exports = {
  base: '/rn-placeholder/',
  title: 'rn-placeholder',
  head: [['script', { src: 'https://snack.expo.io/embed.js' }]],
  description:
    'Display some placeholder stuff before rendering your text or media content in React Native',
  serviceWorker: true,
  themeConfig: {
    nav: [
      {
        text: 'LinkedIn',
        link: 'https://www.linkedin.com/in/marvin-frachet-49165365/',
      },
      { text: 'Twitter', link: 'https://twitter.com/mfrachet' },
      { text: 'Github', link: 'https://github.com/mfrachet' },
      { text: 'Medium', link: 'https://medium.com/@mfrachet' },
    ],
    sidebar: [
      {
        title: 'Getting started',
        collapsable: false,
        children: ['/getting-started/installation', '/getting-started/example'],
      },
      {
        title: 'Components available',
        collapsable: false,
        children: [
          '/components/line',
          '/components/media',
          '/components/paragraph',
          '/components/imagecontent',
          '/components/multiwords',
          '/customize/component',
        ],
      },
      {
        title: 'Animations',
        collapsable: false,
        children: ['/animations/builtin', '/customize/animation'],
      },
    ],
  },
};
