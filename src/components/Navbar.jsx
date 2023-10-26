export default function Navbar() {
  return (
    <nav className="Nav">
      <h1 href="/" className="site-name">
        NavBar
      </h1>
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">AboutUs</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
