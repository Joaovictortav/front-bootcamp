import React, { useContext } from "react";
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as yup from "yup";
import "./login.css";
import axios from "axios";
import { useHistory } from 'react-router-dom';

const Login = () => {
    let history = useHistory();
    const handleSubmit = values => {
        axios.post('http://localhost:44388/login', values)
        .then( retorno => {
            console.log(retorno);
            if (retorno.data.body.token) {
                localStorage.setItem('token', 'bearer ' + retorno.data.body.token);
                history.push('/home')
            }
        })
        .catch( error => {
            console.log(error);
            localStorage.removeItem('token');
        });
    }

    const validators = yup.object().shape({
        document: yup.number().required(),
        password: yup.string().min(3).required()
    })
      return (
        <div className="login">        
            <div className="dialog">   
                <h1 className="title-login">Login Teste JMV</h1>   
                <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={validators}>
                    <Form className="form">
                        <div className="form-group">
                            <Field name="document" className="form-field" />
                            <ErrorMessage component="span" name="document" className="form-error" />
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