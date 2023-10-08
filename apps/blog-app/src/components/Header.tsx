import Link from 'next/link';

function Header() {
  return (
    <header>
      <Link href="/">
        <h1>{"Jangsu's Blog"}</h1>
      </Link>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">about</Link>
        <Link href="/posts">posts</Link>
        <Link href="/contact">contact</Link>
      </nav>
    </header>
  );
}

export default Header;
