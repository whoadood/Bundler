import Attribution from '../general/Attribution';

import cardFront from '../../assets/credit-card/images/bg-card-front.png';
import cardBack from '../../assets/credit-card/images/bg-card-back.png';
import bgAccentDT from '../../assets/credit-card/images/bg-main-desktop.png';
import bgAccentMB from '../../assets/credit-card/images/bg-main-mobile.png';
import cardLogo from '../../assets/credit-card/images/card-logo.svg';
import completeIcon from '../../assets/credit-card/images/icon-complete.svg';

function CreditCard() {
  return (
    <main className="bg-gray-600 h-screen flex flex-col items-center font-bold justify-center font-space">
      <div>
        <img src={bgAccentDT} />
      </div>
      <Attribution href="https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw" />
    </main>
  );
}

export default CreditCard;

/* 

# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Linear gradient (active input border): hsl(249, 99%, 64%) to hsl(278, 94%, 30%)
- Red (input errors): hsl(0, 100%, 66%)

### Neutral

- White: hsl(0, 0%, 100%)
- Light grayish violet: hsl(270, 3%, 87%)
- Dark grayish violet: hsl(279, 6%, 55%)
- Very dark violet: hsl(278, 68%, 11%)

## Typography

### Body Copy

- Font size: 18px

### Font

- Family: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
- Weights: 500

*/
