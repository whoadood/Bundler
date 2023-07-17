import React from 'react';

import useWindowWidth from '../../hooks/useWindowWidth';

import cartIcon from '../../assets/product-preview/images/icon-cart.svg';
import productImageDT from '../../assets/product-preview/images/image-product-desktop.jpg';
import productImageMB from '../../assets/product-preview/images/image-product-mobile.jpg';
import Attribution from '../general/Attribution';

type Product = {
  title: string;
  catagory: string;
  image: {
    desktop: string;
    mobile: string;
  };
  description: string;
  sale: {
    onSale: boolean;
    salePrice: number;
  };
  price: number;
};

const defaultProduct = {
  title: 'Gabrielle Essence Eau De Parfum',
  catagory: 'perfum',
  image: {
    desktop: productImageDT,
    mobile: productImageMB,
  },
  description:
    'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL',
  sale: {
    onSale: true,
    salePrice: 149.99,
  },
  price: 169.99,
};

function ProductPreview({ product = defaultProduct }: { product?: Product }) {
  const windowWidth = useWindowWidth();

  const handleATC = (product: Product) => {
    console.log(`${product.title} successfully added to cart`);
  };

  return (
    <main className="font-montserrat flex flex-col justify-center items-center bg-cream h-screen p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 max-w-[800px] rounded-xl overflow-hidden shadow-lg">
        <img className="w-[400px]" src={windowWidth && windowWidth > 400 ? productImageDT : productImageMB} />
        <section className="flex flex-col p-12 gap-6 bg-femWhite text-grayishBlue">
          <span>{product.catagory.toUpperCase()}</span>
          <h1 className="font-fraunces font-bold text-3xl sm:text-5xl text-darkBlue">{product.title}</h1>
          <p className="">{product.description}</p>
          {product.sale.onSale ? (
            <div className="flex gap-6">
              <span className="text-darkCyan font-bold text-4xl font-fraunces">{product.sale.salePrice}</span>
              <span className="line-through">{product.price}</span>
            </div>
          ) : (
            <div>
              <span className="text-Dark">${product.price}</span>
            </div>
          )}
          <button
            onClick={() => handleATC(product)}
            className="flex gap-3 bg-darkCyan hover:bg-darkBlue text-femWhite font-bold justify-center items-center p-3 rounded-lg"
          >
            <img src={cartIcon} />
            <span>Add to Cart</span>
          </button>
        </section>
      </div>
      <Attribution href="https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa" />
    </main>
  );
}

export default ProductPreview;

/*

# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Dark cyan: hsl(158, 36%, 37%)
- Cream: hsl(30, 38%, 92%)

### Neutral

- Very dark blue: hsl(212, 21%, 14%)
- Dark grayish blue: hsl(228, 12%, 48%)
- White: hsl(0, 0%, 100%)

## Typography

### Body Copy

- Font size (paragraph): 14px

### Font

- Family: [Montserrat](https://fonts.google.com/specimen/Montserrat)
- Weights: 500, 700

- Family: [Fraunces](https://fonts.google.com/specimen/Fraunces)
- Weights: 700

*/
