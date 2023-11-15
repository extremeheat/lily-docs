import { useConfig } from 'nextra-theme-docs'
import indexes from './indexes'

const config = {
  logoLink: indexes.root,
  logo: (
    <>
    </>// // this double slash stops IDE from freaking out
  ),
  head: () => {
    const { frontMatter } = useConfig()
 
    return (
      <>
        <meta property="og:title" content={frontMatter.title || '🦃'} />
        <meta property="og:description" content={frontMatter.description || 'Hello world!'} 
        />
      </>// // this double slash stops IDE from freaking out
    )
  },
  useNextSeoProps: () => {
    const { frontMatter } = useConfig()
    return {
      titleTemplate: '%s – Guide',
      description: frontMatter.description || 'Hello world'
    }
  },
  footer: {
    text: `MIT License ${new Date().getFullYear()}`
  },
  project: {
    link: indexes.repoURL,
  },
  nextThemes: {
    defaultTheme: 'dark'
  },
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: Infinity
  },
  toc: {
    float: true
  },
  docsRepositoryBase: indexes.repoURL + '/blob/main',
  feedback: {
    content: null
  },
  primaryHue: 190
}

export default config
