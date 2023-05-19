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
  }),
  footer: {
    text: (
      <p className="mt-6 text-xs">
        © {new Date().getFullYear()} dotnetroadmap
      </p>
    ),
  },
}

export default config
