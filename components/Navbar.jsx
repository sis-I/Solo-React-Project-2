import globeLogo from "../src/assets/globelogo.svg"

export default function Navbar() {
  return (
    <nav>
      <img className="nav--logo" src={globeLogo} alt="logo" />
      <p className="">my travel journal</p>
    </nav>
  )
}