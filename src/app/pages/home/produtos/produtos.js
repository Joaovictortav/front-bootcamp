import React, { useCallback, useContext, useEffect, useState } from 'react';
import "./produtos.css";
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from "axios";
import { productContext } from '../../../../store/contextProduct';

const Produtos = () => {

    const context = useContext(productContext)
    console.log(context.products)

    return (
        <>
            <h3 className="title-product">Produtos</h3>
            <div className="container-cards">
                {context.products ? context.products?.map( (item) => (
                    <>  
                        <Card className="card" sx={{ maxWidth: 345, maxHeight: 600 }}>
                            <CardMedia
                            component="img"
                            image={item.link}
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.name} - {item.provider}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Descrição: {item.description}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Preço: {item.price}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Quantidade: {item.stockQuantity}
                            </Typography>
                            </CardContent>
                            <CardActions>
                                <Button >Detalhe</Button>
                            </CardActions>
                            
                        </Card>
                    </>
                    
                )): "Carregando" }
            </div>

        </>
    )
}

export default Produtos

                {/* <span>
                        <img className="img--prod" src={item.link}/>
                    </span> */} 
