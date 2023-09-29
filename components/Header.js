import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header>
      <div/>
      <p>
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
