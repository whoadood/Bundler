import React from 'react';

function Main({ children, font, bg }: { children: JSX.Element; font: string; bg?: string }) {
  return (
    <main
      className={`${font} ${bg ? bg : 'bg-gray-200'} " h-screen flex flex-col items-center font-bold justify-center "`}
    >
      {children}
    </main>
  );
}

export default Main;
