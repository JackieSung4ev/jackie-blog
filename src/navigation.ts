import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Writing',
      href: getBlogPermalink(),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Now',
      href: getPermalink('/now'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Start here', href: getPermalink('/about') }],
};

export const footerData = {
  links: [
    {
      title: 'Explore',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'Writing', href: getBlogPermalink() },
        { text: 'About', href: getPermalink('/about') },
        { text: 'Now', href: getPermalink('/now') },
      ],
    },
    {
      title: 'Topics',
      links: [
        { text: 'AI', href: getPermalink('ai', 'tag') },
        { text: 'Software', href: getPermalink('software', 'tag') },
        { text: 'Notes', href: getPermalink('notes', 'tag') },
        { text: 'Projects', href: getPermalink('projects', 'tag') },
      ],
    },
    {
      title: 'Elsewhere',
      links: [
        { text: 'GitHub', href: 'https://github.com/' },
        { text: 'X / Twitter', href: 'https://x.com/' },
        { text: 'RSS', href: getAsset('/rss.xml') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    (c) 2026 Your Name. Built with AstroWind.
  `,
};
