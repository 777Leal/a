import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>Pokédex</h1>
      <nav>
        <Link href="/">Início</Link> | <Link href="/search">Buscar</Link>
      </nav>
      <hr />
    </header>
  );
}
