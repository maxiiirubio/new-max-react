import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProduct} from "../api/products";
import { Contador } from "../components/Contador";
import { useCartContext } from "../context/CartContext";

export const VerProdu = () => {

    const [product, setProduct] = useState([]);
    const { addProduct } = useCartContext();
    const { producto } = useParams();

    useEffect(()=>{
        getProduct(producto).then((data) => {
        setProduct(data);
    });
    },[producto]);

    const handleAdd = (qty) => {
        addProduct(product, qty);
      };

    return(
        <> 
           <div>
            <img src={product.img} alt="tabaco" width={200} height={200} />
            <h1>Nombre: {product.nombre}</h1>
            <h2>Marca: {product.marca}</h2>
            <p>Precio: {product.precio}</p>
            <p>Stock: {product.stock}</p>
            <Contador stock={product.stock} onAdd={handleAdd}/>
        </div>
        </>
    )
}