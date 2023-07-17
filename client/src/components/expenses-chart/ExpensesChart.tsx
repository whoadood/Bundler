import React from 'react';

import Main from '../general/Main';
import Attribution from '../general/Attribution';

import logo from '../../assets/expenses-chart/images/logo.svg';

type SpendItem = {
  day: string;
  amount: number;
};

type Expenses = {
  balance: number;
  spending: SpendItem[];
  total: number;
  variance: string;
};

const defaultExpenses = {
  balance: 921.48,
  spending: [
    {
      day: 'Monday',
      amount: 33.82,
    },
    {
      day: 'Tuesday',
      amount: 47.23,
    },
    {
      day: 'Wednesday',
      amount: 79.67,
    },
    {
      day: 'Thursday',
      amount: 50.73,
    },
    {
      day: 'Friday',
      amount: 40.43,
    },
    {
      day: 'Saturday',
      amount: 57.85,
    },
    {
      day: 'Sunday',
      amount: 48.91,
    },
  ],
  total: 478.33,
  variance: '+2.4%',
};

// const convertAmount = (amount: number) => {
//   console.log('rounded amount', Math.round(amount));
//   return `h-[${Math.round(amount)}%]`;
//   //   return 'h-[50%]';
// };

function ExpensesChart({ expenses = defaultExpenses }: { expenses?: Expenses }) {
  const colorSelect = (day: SpendItem, spending: SpendItem[]) => {
    const filteredSpending = spending.filter((t) => t.day !== day.day);

    return filteredSpending.every((e) => e.amount < day.amount)
      ? 'bg-femCyan group-hover:bg-femCyan/30'
      : 'bg-softRed group-hover:bg-softRed/30';
  };

  return (
    <Main font="font-dmSans" bg="bg-cream2">
      <>
        <div className="flex gap-4 flex-col p-4">
          <h1 className="bg-softRed rounded-xl flex justify-between items-center p-4 text-cream2 w-full">
            <div className="flex flex-col">
              <span className="font-normal text-xs">My balance</span>
              <span className="text-2xl">${expenses.balance}</span>
            </div>
            <img className="h-8" src={logo} />
          </h1>
          <section className="bg-paleOrange p-4 rounded-xl">
            <h2 className="text-xl mb-6">Spending - Last 7 days</h2>
            <ol className="grid grid-cols-7 gap-4 text-xs font-normal text-femGrey h-40 items-end">
              {expenses.spending.map((d) => (
                <li className="h-full text-center flex flex-col gap-2 justify-end group" key={d.day}>
                  {/* <div className={`${convertAmount(d.amount)} bg-softRed rounded`} /> */}
                  <span className="bg-black rounded opacity-0 group-hover:opacity-100 font-bold text-femWhite p-1">
                    ${d.amount}
                  </span>
                  <div
                    className={`${colorSelect(d, expenses.spending)} " rounded "`}
                    style={{
                      height: `${Math.round(d.amount)}%`,
                    }}
                  />
                  <span className="px-2">{d.day.slice(0, 3).toLowerCase()}</span>
                </li>
              ))}
            </ol>
            <div className="border-b-2 border-b-femGrey/50 my-6" />
            <div className="flex justify-between items-center py-4">
              <h3 className="text-3xl flex flex-col">
                <span className="text-xs text-femGrey font-normal">Total this month</span>${expenses.total}
              </h3>
              <div className="flex flex-col text-end">
                <span>{expenses.variance}</span>
                <span className="text-xs text-femGrey font-normal">from last month</span>
              </div>
            </div>
          </section>
        </div>
        <Attribution href="https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt" />
      </>
    </Main>
  );
}

export default ExpensesChart;

/* 

# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Soft red: hsl(10, 79%, 65%)
- Cyan: hsl(186, 34%, 60%)

### Neutral

- Dark brown: hsl(25, 47%, 15%)
- Medium brown: hsl(28, 10%, 53%)
- Cream: hsl(27, 66%, 92%)
- Very pale orange: hsl(33, 100%, 98%)

## Typography

### Body Copy

- Font size: 18px

### Font

- Family: [DM Sans](https://fonts.google.com/specimen/DM+Sans)
- Weights: 400, 700

*/
