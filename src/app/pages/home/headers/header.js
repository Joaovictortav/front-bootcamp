import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import './header.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { FiLogOut } from "react-icons/fi";
import { productContext } from '../../../../store/contextProduct';


const logout = () => {
    localStorage.removeItem('token');
}


export default () => {
    const inputRef = useRef();
    console.log(inputRef)
    const context = useContext(productContext);

    const getProdutos = async function () {
        const products = await axios.get(`https://localhost:44388/V1/Busca/Get?name=${inputRef.current.value}`);
        context.setproducts(products.data);
    }

    return (
        <header>
            <div className="header--logo">
                BootCamp
            </div>
            <div className="header--user">
                <input type='text' ref={inputRef}></input>
                <button onClick={() => getProdutos()}>Confirmar</button>
                <Link className="logout-icon" to="/login">
                  <FiLogOut onClick={logout} className="logout"/>
                </Link>
            </div>
            
        </header>

    )
}