import { useNavigate } from "react-router-dom";

const Item = ({id, nombre, marca, precio, stock, img}) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/producto/${id}`)}>
            <img src={img} alt="tabaco" width={200} height={200} />
            <h1>Nombre: {nombre}</h1>
            <h2>Marca: {marca}</h2>
            <p>Precio: {precio}</p>
            <p>Stock: {stock}</p>
        </div>
    )
}

export default Item;