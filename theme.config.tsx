import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'


export const Logo = () => {
  return (
    <h1 className="flex flex-row items-baseline text-2xl font-bold">
      <span className="dark:text-white tracking-tight hover:cursor-pointer">
        {`dotnet`}
        <span className="text-red-600">{`roadmap`}</span>
      </span>
    </h1>
  );
};

const config: DocsThemeConfig = {
  logo: Logo,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="dotnetroadmap" />
      <meta property="og:description" content="#1 Community-Driven Roadmap for .NET Developers." />
      <meta property="twitter:site" content="@iammukeshm" />
      <meta name="apple-mobile-web-app-title" content="dotnetroadmap" />
      <meta name="description" content="#1 Community-Driven Roadmap for .NET Developers." />
    </>
  ), 
  project: {
    link: 'https://github.com/dotnetroadmap/docs',
  },
  docsRepositoryBase: 'https://github.com/dotnetroadmap/docs',
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  useNextSeoProps: () => ({
    titleTemplate: "%s",
  }), banner: {
    key: '1.0-release',
    text: (
      <a href="https://codewithmukesh.substack.com/" target="_blank">
        🎉 Subscribe to the newsletter to be notified once things are ready →
      </a>
    )
  },
  footer: {
    text: (
      <p className="mt-6 text-xs">
        © {new Date().getFullYear()} dotnetroadmap
      </p>
    ),
  },
}

export default config
