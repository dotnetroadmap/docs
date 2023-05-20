import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'


export const Logo = () => {
  return (
    <span>
      <div style={{ fontSize: 20 }}>dotnet<b>roadmap</b>.dev</div>
      <div style={{ fontSize: 10 }}>Ultimate Roadmap for <b>#dotnet</b> Developers.❤️</div>
      <style jsx>{`
      span {
        padding: 0.5rem 0.5rem 0.5rem 0;
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      span:hover {
        mask-position: 100%;
        transition: mask-position 1s ease, -webkit-mask-position 1s ease;
      }
    `}</style>
    </span>
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
    defaultMenuCollapseLevel: 2,
    toggleButton: true
  },
  useNextSeoProps: () => ({
    titleTemplate: "%s",
  }), banner: {
    key: '1.0-release',
    dismissible: false,
    text: (
      <a href="https://codewithmukesh.substack.com/" target="_blank">
        🎉 Join the waiting list →
      </a>
    )
  },
  footer: {
    text: (
      <p className="mt-6 text-xs">
        © {new Date().getFullYear()} dotnetroadmap
        <br></br>
        Developed & Maintained by <a href="https://www.codewithmukesh.com/">Mukesh Murugan</a>
      </p>
    ),
  },
}

export default config
