import React, { useCallback, useEffect, useState } from 'react';
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


const logout = () => {
    localStorage.removeItem('token');
}

export default ({blackHeader}) => {


    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState(null);
    const [description, setDescription] = React.useState(null);
    const [provider, setProvider] = React.useState(null);
    const [link, setLink] = React.useState(null);
    const [price, setPrice] = React.useState(null);
    const [stockQuantity, setStockQuantity] = React.useState(null);

    return (
        <header className={blackHeader ? 'black' : ''}>
            <div className="header--logo">
                BootCamp
            </div>
            <div className="header--user">
                <Link className="logout-icon" to="/login">
                  <FiLogOut onClick={logout} className="logout"/>
                </Link>
            </div>
            
        </header>

    )
}