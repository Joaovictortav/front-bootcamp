import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import Header from "./headers/header";
import Produtos from './produtos/produtos';

const Home = () => {

    const [blackHeader, setBlackHeader] = useState(false);
    const [produtos, setProdutos] = useState(null);

    useEffect(()=> {
        const getProdutos = async () => {
            const products = await axios.get("https://localhost:44388/V1/Busca/Get");
            console.log("Produtos: ", products.data);
            setProdutos(products.data);
        }

        getProdutos();
    }, [])

    return (
        <>        
            <Header blackHeader={blackHeader}/> 
            <Produtos data={produtos} />
        </>
    )
}

export default Home