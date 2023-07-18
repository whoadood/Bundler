import React from 'react';

import Attribution from '../general/Attribution';
import Main from '../general/Main';

import menuIconClose from '../../assets/news-homepage/images/icon-menu-close.svg';
import menuIcon from '../../assets/news-homepage/images/icon-menu.svg';
import topLaptops from '../../assets/news-homepage/images/image-top-laptops.jpg';
import retroPc from '../../assets/news-homepage/images/image-retro-pcs.jpg';
import gamingGrowth from '../../assets/news-homepage/images/image-gaming-growth.jpg';
import web3DT from '../../assets/news-homepage/images/image-web-3-desktop.jpg';
import web3MB from '../../assets/news-homepage/images/image-web-3-mobile.jpg';
import logo from '../../assets/news-homepage/images/logo.svg';
import useWindowWidth from '../../hooks/useWindowWidth';

type Article = {
  title: string;
  content: string;
  image?: {
    mobile?: string;
    desktop?: string;
  };
};

type Data = {
  main: Article;
  new: [Article, Article, Article];
  trending: [Article, Article, Article];
};

const defaultData: Data = {
  main: {
    title: 'The Bright Future of Web 3.0?',
    content:
      'We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?',
    image: {
      mobile: web3MB,
      desktop: web3DT,
    },
  },
  new: [
    {
      title: 'Hydrogen VS Electric Cars',
      content: 'Will hydrogen-fueled cars ever catch up to EVs?',
    },
    {
      title: 'The Downsides of AI Artistry',
      content: 'What are the possible adverse effects of on-demand AI image generation',
    },
    {
      title: 'Is VC Funding Drying Up?',
      content: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
    },
  ],
  trending: [
    {
      title: 'Reviving Retro PCs',
      content: 'What happens when old PCs are given modern upgrades?',
      image: {
        desktop: retroPc,
      },
    },
    {
      title: 'Top 10 Laptops of 2022',
      content: 'Our best picks for various needs and budgets.',
      image: {
        desktop: topLaptops,
      },
    },
    {
      title: 'The Growth of Gaming',
      content: 'How the pandemic has sparked fresh opportunities.',
      image: {
        desktop: gamingGrowth,
      },
    },
  ],
};

const navLinks = ['home', 'new', 'popular', 'trending', 'categories'];

function Header() {
  return (
    <header className="flex justify-between items-center">
      <img src={logo} />
      <nav>
        <ul className="flex gap-4 font-normal text-grayishBlue2">
          {navLinks.map((l) => (
            <li className="capitalize hover:text-softOrange cursor-pointer" key={l}>
              {l}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function NewsHomepage({ data = defaultData }: { data?: Data }) {
  const windowWidth = useWindowWidth();
  return (
    <Main font="font-inter" bg="softOrange">
      <div className="max-w-6xl flex flex-col justify-between gap-8">
        <Header />
        <div className="grid grid-cols-3 gap-6">
          <section className="col-span-2 grid grid-cols-2 gap-6">
            <img
              className="col-span-2"
              src={windowWidth && windowWidth > 400 ? data.main.image?.desktop : data.main.image?.mobile}
            />
            <h1 className="col-span-1 text-6xl">{data.main.title}</h1>
            <div className="flex flex-col justify-between items-start">
              <p className="col-span-1 text-grayishBlue2 font-normal">{data.main.content}</p>
              <a className="uppercase hover:bg-darkBlue2 px-8 text-femWhite py-2 rounded bg-softRed" href="*">
                Read More
              </a>
            </div>
          </section>
          <section className="col-span-1 bg-darkBlue2 p-4">
            <h2 className="mb-8 text-4xl text-softOrange">New</h2>
            <ul className="flex flex-col gap-4">
              {data.new.map((a, i) =>
                i !== data.new.length - 1 ? (
                  <>
                    <li className="group cursor-pointer" key={a.title}>
                      <h3 className="text-femWhite group-hover:text-softOrange text-xl mb-4">{a.title}</h3>
                      <p className="text-grayishBlue2 font-normal">{a.content}</p>
                    </li>
                    <div className="my-4 border-b-2 border-grayishBlue/50" />
                  </>
                ) : (
                  <li className="group cursor-pointer" key={a.title}>
                    <h3 className="text-femWhite group-hover:text-softOrange text-xl mb-4">{a.title}</h3>
                    <p className="text-grayishBlue2 font-normal">{a.content}</p>
                  </li>
                ),
              )}
            </ul>
          </section>
          <section className="col-span-3">
            <ol className="grid grid-cols-3 gap-8">
              {data.trending.map((a, i) => (
                <li className="grid grid-cols-3 gap-6 group cursor-pointer" key={a.title}>
                  <img className="col-span-1" src={a.image?.desktop} />
                  <div className="col-span-2 flex flex-col justify-between">
                    <span className="text-grayishBlue2 text-4xl">0{i + 1}</span>
                    <h4 className="text-xl group-hover:text-softRed">{a.title}</h4>
                    <p className="text-grayishBlue2 font-normal">{a.content}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>
        <Attribution href={'https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl'} />
      </div>
    </Main>
  );
}

export default NewsHomepage;

/*

# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Soft orange: hsl(35, 77%, 62%)
- Soft red: hsl(5, 85%, 63%)

### Neutral

Off-white: hsl(36, 100%, 99%)
Grayish blue: hsl(233, 8%, 79%)
Dark grayish blue: hsl(236, 13%, 42%)
Very dark blue: hsl(240, 100%, 5%)

## Typography

### Body Copy

- Font size (paragraph): 15px

### Font

- Family: [Inter](https://fonts.google.com/specimen/Inter)
- Weights: 400, 700, 800

*/
