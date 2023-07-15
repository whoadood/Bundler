function Attribution({ href }: { href: string }) {
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
        href={href}
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

export default Attribution;
