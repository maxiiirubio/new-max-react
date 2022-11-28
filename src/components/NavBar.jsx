import { Link, Outlet} from "react-router-dom"
import { FaShoppingCart } from 'react-icons/fa';
import { useCartContext } from "../context/CartContext";

const links = [
  {to: "/marca/Choice", label: "TABACO CHOICE"},
  {to: "/marca/Raw", label: "TABACO RAW"},
  {to: "/marca/Argento", label: "TABACO ARGENTO"}
]


const NavBar = () => {
  const { getCartCant } = useCartContext();

    return (
    <>
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
            <div>
              <Link to="/cart" style={{color:"white", textDecoration:"none"}}>
              <FaShoppingCart/>
              <span> {getCartCant()} </span>
              </Link>
            </div>
        </nav>
    </header>
    <Outlet/>
    </>
)}

export default NavBar