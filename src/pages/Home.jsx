import ItemListConteiner from "../components/ItemListConteiner"
import { getProducts } from "../api/products";
import { useEffect, useState } from 'react';

export const Home = () => {

    return(
        <>
            <main>
            <ItemListConteiner/>
            </main>
        </>
    )
}