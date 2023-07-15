import { useEffect, useState } from 'react';
import listIcon from '../../assets/news-letter/images/icon-list.svg';
import illustrationDT from '../../assets/news-letter/images/illustration-sign-up-desktop.svg';
import illustrationMB from '../../assets/news-letter/images/illustration-sign-up-mobile.svg';

const updatesList = [
  'Product discovery and building what matters',
  'Measuring to ensure updates are a success',
  'And much more!',
];

function Attribution() {
  return (
    <div
      className="mt-8"
      style={{
        fontSize: '11px',
        textAlign: 'center',
      }}
    >
      Challenge by{' '}
      <a
        style={{
          color: 'hsl(228, 45%, 44%)',
        }}
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a href="https://www.github.com/whoadood" target="_blank">
        whoadood
      </a>
      .
    </div>
  );
}

function ActButton({
  text,
  type,
  clickHandler,
}: {
  text: string;
  type: 'button' | 'submit' | 'reset';
  clickHandler?: () => void;
}) {
  return type === 'submit' ? (
    <button
      className="py-4 bg-darkSlate text-femWhite font-bold rounded-lg hover:shadow-lg hover:shadow-creamcycle hover:bg-gradient-to-r hover:from-creamcycle hover:to-tomato"
      type={type}
    >
      {text}
    </button>
  ) : (
    <button
      className={
        'py-4 bg-darkSlate text-femWhite font-bold rounded-lg hover:shadow-lg hover:shadow-creamcycle hover:bg-gradient-to-r hover:from-creamcycle hover:to-tomato'
      }
      type={type}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
}

function SignUpCard() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setWindowWidth]);

  const toggleSuccess = () => setSuccess(!success);

  useEffect(() => {
    if (email === '') {
      setError(false);
      // console.log("use effect reset function");
    }
  }, [email]);

  const validateEmail = (text: string) => {
    const re = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;

    // console.log("validate email regex test: ", re.test(text));
    return re.test(text);
  };

  const updateEmail = (text: string) => {
    setEmail(text);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError(false);

    const valid = validateEmail(email);

    if (valid) {
      updateEmail('');
      toggleSuccess();
    } else {
      setError(true);
    }
    // console.log("email: ", email);
    // console.log("the email is: ", valid ? "VALID" : "INVALID");
  };

  if (!success) {
    return (
      <div className="bg-femWhite p-0 sm:p-4 justify-end flex flex-col-reverse sm:flex-row sm:gap-4 rounded-none sm:rounded-xl sm:w-auto w-full h-screen sm:h-auto text-darkSlate">
        <div className="sm:px-12 px-4 sm:mt-0 mt-12 flex justify-center">
          <div className="flex flex-col max-w-[340px] sm:max-w-[400px] gap-4 justify-center">
            <h1 className="text-5xl font-bold">Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul className="flex flex-col gap-3">
              {updatesList.map((u) => (
                <li className="flex gap-4" key={u}>
                  <img className="w-6 self-start" src={listIcon} />
                  <p>{u}</p>
                </li>
              ))}
            </ul>
            <form onSubmit={handleSubmit} className="flex flex-col mt-4 gap-2">
              <label className="font-bold text-sm relative">
                <span>Email address</span>
                <span className={error ? 'absolute right-0 text-tomato' : 'hidden'}>Valid email required</span>
              </label>
              <input
                type="text"
                className={
                  error
                    ? 'border-2 border-tomato border-solid bg-tomato/50 text-tomato rounded-lg px-2 py-4 mb-4'
                    : 'border-femGrey focus:border-darkSlate hover:border-darkSlate border-2 rounded-lg px-2 mb-4 py-4 border-solid'
                }
                onChange={(e) => {
                  updateEmail(e.target.value);
                }}
                placeholder="email@company.com"
              />
              <ActButton text="Subscribe to monthly newsletter" type="submit"></ActButton>
            </form>
          </div>
        </div>
        <img src={windowWidth && windowWidth > 400 ? illustrationDT : illustrationMB} />
      </div>
    );
  }

  return (
    <div className="bg-femWhite p-8 flex flex-col relative sm:h-auto justify-between sm:justify-center h-screen gap-6 rounded-none sm:rounded-xl max-w-[400px]">
      <div className="flex flex-col gap-4 mt-32 sm:mt-0">
        <img className="w-12" src={listIcon} />
        <h2 className="text-5xl font-bold">Thanks for subscribing!</h2>
        <p className="text-sm">
          A confirmation email has been sent to <span className="font-bold">{email}</span>. Please open it and click the
          button inside to confirm your subscription.
        </p>
      </div>
      <ActButton
        text="Dismiss message"
        type="button"
        clickHandler={() => {
          setEmail('');
          setError(false);
          setSuccess(false);
        }}
      />
    </div>
  );
}

function NewsLetter() {
  return (
    <main className="min-h-screen bg-darkSlate flex flex-col justify-center items-center">
      <SignUpCard />
      <Attribution />
    </main>
  );
}

export default NewsLetter;

/* 

<!-- Sign-up form start -->

  Stay updated!

  Join 60,000+ product managers receiving monthly updates on:

  Product discovery and building what matters
  Measuring to ensure updates are a success
  And much more!

  Email address
  email@company.com

  Subscribe to monthly newsletter

  <!-- Sign-up form end -->

  <!-- Success message start -->

  Thanks for subscribing!

  A confirmation email has been sent to ash@loremcompany.com. 
  Please open it and click the button inside to confirm your subscription.

  Dismiss message

  <!-- Success message end -->

*/

//  *********************************************************

/* 

# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Tomato: hsl(4, 100%, 67%)

### Neutral

- Dark Slate Grey: hsl(234, 29%, 20%)
- Charcoal Grey: hsl(235, 18%, 26%)
- Grey: hsl(231, 7%, 60%)
- White: hsl(0, 0%, 100%)

## Typography

### Body Copy

- Font size (paragraph): 16px

### Font

- Family: [Roboto](https://fonts.google.com/specimen/Roboto)
- Weights: 400, 700


*/
