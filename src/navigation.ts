import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

const currentYear = new Date().getFullYear();

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Server',
      links: [
        {
          text: 'BandwagonHost',
          href: getPermalink('/bandwagonhost'),
        },
        {
          text: 'ION Krypt Cloud',
          href: getPermalink('/ion-krypt-cloud'),
        },
      ],
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Explore',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Search', href: getPermalink('/search') },
        { text: 'Donate', href: getPermalink('/donate') },
        { text: 'BandwagonHost', href: getPermalink('/bandwagonhost') },
        { text: 'ION Krypt Cloud', href: getPermalink('/ion-krypt-cloud') },
      ],
    },
    {
      title: 'Topics',
      links: [
        { text: 'AI', href: getPermalink('ai', 'tag') },
        { text: 'Vibe Coding', href: getPermalink('vibe-coding', 'tag') },
        { text: 'Codex', href: getPermalink('codex', 'tag') },
        { text: 'Claude Code', href: getPermalink('claude-code', 'tag') },
      ],
    },
    {
      title: 'Elsewhere',
      links: [
        { text: 'RSS', href: getAsset('/rss.xml') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Cookie', href: getPermalink('/cookie') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') }],
  footNote: `
    Copyright &copy; 2017 - <span data-current-year>${currentYear}</span> Jackie Sung. All rights reserved.
  `,
};
