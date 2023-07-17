import { useState, useEffect } from 'react';

import Attribution from '../general/Attribution';

import useWindowWidth from '../../hooks/useWindowWidth';

import cardFront from '../../assets/credit-card/images/bg-card-front.png';
import cardBack from '../../assets/credit-card/images/bg-card-back.png';
import bgAccentDT from '../../assets/credit-card/images/bg-main-desktop.png';
import bgAccentMB from '../../assets/credit-card/images/bg-main-mobile.png';
import cardLogo from '../../assets/credit-card/images/card-logo.svg';
import completeIcon from '../../assets/credit-card/images/icon-complete.svg';

type FormFields = {
  name: string;
  card_number: string;
  expiration: {
    month: string;
    year: string;
  };
  cvc: string;
};

type FormError = {
  name: boolean;
  card_number: boolean;
  expiration: {
    month: boolean;
    year: boolean;
  };
  cvc: boolean;
};

function FormInput({
  title,
  state,
  Okey,
  handler,
  placeholder,
  error,
  checkError,
  errorMsg,
}: {
  title: string;
  state: string;
  Okey: string;
  handler: (state: string, value: string) => void;
  placeholder: string;
  error: boolean;
  checkError: (error: boolean) => 'border-red-500' | 'border-femGrey focus:border-darkViolet';
  errorMsg: string;
}) {
  return (
    <label className="flex flex-col gap-2" htmlFor={Okey}>
      {title.toUpperCase()}
      <input
        className={`${checkError(
          error,
        )} " border-2 text-lg border-solid focus:border-darkViolet px-4 py-2 rounded-lg "`}
        name={Okey}
        value={state}
        placeholder={placeholder}
        onChange={(e) => {
          handler(e.target.value, e.target.name);
        }}
      />
      {error && <span className="text-lightRed text-xs">{errorMsg}</span>}
    </label>
  );
}

const defaultFormFields = {
  name: '',
  card_number: '',
  expiration: {
    month: '',
    year: '',
  },
  cvc: '',
};

const defaultErrors = {
  name: false,
  card_number: false,
  expiration: {
    month: false,
    year: false,
  },
  cvc: false,
};

function Success({ handleComplete }: { handleComplete: () => void }) {
  return (
    <section className="font-normal min-w-[400px] px-4 sm:px-0 flex flex-col gap-8 justify-center items-center">
      <img src={completeIcon} />
      <p className="flex flex-col items-center justify-start gap-2 mb-4">
        <span className="capitalize text-2xl">thank you</span>
        <span className="text-femGrey">We've added your card details</span>
      </p>
      <Button text="Continue" type={'button'} handler={handleComplete} />
    </section>
  );
}

function Button({ text, type, handler }: { text: string; type: 'submit' | 'button' | 'reset'; handler?: () => void }) {
  return type === 'submit' ? (
    <button type={type} className="bg-darkViolet text-femWhite px-4 py-4 font-normal text-sm rounded-lg">
      {text}
    </button>
  ) : (
    <button
      type={type}
      onClick={handler}
      className="bg-darkViolet text-femWhite px-4 py-4 w-full font-normal text-sm rounded-lg"
    >
      {text}
    </button>
  );
}

