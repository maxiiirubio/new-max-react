import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar"
import { getProduct} from "../api/products";

export const VerProdu = () => {

    const [product, setProduct] = useState([]);
    const { producto } = useParams();

    useEffect(()=>{
        getProduct(producto).then((data) => {
        setProduct(data);
    });
    },[producto]);

    return(
        <> 
           <div>
            <img src={product.img} alt="tabaco" width={200} height={200} />
            <h1>Nombre: {product.nombre}</h1>
            <h2>Marca: {product.marca}</h2>
            <p>Precio: {product.precio}</p>
            <p>Stock: {product.stock}</p>
        </div>
        </>
    )
}