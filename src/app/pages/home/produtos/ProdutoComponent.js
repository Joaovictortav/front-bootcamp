import React, { useCallback, useContext, useEffect, useState } from 'react';
import "./produtos.css";
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

export default function ProdutoComponent(props) {
    const [isFavorite, setIsFavorite] = useState(props.props?.favorite);
    const [itemP, setItemP] = React.useState(null);
    const handleClickOpen = async () => {
        const product = await axios.get(`https://localhost:44388/V1/Busca/GetProduct?store=${props.props.provider}&id=${props.props.id}`, {
            headers: {
                'AuthToken': localStorage.getItem('token')
            }
        });
        setItemP(product.data);
        setOpen(true);
    };
    const [open, setOpen] = React.useState(false);
    console.log(props)

    const handleClose = () => {
        setOpen(false);
    };

    const favoriteItem = async () => {
        console.log(props.props)
        setIsFavorite(!isFavorite)

        var user = localStorage.getItem('guid');
        console.log(user)

        const result = await axios.post(`https://localhost:44388/V1/Favoritos/Favorite`,
                                            {
                                                "name": user,
                                                "productId": props.props.id,
                                                "store": props.props.provider,

                                            }, {
                                                headers: {
                                                    'AuthToken': localStorage.getItem('token')
                                                }
                                            }).then(function (response) {
                                            console.log(response);
                                        })

    };

    const redirectProduct = (link) => {
        console.log(link);
        window.open(link);
    }
    return (
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
                            image={props.props.link}
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {props.props.name} - {props.props.provider}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Descrição: {props.props.description}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Preço: {props.props.price}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Quantidade: {props.props.stockQuantity}
                            </Typography>
                            </CardContent>
                            <CardActions>
                                <Button onClick={() => handleClickOpen(props.props)}>Detalhe</Button>
                                <Button onClick={() => favoriteItem()}>{isFavorite ? "Defavoritar" : "Favoritar"}</Button>
                            </CardActions>
                            
                        </Card>
                    </>
    )
}