function CreditCard() {
  const [formError, setFormError] = useState<FormError>(defaultErrors);
  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);
  const [success, setSuccess] = useState(false);

  const toggleSuccess = () => setSuccess(!success);

  const windowWidth = useWindowWidth();

  const handleFormFields = (value: string, name: string) => {
    setFormFields((prev) => {
      if (name.includes('expiration')) {
        const exp = name.split(' ');

        // console.log('IF');
        // console.log('prev: ', prev);
        // console.log('exp: ', exp[1]);
        // console.log('name: ', name);
        // console.log('value: ', value);

        return {
          ...prev,
          expiration: {
            ...prev.expiration,
            [exp[1]]: value,
          },
        };
      } else {
        // console.log('ELSE');
        // console.log('name: ', name);
        // console.log('value: ', value);

        return { ...prev, [name]: value };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleResetErrors();
    const errors = handleErrors();
    if (errors) {
      console.log('**** ERROR ****', formError);
      return;
    } else {
      console.log('**** SUCCESS ****', formFields);
      toggleSuccess();
      //       handleResetForm();
    }
    //     handleErrors();
  };

  const handleErrors = () => {
    let error = false;
    if (!formFields.name.match(/[a-z]+/gis)) {
      setFormError((prev) => {
        return {
          ...prev,
          name: true,
        };
      });
      error = true;
    }
    if (
      !formFields.card_number
        .trim()
        .match(/[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/g)
    ) {
      setFormError((prev) => {
        return {
          ...prev,
          card_number: true,
        };
      });
      error = true;
    }
    if (!formFields.expiration.month.match(/[0-9][0-9]/g)) {
      setFormError((prev) => {
        return {
          ...prev,
          expiration: {
            ...prev?.expiration,
            month: true,
          },
        };
      });
      error = true;
    }
    if (!formFields.expiration.year.match(/[0-9][0-9]/g)) {
      setFormError((prev) => {
        return {
          ...prev,
          expiration: {
            ...prev?.expiration,
            year: true,
          },
        };
      });
      error = true;
    }
    if (!formFields.cvc.match(/[0-9][0-9][0-9]/g)) {
      setFormError((prev) => {
        return {
          ...prev,
          cvc: true,
        };
      });
      error = true;
    }
    return error;
  };

  const handleResetForm = () => {
    setFormFields(defaultFormFields);
  };
  const handleResetErrors = () => {
    setFormError(defaultErrors);
  };

  const checkError = (error: boolean) => {
    return error ? 'border-red-500' : 'border-femGrey focus:border-darkViolet';
  };

  const handleComplete = () => {
    handleResetForm();
    handleResetErrors();
    toggleSuccess();
  };
  //   useEffect(() => {

  //     console.log('checking errors....');
  //     handleErrors();
  //   }, [formFields]);

  //   console.log('Errors', formError);

  //   useEffect(() => {

  //     handleErrors();
  //   }, [formError.name, formError.card_number, formError.expiration.month, formError.expiration.year, formError.cvc]);

  return (
    <main className="h-screen flex flex-col items-center font-bold justify-center font-space">
      <div className="h-screen w-screen relative flex flex-col justify-between sm:justify-normal pb-12 sm:pb-0 sm:flex-row">
        <section className="relative bg-blue-300 text-femWhite">
          <img className="h-auto w-full sm:h-full" src={windowWidth && windowWidth > 400 ? bgAccentDT : bgAccentMB} />
          <div className="absolute z-10 -bottom-1/4 right-1/2 -translate-y-2 translate-x-1/2 sm:w-auto w-[300px] sm:bottom-1/2 sm:right-0 sm:translate-x-36 sm:-translate-y-12">
            <img src={cardFront} />
            <div className="absolute top-8 right-8 bottom-8 left-8 grid grid-rows-4">
              <img className="row-span-2 w-12 sm:w-auto" src={cardLogo} />
              {/* card number */}
              <span className="sm:text-2xl text-xl tracking-wide self-end">
                {formFields.card_number !== '' ? formFields.card_number : '1234 5678 9123 0000'}
              </span>
              {/* name */}
              <div className="flex justify-between items-end text-sm">
                <span>{formFields.name !== '' ? formFields.name : 'Jane Appleseed'}</span>
                {/* exp date */}
                <span>
                  {formFields.expiration.month !== '' ? formFields.expiration.month : '09'}/
                  {formFields.expiration.year !== '' ? formFields.expiration.year : '00'}
                </span>
              </div>
            </div>
          </div>
          <div className="absolute top-0 translate-y-1/4 left-2/3 -translate-x-2/3 w-[300px] sm:w-auto sm:top-1/2 sm:right-0 sm:left-0 sm:translate-y-0 sm:translate-x-72">
            <img src={cardBack} />
            <span className="absolute top-1/2 right-12 -translate-y-3">
              {formFields.cvc !== '' ? formFields.cvc : '000'}
            </span>
          </div>
        </section>
        <section className="flex absolute top-1/2 right-0 -translate-y-1/4 sm:static sm:translate-y-0 flex-col justify-center  items-center w-full px-2">
          {success ? (
            <Success handleComplete={handleComplete} />
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full sm:w-[400px] m-12 sm:mt-0 gap-8 font-normal text-sm"
            >
              <FormInput
                Okey={'name'}
                title="cardholder name"
                state={formFields.name}
                handler={handleFormFields}
                placeholder={'e.g. Jane Appleseed'}
                error={formError.name}
                checkError={checkError}
                errorMsg="Wrong format, letters only"
              />
              <FormInput
                Okey={'card_number'}
                title="card number"
                state={formFields.card_number}
                handler={handleFormFields}
                placeholder={'e.g. 1234 5678 9123 0000'}
                error={formError.card_number}
                checkError={checkError}
                errorMsg="Wrong format, numbers only"
              />
              <div className="grid grid-cols-2 gap-2 items-center">
                <label className="flex flex-col gap-2">
                  {'exp. date (mm/yy)'.toUpperCase()}
                  <div className="grid grid-cols-2 gap-2">
                    <label className="flex flex-col gap-2">
                      <input
                        type="text"
                        name="expiration month"
                        className={`${checkError(
                          formError.expiration.month,
                        )} " w-full border-2 text-lg border-solid focus:border-darkViolet px-4 py-2 rounded-lg "`}
                        placeholder="MM"
                        value={formFields.expiration.month}
                        onChange={(e) => {
                          handleFormFields(e.target.value, e.target.name);
                        }}
                      />
                      {formError.expiration.month && <span className="text-lightRed text-xs">Can't be blank</span>}
                    </label>

                    <label className="flex flex-col gap-2">
                      <input
                        type="text"
                        name="expiration year"
                        className={`${checkError(
                          formError.expiration.year,
                        )} " w-full border-2 text-lg border-solid focus:border-darkViolet px-4 py-2 rounded-lg "`}
                        placeholder="YY"
                        value={formFields.expiration.year}
                        onChange={(e) => {
                          handleFormFields(e.target.value, e.target.name);
                        }}
                      />
                      {formError.expiration.year && <span className="text-lightRed text-xs">Can't be blank</span>}
                    </label>
                  </div>
                </label>
                <FormInput
                  Okey="cvc"
                  title="cvc"
                  state={formFields.cvc}
                  handler={handleFormFields}
                  placeholder={'e.g. 123'}
                  error={formError.cvc}
                  checkError={checkError}
                  errorMsg="Can't be blank"
                />
              </div>
              <Button text="Confirm" type="submit" />
            </form>
          )}
        </section>
        <section className="sm:bottom-4 sm:translate-x-0 absolute bottom-2 right-1/2 translate-x-1/2 sm:right-1/3 w-full sm:w-auto">
          <Attribution href="https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw" />
        </section>
      </div>
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
