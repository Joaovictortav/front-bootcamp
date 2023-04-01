import React, { useContext } from "react";
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as yup from "yup";
import "./login.css";
import axios from "axios";
import { useHistory } from 'react-router-dom';

const Login = () => {
    let history = useHistory();
    const handleSubmit = values => {
        axios.post('https://localhost:7099/V1/Auth/Login', values)
        .then( retorno => {
            console.log(retorno);
            if (retorno.data.token) {
                localStorage.setItem('token', retorno.data.token);
                history.push('/home')
            }
        })
        .catch( error => {
            console.log(error);
            localStorage.removeItem('token');
        });
    }

    const validators = yup.object().shape({
        email: yup.string().required(),
        password: yup.string().min(3).required()
    })
      return (
        <div className="login">        
            <div className="dialog">   
                <h1 className="title-login">Login BootCamp</h1>   
                <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={validators}>
                    <Form className="form">
                        <div className="form-group">
                            <Field name="email" className="form-field" />
                            <ErrorMessage component="span" name="email" className="form-error" />
                        </div>
                        <div className="form-group">
                            <Field name="password" className="form-field" />
                            <ErrorMessage component="span" name="password" className="form-error" />
                        </div>
                        <button type="submit" className="form-btn">Login</button>
                    </Form>
                </Formik>
            </div>
        </div>
      );
  }

  export default Login