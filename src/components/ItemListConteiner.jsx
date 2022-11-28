import { useParams } from "react-router-dom";
import Item from "./Item";
import { getProducts } from "../api/products";
import { useState } from "react";
import { useEffect } from "react";

const ItemListConteiner = ({}) => {
    const {marcas} = useParams();
    const [productos, setProducts] = useState([]);

    useEffect(() => {
      setProducts([]);
      getProducts(marcas)
        .then((items) => {
          setProducts(items);
        })
        .catch((e) => console.log(e));
    }, [marcas]);

    return (
        <div style={{display: "flex"}}>
            {productos.map((producto) => {
                return (
                <Item
                    key={producto.id}
                    id={producto.id}
                    nombre={producto.nombre}
                    marca={producto.marca}
                    precio={producto.precio}
                    stock={producto.stock}
                    img={producto.img}
                /> 
                )
            })}
        </div>
    )
}

export default ItemListConteiner;