import { Link } from "react-router-dom"

const links = [
  {to: "/marca/Choice", label: "TABACO CHOICE"},
  {to: "/marca/Raw", label: "TABACO RAW"},
  {to: "/marca/Argento", label: "TABACO ARGENTO"}
]


const NavBar = () => {
    return (
    <header>    
        <nav className="header">
            <Link to="/" className="logo"><h1>NEW <span id="logoSpan">MAX</span></h1></Link>
            <div className="barra">
              {links.map(({label, to}) => {
                return(
                  <Link to={to} hey={label} className="barraEstilo">
                  {label}
                  </Link>
                )
              })}
            </div>
        </nav>
    </header>
)}

export default NavBar