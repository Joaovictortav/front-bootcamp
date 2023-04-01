import React, { useCallback, useContext, useEffect, useState } from 'react';
import "./produtos.css";
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { productContext } from '../../../../store/contextProduct';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import ProdutoComponent from './ProdutoComponent';

const Produtos = () => {
    const context = useContext(productContext)


    return (
        <>
            <h3 className="title-product">Produtos</h3>
            <div className="container-cards">
                {context.products ? context.products?.map( (item) => {

                    return <ProdutoComponent props={item}></ProdutoComponent>
                }
                ): "Carregando" }
            </div>

        </>
    )
}

export default Produtos

                {/* <span>
                        <img className="img--prod" src={item.link}/>
                    </span> */} 
