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

const Produtos = () => {

    const [itemP, setItemP] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const context = useContext(productContext)
    console.log(context.products)

    const handleClickOpen = async (item) => {
        const product = await axios.get(`https://localhost:44388/V1/Busca/GetProduct?store=${item.provider}&id=${item.id}`);
        console.log(product.data);
        setItemP(product.data);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const redirectProduct = (link) => {
        console.log(link);
        window.open(link);
    }

    return (
        <>
            <h3 className="title-product">Produtos</h3>
            <div className="container-cards">
                {context.products ? context.products?.map( (item) => (
                    <>  
                        <div>
                            <Dialog open={open} onClose={handleClose}>
                                <DialogTitle>Detalhe</DialogTitle>
                                <DialogContent>
                                <DialogContentText>
                                    <div> {itemP?.name } </div>
                                    <br></br>
                                    <div>{itemP?.detalhe}</div>
                                </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                <Button onClick={() => redirectProduct(itemP.link)}>Comprar</Button>
                                <Button onClick={handleClose}>Fechar</Button>
                                </DialogActions>
                            </Dialog>
                        </div>
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
                                <Button onClick={() => handleClickOpen(item)}>Detalhe</Button>
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
