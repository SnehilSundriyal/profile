// Single source of truth for who I am and where to find me.
// Header, Footer, About, the home hero and the RSS feed all read from here.

export const site = {
  name: 'Snehil Sundriyal',
  shortName: 'Snehil',
  email: 'snehilsundriyal@gmail.com',
  resume: '/resume.pdf',
}

export const navigation = [
  { href: '/about', label: 'About' },
  { href: '/articles', label: 'Articles' },
  { href: '/projects', label: 'Projects' },
]

// `icon` is a key into the icon map in components/Icons.jsx
export const socials = [
  { label: 'Follow on X', href: 'https://x.com/snehilll_', icon: 'x' },
  { label: 'Follow on GitHub', href: 'https://github.com/SnehilSundriyal', icon: 'github' },
  { label: 'Follow on LinkedIn', href: 'https://www.linkedin.com/in/snesun', icon: 'linkedin' },
]
