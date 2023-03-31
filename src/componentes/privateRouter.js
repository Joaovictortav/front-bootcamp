import React, { useCallback, useEffect, useState } from 'react'
import {Route, Redirect} from 'react-router';
import isTokenValid from "./auth";
import axios from "axios";


const PrivateRouter =  props => {

    const [auth, setAuth] = useState(false);
    
    useEffect(()=> {
        const getAuth = async () => {
            const tokenExist = !!localStorage.getItem('token');
            if (tokenExist) {
                const isValidReq = await axios.get('http://localhost:44388/authentication', {
                    headers: {
                        authorization: localStorage.getItem('token')
                    }
                });
                setAuth(isValidReq.data);    
            } else {
                setAuth(false);
            }
        }
        getAuth();
    }, [])
    
        console.log('Valor do auth ' + auth);
    //     return auth ? (
    //     <Route {...props}/>
    // ) : (
    //     <Redirect to="/login"/>
    // )

    return isTokenValid() ? (
        <Route {...props}/>
    ) : (
        <Redirect to="/login"/>
    )
}

export default PrivateRouter