import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import Header from "./headers/header";
import Produtos from './produtos/produtos';

const Home = () => {

    const [produtos, setProdutos] = useState(null);

    return (
        <>        
            <Header/> 
            <Produtos/>
        </>
    )
}

export default Home