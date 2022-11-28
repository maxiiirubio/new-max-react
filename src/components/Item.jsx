import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useCartContext } from "../context/CartContext";

const Item = ({id, nombre, marca, precio, stock, img}) => {
    const navigate = useNavigate();
    const cart = useCartContext()

    return (
        <div onClick={() => navigate(`/producto/${id}`)}>
            <img src={img} alt="tabaco" width={200} height={200} />
            <h1>{nombre}</h1>
            <h2>Marca: {marca}</h2>
            <p>Precio: {precio}</p>
            <p>Stock: {stock}</p>
        </div>
    )
}

export default Item;