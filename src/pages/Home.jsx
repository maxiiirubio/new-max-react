import NavBar from "../components/NavBar"
import ItemListConteiner from "../components/ItemListConteiner"
import { getProducts } from "../api/products";
import { useEffect, useState } from 'react';

export const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      setProducts([]);
      getProducts()
        .then((items) => {
          setProducts(items);
        })
        .catch((e) => console.log(e));
    }, []);

    return(
        <>
            <NavBar/>
            <main>
            <ItemListConteiner
                products= {products}
            />
            </main>
        </>
    )
}