import React from 'react';
import { useState, useEffect } from 'react';

import Main from '../general/Main';
import Attribution from '../general/Attribution';

import arrowIcon from '../../assets/age-calculator/images/icon-arrow.svg';

type Age = {
  day: string | null;
  month: string | null;
  year: string | null;
};

const defaultAge = {
  day: '',
  month: '',
  year: '',
};

const requiredMessage = 'This field is required';

const defaultErrors = {
  day: {
    state: false,
    message: 'Must be a valid day',
  },
  month: {
    state: false,
    message: 'Must be a valid month',
  },
  year: {
    state: false,
    message: 'Must be in the past',
  },
};

function AgeCalculator() {
  const [ageInputs, setAgeInputs] = useState<Age>(defaultAge);
  const [ageOutputs, setAgeOutputs] = useState<Age>(defaultAge);
  const [errors, setErrors] = useState(defaultErrors);

  const calculateAge = (date: string) => {
    const today = new Date();
    const thisMonth = today.getMonth();
    const thisYear = today.getFullYear();
    const thisDay = today.getDay();

    const birthday = new Date(date);
    const birthMonth = birthday.getMonth();
    const birthYear = birthday.getFullYear();
    const birthdayDay = birthday.getDay();

    //     console.log('***** TODAY *****', today, thisMonth, thisDay, thisYear);
    //     console.log('***** BIRTHDAY *****', birthday, birthMonth, birthdayDay, birthYear);
    //     console.log('***** DATE PROP *****', date);

    setAgeOutputs({
      year: `${thisYear - birthYear}`,
      month: `${thisMonth - birthMonth}`,
      day: `${thisDay - birthdayDay}`,
    });
  };

  const handleError = () => {
    let error = false;

    if (!ageInputs.month?.match(/^(1[0-2]|0[1-9])$/)) {
      error = true;
      console.log('error wrong month');

      if (ageInputs.month === '') {
        setErrors((prev) => {
          return {
            ...prev,
            month: {
              state: true,
              message: requiredMessage,
            },
          };
        });
      } else {
        setErrors((prev) => {
          return {
            ...prev,
            month: {
              ...prev.month,
              state: true,
            },
          };
        });
      }
    }
    if (!ageInputs.day?.match(/^(0?[1-9]|[12][0-9]|3[01])$/)) {
      error = true;
      console.log('error wrong day');

      if (ageInputs.day === '') {
        setErrors((prev) => {
          return {
            ...prev,
            day: {
              state: true,
              message: requiredMessage,
            },
          };
        });
      } else {
        setErrors((prev) => {
          return {
            ...prev,
            day: {
              ...prev.day,
              state: true,
            },
          };
        });
      }
    }
    if (!ageInputs.year?.match(/^^(19|20)\d{2}$/)) {
      error = true;
      console.log('error wrong year');

      if (ageInputs.year === '') {
        setErrors((prev) => {
          return {
            ...prev,
            year: {
              state: true,
              message: requiredMessage,
            },
          };
        });
      } else {
        setErrors((prev) => {
          return {
            ...prev,
            year: {
              ...prev.year,
              state: true,
            },
          };
        });
      }
    }

    return error;
  };

  const resetOutputs = () => {
    setAgeOutputs(defaultAge);
  };
  const resetErrors = () => {
    setErrors(defaultErrors);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetErrors();

    resetOutputs();
    const err = handleError();
    if (err) {
      console.log('***** ERROR *****', err, errors);
    } else {
      resetErrors();
      calculateAge(`${ageInputs.month}/${ageInputs.day}/${ageInputs.year}`);
    }
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>, prop: 'day' | 'month' | 'year') => {
    setAgeInputs((prev) => {
      return {
        ...prev,
        [prop]: event.target.value,
      };
    });
  };

  const outputDisplay = (property: 'day' | 'month' | 'year') => {
    return ageOutputs[property] === '' ? '--' : ageOutputs[property];
  };

  return (
    <Main font={'font-poppins'} bg={'bg-lightGrey'}>
      <div className="p-4">
        <section className="bg-femWhite rounded-xl rounded-br-[25%] p-8">
          <form onSubmit={(e) => handleSubmit(e)} className="border-b-2 border-b-lightGrey relative pb-8">
            <ul className="grid grid-cols-3 sm:grid-cols-4 sm:gap-2 pb-10">
              {['day', 'month', 'year'].map((d) => (
                <li key={d} className="flex flex-col">
                  <label
                    key={d}
                    className={`${
                      errors[d].state ? 'text-lightRed2' : 'text-smokey'
                    } " flex flex-col items-start justify-center "`}
                  >
                    {d.toUpperCase()}
                    <input
                      value={ageInputs[d]}
                      onChange={(e) => handleOnChange(e, d)}
                      className={`${
                        errors[d].state ? 'border-lightRed2' : 'border-lightGrey'
                      } " w-20 sm:w-28 p-2  text-offBlack border-2 hover:border-femPurple focus:border-femPurple text-xl rounded " `}
                      placeholder={
                        d.slice(0, 1) === 'y'
                          ? d.slice(0, 1).toUpperCase().repeat(4)
                          : d.slice(0, 1).toUpperCase().repeat(2)
                      }
                    />
                  </label>
                  {errors[d].state && <span className="text-lightRed2 text-xs font-normal">{errors[d].message}</span>}
                </li>
              ))}
            </ul>
            <button className="z-40 flex hover:bg-offBlack bg-femPurple absolute p-4 rounded-full bottom-0 sm:right-0 right-1/2 translate-x-1/2 sm:translate-x-0 translate-y-1/2">
              <img className="h-12  w-12" src={arrowIcon} />
            </button>
          </form>
          <div className="py-4 px-2 pt-20 sm:pt-4">
            <ul>
              {['year', 'month', 'day'].map((k) => (
                <li key={k} className="text-6xl sm:text-7xl">
                  <span className="text-femPurple">{outputDisplay(k)} </span>
                  {k}s
                </li>
              ))}
            </ul>
          </div>
        </section>
        <Attribution href={'https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q'} />
      </div>
    </Main>
  );
}

export default AgeCalculator;

/*

# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Purple: hsl(259, 100%, 65%)
- Light red: hsl(0, 100%, 67%)

### Neutral

- White: hsl(0, 0%, 100%)
- Off white: hsl(0, 0%, 94%)
- Light grey: hsl(0, 0%, 86%)
- Smokey grey: hsl(0, 1%, 44%)
- Off black: hsl(0, 0%, 8%)

## Typography

### Body Copy

- Font size (inputs): 32px

### Font

- Family: [Poppins](https://fonts.google.com/specimen/Poppins)
- Weights: 400i, 700, 800i

*/
