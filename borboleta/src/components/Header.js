import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="logoContainer">
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <strong>Albero Dei Gelati</strong>
        </Link>
      </div>
      <nav>
        <a href="/#sobre">Sobre nós</a>
        <a href="/#produtos">Sabores</a>
        <a href="/#contato">Contato</a>
      </nav>
    </header>
  );
}
